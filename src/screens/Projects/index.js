import React, { useState, useContext } from 'react';

import firebase from '../../services/firebaseConnection'

import StoryProject from '../../components/StoriesProject'

import { AuthContext } from '../../contexts/auth'

import { Modal, View, Text, TouchableOpacity, Button, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'

import { Wrapper, Header, Logo, Title, DescContainer, Description, AreaInput, Input, Input2, Input3, InputContainer,
  DescContainer2, Description2, SubmitButton, SubmitText, Container } from './styles'

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


export default function Projects() {

  const [modalVisible2, setModalVisible2] = useState(false);

  const [founder, setFounder] = useState('');
  const [cofounder, setCoFounder] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState();
  const [showLogo, setShowLogo] = useState();

  const [sugestions, setSugestions] = useState([]);

  const { user } = useContext(AuthContext);

  async function ChooseLogo() {
    if (Constants.platform) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status != 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }else{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
      });
      setShowLogo(result.uri)
      if (!result.cancelled) {
        UploadImage(result.uri, user.nome)
      }
    }}
    
  }

  async function UploadImage(uri, imageName) {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("Logos/" + imageName)
    return ref.put(blob)
    .then(() => {
       ref.getDownloadURL().then((url) => {
         setLogo(url)
         console.log(logo)
       } )
    })
  }


  async function handleSubmit(){
    if(name != '' && founder != ''){
      let sugestions = await firebase.database().ref('sugestions');
      let chave = sugestions.push().key;

      sugestions.child(chave).set({

        Postador: user.nome,
        nome: name,
        fundador: founder,
        cofundador: cofounder,
        descricao: description,
        Logo: logo

      })
      UploadImage(logo, name)

      setFounder('');
      setCoFounder('');
      setName('');
      setDescription('')
      setLogo('https://www.colorhexa.com/cccccc.png')
      setShowLogo()
      console.log(logo)
      setModalVisible2(true)
    } else {
      alert('Preencha todos os campos!')
    }
    
}

 return (
   <Wrapper>


      <Header>
          <Logo source={require('../../images/logo.png')}/>
          <Title>Colégio e Curso Planck</Title>
      </Header>

      <ScrollView>
      <DescContainer>
        <Description>Projetos Planck</Description>
       </DescContainer>

      <StoryProject />



      <DescContainer2>
          <Description2> Envie sugestões de projetos</Description2>
      </DescContainer2>


        <InputContainer>

         

         <TouchableOpacity onPress={ChooseLogo}>
         <Image source={{ uri: showLogo }} style={{ width: 90, height: 90, borderRadius: 50, backgroundColor: '#ccc' }}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={ChooseLogo} style={{marginBottom: 20, marginTop: 13}}>
          <Text style={{ color: '#5c2a71', fontWeight: 'bold', fontSize:  15}}>INSIRA UMA LOGO</Text>
        </TouchableOpacity>


          <AreaInput>
              <Input2
                placeholder="Fundador"
                autoCorrect={false}
                autoCapitalize="none"
                value={founder}
                onChangeText={ (text) => setFounder(text) }
                />
                <Input2
                placeholder="Co-Fundador"
                autoCorrect={false}
                autoCapitalize="none"
                value={cofounder}
                onChangeText={ (text) => setCoFounder(text) }
                />
            </AreaInput>

            <AreaInput>
                <Input
                placeholder="Nome sugerido"
                autoCorrect={false}
                autoCapitalize="none"
                value={name}
                onChangeText={ (text) => setName(text) }
                />
            </AreaInput>

            <AreaInput>
                <Input3
                placeholder="Descrição"
                autoCorrect={false}
                autoCapitalize="none"
                multiline={true}
                value={description}
                onChangeText={ (text) => setDescription(text) }
                />
              </AreaInput>

              <SubmitButton onPress={handleSubmit} style={{ marginBottom: 40 }}>
                <SubmitText>Pronto</SubmitText>
              </SubmitButton>




          </InputContainer>

          </ScrollView>






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


   </Wrapper>
  )}