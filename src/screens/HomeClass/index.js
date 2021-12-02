import React, { useContext, useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList, Platform } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';

import firebase from '../../services/firebaseConnection';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { AuthContext } from '../../contexts/auth'

import Feedback from '../../components/Feedback'
import Stories from '../../components/Stories'

import Phrase from '../../components/Phrase'
import Introduction from '../../components/Introduction'

import { Wrapper, Header, Logo, Title, Description, DescContainer, 
  Container, ContainerScroll, AdsContainer, Informate,
  Divider,  ActionsContainer, Action, InfoArea, Guide, 
  GuideArea,  GuideText, TextArea, GuideButton, ButtonName  ,
  AddContainer, Divider2, ContainerStories,
  DividerContainer,} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

import List3 from '../../components/List3'



export default function Home() {

  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user.nome)
  const [logo, setLogo] = useState();
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true);

  const [icon, setIcon] = useState("heart-outline")
  const [color, setColor] = useState("#000")

  function like() { //humilde!
    if(icon == "heart-outline"){
      setIcon("heart")
      setColor("#5c2a71")
    }else if(icon == "heart"){
      setIcon("heart-outline")
      setColor("#000")
    }
  }

  const [helpers, setHelpers] = useState([]);



  useEffect(()=> {

    async function dados2(){

      
      await firebase.database().ref('phrases').on('value', (snapshot)=> {
        setHelpers([]);

        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            frase: chilItem.val().frase,
            nome: chilItem.val().nome,
            wiki: chilItem.val().wikipedia,
          };

          setHelpers(oldArray => [...oldArray, data].reverse());
        })
      setLoading(false)

      })

    }

    dados2();



  }, []);



  const [helpers1, setHelpers1] = useState([]);

  useEffect(()=> {

    async function dados4(){

      
      await firebase.database().ref('users').orderByChild('uid').equalTo(user.uid).on('value', (snapshot)=> {
        setHelpers1([]);

        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            nome: chilItem.val().nome,
            id: chilItem.val().uid,
          };

          setHelpers1(data);
        })
      setLoading(false)

      })

    }

    dados4();


  }, []);



  async function ChooseLogo() {
    if (Constants.platform) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status != 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }else{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [9, 16],
          quality: 1,
      });
      if (!result.cancelled) {
        UploadImage(result.uri, user.nome)
      }
      let stories = await firebase.database().ref('stories');
      let chave = stories.push().key;

      stories.child(chave).set({

        story: logo,
        name: name

      })
      setLogo('')
       
    }}
    
  }

  async function UploadImage(uri, imageName) {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("Stories/" + imageName)
    return ref.put(blob)
    .then(() => {
       ref.getDownloadURL().then((url) => {
         setLogo(url)
       } )
    })
  }

    useEffect(()=> {

      async function dados(){
  
        await firebase.database().ref('stories').on('value', (snapshot)=> {
          setPost([]);
  
          snapshot.forEach((chilItem) => {
            let data = {
              key: chilItem.key,
              name: chilItem.val().name,
              img: chilItem.val().story,
            };
  
            setPost(oldArray => [...oldArray, data].reverse());
          })
          setLoading(false);
        })

        
  
      }
  
      dados();
  
  
    }, []);


    const [posted, setPosted] = useState([])
    const [postado, setPostado] = useState([])

    useEffect(()=> {

      async function dados2(){
  
        await firebase.database().ref('News').on('value', (snapshot)=> {
          setPosted([]);
  
          snapshot.forEach((chilItem) => {
            let data = {
              key: chilItem.key,
              titulo: chilItem.val().Título,
              img: chilItem.val().Logo,
              tipo: chilItem.val().Tipo,
              Descrição: chilItem.val().descricao,
              link: chilItem.val().Link,
            };
  
            setPosted(oldArray => [...oldArray, data].reverse());
          })
          setLoading(false);
        })
  
      }
  
      dados2();

  
    }, []);



 return (
   <Wrapper>
 
      <Header>
          <Logo source={require('../../images/logo.png')}/>
          <Title>Colégio e Curso Planck</Title>
          <Feedback />
      </Header>



    <ContainerScroll>

    {loading ? 
      (
        <ActivityIndicator color="#121212" size={45} />
      ) :
      (
       
      <>
        <FlatList
        horizontal
        style={{ paddingLeft: 16 }}
        keyExtractor={item => item.key}
        data={post}
        renderItem={ ({item}) => ( <Stories data={item} /> )  }
        />
        <DividerContainer>
          <Divider2></Divider2>
        </DividerContainer>
      </>  
      
      )
      }

{loading ? 
      (
        <ActivityIndicator color="#121212" size={45} />
      ) :
      (
      <>
        <FlatList
        keyExtractor={item => item.key}
        data={helpers}
        renderItem={ ({item}) => ( <Phrase data={item}/> )  }
        />
      </>
      )
      }


{loading ? 
      (
        <ActivityIndicator color="#121212" size={45} />
      ) :
      (
       
      <>

    <>
    <DescContainer>
      <Description>Olá, {helpers1.nome}:)  </Description>
      <Description>Que tal ficar ligados nas novidades:</Description>
    </DescContainer>  
   </>

    <FlatList
          keyExtractor={item => item.key}
          data={posted}
          renderItem={ ({item}) => ( <List3 data={item} /> )  }
          />
      </>  
      
      )
      }




 
  </ContainerScroll>


      
   </Wrapper>
  );
}