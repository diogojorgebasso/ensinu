import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, TouchableHighlight, View, ActivityIndicator, FlatList, 
  Platform, Text, Modal, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';

import firebase from '../../services/firebaseConnection'

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { AuthContext } from '../../contexts/auth'

import { AreaInput, Input, Input2, Input3, InputContainer, SubmitButton, 
  SubmitText,} from '../Connectivity/styles'

import Feedback from '../../components/Feedback'
import Stories from '../../components/Stories'

import List3 from '../../components/List3'

import { Wrapper, Header, Logo, Title, Description, DescContainer, 
  Container, ContainerScroll, AdsContainer, Informate,
  Divider,  ActionsContainer, Action, InfoArea, Guide, 
  GuideArea,  GuideText, TextArea, GuideButton, ButtonName  ,
  AddContainer, Divider2, ContainerStories,
  DividerContainer,} from './styles'



import PickerType from '../../components/PickerType';

export default function Home() {

  const [modalVisible, setModalVisible] = useState(false);

  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user.nome);
  const [logo, setLogo] = useState();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [link, setLink] = useState('')
  const [link1, setLink1] = useState('')

  const [number, setNumber] = useState(Math.floor(Math.random() * 1000) + 1);

  const [icon, setIcon] = useState('');

  const [preview, setPreview] =  useState('');

  async function ChooseLogo() { 
    if (Constants.platform) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status != 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }else{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [16, 9],
          quality: 1,
      });
      if (!result.cancelled) {
        setPreview(result.uri)
        setModalVisible(true)
      }
    }}
    
  }

  async function play(){
    UploadImage(preview, number)
    
    let stories = await firebase.database().ref('stories');
    let chave = stories.push().key;

    stories.child(chave).set({

      materia: user.Matéria,
      numero: number,
      story: logo,
      name: name,
      link1: link,
      link2: link1

    })
    setLogo('')
    setPreview('')
    setModalVisible(false)
  }

  async function UploadImage(uri, imageName) {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("Stories/" + imageName)
    return ref.put(blob)
    .then(() => {
       ref.getDownloadURL().then((url) => {
         setLogo(url)
         console.log(logo)
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
              materia: chilItem.materia,
              nome: chilItem.val().name,
              img: chilItem.val().story,
            };
  
            setPost(oldArray => [...oldArray, data].reverse());
          })
          setLoading(false);
        })
  
      }
  
      dados();
  
  
    }, []);

    function close(){ //fechar modal
      setModalVisible(false)
    }

    const [posted, setPosted] = useState([])

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



    <ContainerScroll
    showsVerticalScrollIndicator={false}

    >

    {loading ? 
      (
        <ActivityIndicator color="#121212" size={45} />
      ) :
      (
       <>
          <FlatList
          showsHorizontalScrollIndicator={false}
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
      <DescContainer>
        <Description>Olá, {user.nome} :)  </Description>
        <Description>Que tal ficar ligados nas novidades:</Description>
      </DescContainer>
      

          <FlatList
          keyExtractor={item => item.key}
          data={posted}
          renderItem={ ({item}) => ( <List3 data={item} /> )  }
          />
        </>  
      )
      }

</ContainerScroll>

  <View 
    style={{position: "absolute", marginLeft: '3%', marginTop: '160%'}}
  >
        <AddContainer
          onPress={ChooseLogo}>
          <Entypo name="camera" size={30} color="#fff" />
        </AddContainer>
  </View>

  <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}>
          <View style={{ flex: 1, backgroundColor: '#fff',  }}>
          <SafeAreaView style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <AntDesign name="left" size={32} color="#5C2A71" style={{ marginTop: 10, marginLeft: 5,}}/>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: '#5C2A71', fontWeight: 'bold', marginLeft: 125, marginTop: 12}}>Adicionar</Text>
        </SafeAreaView>

        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: preview}} style={{ width: '88%', height: '50%', opacity: 1, marginTop: 20, borderRadius: 15 }}/>

        <View style={{ marginTop: 40, alignItems: "center", justifyContent: "center" }}>
          <AreaInput> 
              <Input
                placeholder="link(1)"
                autoCorrect={false}
                autoCapitalize="none"
                value={link}
                onChangeText={ (text) => setLink(text) }
                />
            </AreaInput>

            <AreaInput style={{ marginTop: 10 }}> 
              <Input
                placeholder="link(2)"
                autoCorrect={false}
                autoCapitalize="none"
                value={link1}
                onChangeText={ (text) => setLink1(text) }
                />
            </AreaInput>

            <TouchableOpacity onPress={play} style={{ width: 60, height: 60, backgroundColor: '#5c2a71', marginTop: 25,alignItems: 'center', flexDirection: 'column', justifyContent: "center", borderRadius: 30,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,}}>
        <MaterialCommunityIcons name="check-bold" size={30} color="#FFF" />
      </TouchableOpacity>  
        </View>
        </View>


          </View>

  </Modal>
      
   </Wrapper>
  );
}