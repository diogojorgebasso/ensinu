import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, TouchableHighlight, View, ActivityIndicator, FlatList, 
  Platform, Text, Modal, Image } from 'react-native';
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
import { TouchableOpacity } from 'react-native-gesture-handler';


import PickerType from '../../components/PickerType';

export default function Home() {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user.nome)
  const [logo, setLogo] = useState();
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true);
  const [link1, setLink1] = useState('')

  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const [preview, setPreview] =  useState('');

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
        setPreview(result.uri)
        setModalVisible1(true)
      }
    }}
    
  }

  async function play(){
    UploadImage(preview, number)
    
    let stories = await firebase.database().ref('stories');
    let chave = stories.push().key;

    stories.child(chave).set({

      story: logo,
      name: user.nome,
      link1: link,
      link2: link1

    })
    setLogo('')
    setPreview('')
    setModalVisible1(false)
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

    useEffect( () => {

      async function dados(){
  
        await firebase.database().ref('stories').on('value', (snapshot)=> {
          setPost([]);
  
          snapshot.forEach((chilItem) => {
            let data = {
              key: chilItem.key,
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

    const [description, setDescription] = useState('');
    const [img, setImg] = useState();
    const [showLogo, setShowLogo] = useState();
    const [type, setType] = useState(null);
    const [nome, setNome] = useState('')
    const [link, setLink] = useState('')

    const [posted, setPosted] = useState([])

    const [modalVisible2, setModalVisible2] = useState(false);

    const [sugestions, setSugestions] = useState([]);
  
    async function ChooseLogo2() {
      if (Constants.platform) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status != 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }else{
          let result2 = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        setShowLogo(result2.uri)
        if (!result2.cancelled) {
          UploadImage2(result2.uri, number)
        }
      }}
      
    }
  
    async function UploadImage2(uri, imageName) {
      const response = await fetch(uri);
      const blob = await response.blob();
  
      var ref = firebase.storage().ref().child("Noticias/" + imageName)
      return ref.put(blob)
      .then(() => {
         ref.getDownloadURL().then((url) => {
           setImg(url)
           console.log(img)
         } )
      })
    }
  
  
    async function handleSubmit(){
      
        let sugestions = await firebase.database().ref('News');
        let chave = sugestions.push().key;
  
        sugestions.child(chave).set({
  
          Postador: user.nome,
          Título: nome,
          descricao: description,
          Logo: img,
          Tipo: type,
          Link: link
  
        })
        UploadImage2(logo, name)
  
        setNome('');
        setDescription('')
        setImg('https://www.colorhexa.com/cccccc.png')
        setShowLogo()
        setLink('')
        setModalVisible2(true)
        setModalVisible(false)

      
  }

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

<Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>


          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <AntDesign name="left" size={32} color="#5C2A71" style={{ marginTop: 10, marginLeft: 5,}}/>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, color: '#5C2A71', fontWeight: 'bold', marginLeft: 125, marginTop: 12}}>Adicionar</Text>
          </View>




            <Container>
            <InputContainer>
 
        <TouchableOpacity onPress={ChooseLogo2}>
          <Image source={{ uri: showLogo }} style={{ width: 150, height: 150, borderRadius: 25, backgroundColor: '#ccc' }}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={ChooseLogo2} style={{marginBottom: 0, marginTop: 13}}>
          <Text style={{ color: '#5c2a71', fontWeight: 'bold', fontSize:  15}}>INSIRA UMA LOGO</Text>
        </TouchableOpacity>

        <View style={{ marginBottom: 15, marginLeft: 5 }}>

          <PickerType onChange={setType}/> 

        </View>

            <AreaInput>
                <Input
                placeholder="Título"
                autoCorrect={false}
                autoCapitalize="none"
                value={nome}
                onChangeText={ (text) => setNome(text) }
                />
            </AreaInput>

            <AreaInput>
                <Input3
                placeholder="Descrição ( até 120 caracteres )"
                autoCorrect={false}
                autoCapitalize="none"
                multiline={true}
                value={description}
                onChangeText={ (text) => setDescription(text) }
                maxLength={120} 
                />
              </AreaInput>

             <AreaInput> 
              <Input
                placeholder="link da notícia"
                autoCorrect={false}
                autoCapitalize="none"
                value={link}
                onChangeText={ (text) => setLink(text) }
                />
            </AreaInput>


            </InputContainer>  

             <SubmitButton onPress={handleSubmit} >
                <SubmitText>Pronto</SubmitText>
              </SubmitButton>

            </Container>  

        </SafeAreaView>
      </Modal>

      <Modal
        visible={modalVisible2}
        transparent={true}
        animationType={"slide"}
      >
      
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 300}}>
      
      <View style={{ backgroundColor: '#fff', width: 250, height: 200, borderRadius: 20, shadowColor: "#000", flexDirection: "column",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5, justifyContent: "flex-end"}}>
        

          <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "flex-start", marginBottom: 20}}>
             <Logo source={require('../../images/logo.png')}/>
             <Text style={{ fontSize: 22, color: '#5c2a71', fontWeight: "bold"}}>Sugestão enviada com</Text>
             <Text style={{ fontSize: 22, color: '#5c2a71', fontWeight: "bold"}}>sucesso! :)</Text>
          </View>

      <TouchableOpacity
              onPress={() => {
                setModalVisible2(!modalVisible2);
              }}>
            <View style={{}}>
               <View style={{ backgroundColor: '#5c2A71', width: 250, height: 70, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                  <Text style={{ fontSize: 20, color: '#fff', fontWeight: "bold"}}>Ok</Text>
              </View>
            </View>  
        </TouchableOpacity>

      </View>

      </View>

      </Modal>

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

  <View style={{position: "absolute", marginLeft: '80%', marginTop: '160%'}}>
        <AddContainer
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={{ fontSize: 40, color: '#fff', marginTop: -5}}>+</Text>
        </AddContainer>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible1}>
          <View style={{ flex: 1, backgroundColor: '#fff',  }}>
          <SafeAreaView style={{ flexDirection: 'row', marginLeft: '5%' }}>
            <TouchableOpacity
              onPress={ChooseLogo}>
              <AntDesign name="left" size={32} color="#5C2A71" style={{ marginTop: 10, marginLeft: 5,}}/>
            </TouchableOpacity>
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