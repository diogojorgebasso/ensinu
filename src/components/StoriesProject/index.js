import React, { useState, useContext} from 'react';
import firebase from '../../services/firebaseConnection'

import {  
    Container, 
    ContainerStories,
    Option, 
    Label, 
    Stories, 
    Img, 
    Img2, 
    Divider,
    Divider2, 
    DividerContainer,
    Title,
    Information,
    Information2,
    SubmitButton,
    SubmitText,
    TextView, 
    Logo,
    Header
  }
    from './styles'

    import { View, Text, Modal, Button, TouchableHighlight, Alert, SafeAreaView, Keyboard, FlatList, ActivityIndicator} from 'react-native';
    import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


    import img1 from '../../images/Radio.png'
    import img2 from '../../images/cine.png'

    import { AuthContext } from '../../contexts/auth'


const items = [
    {
      key: String(Math.random()),
      img: img1,
      label: 'Rádio Planck'
    },
    {
      key: String(Math.random()),
      img: img2,
      label: 'Cine Planck'
    },
  ]

export default function StoryProject() {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false)

  const { user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);

  const nome = user.nome

  async function handleSubmit(){

    let sugestions = await firebase.database().ref('Projects');
    let chave = 'Rádio Planck'

    sugestions.child(chave).set({

      nome: nome,

    });

    setModalVisible(false)
    

}

async function handleSubmit1(){

  let sugestions = await firebase.database().ref('Projects');
  let chave = 'Cine Planck'

  sugestions.child(chave).set({

    nome: nome,

  });

  setModalVisible1(false)
  setModalVisible2(true)
  
}



 return (
    <Container>
        <ContainerStories>
       
        <Option onPress={() => {
          setModalVisible(true);
        }}>
        <Stories colors={['#4A2C69', '#6EB4D0']} >
            <Img source={img1}></Img>
            </Stories>
            <Label>Rádio Planck </Label>
        </Option>

        <Option onPress={() => {
          setModalVisible1(true);
        }}>
        <Stories colors={['#4A2C69', '#6EB4D0']} >
            <Img source={img2}></Img>
            </Stories>
            <Label>Cine Planck</Label>
        </Option>



    <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>


          <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <AntDesign name="left" size={32} color="#5C2A71" style={{ marginTop: 10, marginLeft: 5,}}/>
            </TouchableHighlight>
            <TextView style={{ }}>
            <Text style={{ fontSize: 30, color: '#5C2A71', fontWeight: 'bold', marginTop: 8}}>Rádio Planck</Text>
            </TextView>
          </View>
          

          <DividerContainer>
                <Divider></Divider>
          </DividerContainer>  

          <Header>
            <Img2 source={img1}></Img2>
            <Divider2/>
            <Information2>{`"A comunicação \ndireta, para você"`}</Information2>
          </Header>

          <Title>História:</Title>
          <Information>{`Fundada no meio de 2019 com o intuito benfazejo de aumentar a interação social no \nque tange ao âmbito audiovisual. Ou seja, doravante, responsável por eventos, \nintervalos e tudo mais que envolva rádio...`}
          </Information>

          <Title>Integrantes:</Title>
          <Information>{`Diogo Basso 2ºB; Rian 2ºA; Gabrie Llano 2ºB; etc...`}
          </Information>

          <Title>Feitos:</Title>
          <Information>{`Festa junina, etc...`}
          </Information>

          <Title>Vagas Abertas:</Title>
          <Information>{`Infelizmente nenhuma no momento :(`}
          </Information>



            <Container>
            </Container>  

        </SafeAreaView>
      </Modal>



      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>


          <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight
              onPress={() => {
                setModalVisible1(!modalVisible1);
              }}>
              <AntDesign name="left" size={32} color="#5C2A71" style={{ marginTop: 10, marginLeft: 5,}}/>
            </TouchableHighlight>
            <TextView style={{ }}>
            <Text style={{ fontSize: 30, color: '#5C2A71', fontWeight: 'bold', marginTop: 8}}>Cine Planck</Text>
            </TextView>
          </View>
          

          <DividerContainer>
                <Divider></Divider>
          </DividerContainer>  

          <Header>
            <Img2 source={img2}></Img2>
            <Divider2/>
            <Information2>{`"A comunicação \ndireta, para você"`}</Information2>
          </Header>

          <Title>História:</Title>
          <Information>{`Fundada no meio de 2019 com o intuito benfazejo de colocar os alunos para assistirem um filme ou documentário, com temática, histórica, política ou social, e após ocorre um debate entre alunos e professores sobre o que foi assistido. `}
          </Information>

          <Title>Integrantes:</Title>
          <Information>{`Breno 3º; Esther 3º; Sabrina 3º; etc...`}
          </Information>

          <Title>Feitos:</Title>
          <Information>{`Festa junina, etc...`}
          </Information>

          <Title>Vagas Abertas:</Title>
          <Information>{`Produtor Audiovisual`}
          </Information>

          <View style={{ alignItems: "center"}}>
          <SubmitButton onPress={handleSubmit1}>
                <SubmitText>Entrar</SubmitText>
          </SubmitButton>
          </View>    


            <Container>
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
             <Text style={{ fontSize: 22, color: '#5c2a71', fontWeight: "bold"}}>Vaga cadastrada com</Text>
             <Text style={{ fontSize: 22, color: '#5c2a71', fontWeight: "bold"}}>sucesso! :)</Text>
          </View>

      <TouchableHighlight
              onPress={() => {
                setModalVisible2(!modalVisible2);
              }}>
            <View style={{}}>
               <View style={{ backgroundColor: '#5c2A71', width: 250, height: 70, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                  <Text style={{ fontSize: 20, color: '#fff', fontWeight: "bold"}}>Ok</Text>
              </View>
            </View>  
        </TouchableHighlight>

      </View>

      </View>

      </Modal>




        </ContainerStories>
            <DividerContainer>
                <Divider></Divider>
            </DividerContainer>  
    </Container>       
  );
}