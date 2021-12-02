import React, { useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Linking, TouchableWithoutFeedback, Clipboard, Modal, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Container, ContainerScroll, AdsContainer, Description,
    Divider,  ActionsContainer, Action, Logo, InfoContainer, Information, InputContainer, Input, Input2, Input3, AreaInput} from './styles'

import { OutButton, ButtonText } from '../../screens/Account/styles'

import { AuthContext } from '../../contexts/auth'

import firebase from '../../services/firebaseConnection'

export default function List({ data, deleteItem }){

    const url = data.link
    const urlp = data.linkp
    const urlc = data.linkC

    const { user } = useContext(AuthContext);

    const [modalVisible2, setModalVisible2] = useState(false)
    const [modalVisible3, setModalVisible3] = useState(false)
    const [modalVisible4, setModalVisible4] = useState(false)

    const [border, setBorder] = useState('#5c2a71')

    const [name, setName] = useState('');
    const [grade, setGrade] = useState(data.serie);
    const [subject, setSubject] = useState(data.frente);
    const [topics, setTopics] = useState(data.topico);
    const [number, setNumber] = useState(data.numero);
    const [date, setDate] = useState(data.dia);
    const [hour, setHour] = useState(data.hora);
    const [link, setLink] = useState(data.link);

    const [info, setInfo] = useState('Informações')
    const [icon, setIcon] = useState("exit-run")

    async function Copy (){
     await Clipboard.setString(url);

     setModalVisible3(false)
     setModalVisible2(true)
     
    
    }

    async function Copy2 (){
      await Clipboard.setString(urlp);
 
      setModalVisible3(false)
      setModalVisible2(true)
      
     
     }

     async function Copy3 (){
      await Clipboard.setString(urlc);
 
      setModalVisible3(false)
      setModalVisible2(true)
      
     
     }
    

    function Info() {
      if(data.id == user.uid){
        setModalVisible4(true)
      }else{
        setModalVisible3(true)
      }
      
    }


    
    useEffect(()=> { 
      function personal(){
        if(data.id == user.uid){
          setBorder('#34c0eb')
          setInfo('Editar Aula')
          setIcon('settings')
        }
      }

      personal()
     }, []);



     async function handleSubmit(){

      let helpers = await firebase.database().ref('helpers');
    
        helpers.child(data.key).update({
        nome: data.nome,
        serie: grade,
        frente: subject,
        topicos: topics,
        numero: number,
        dia: date,
        hora: hour,
        link1: link,
        id: user.uid
      });


      
      setName('');
      setGrade('');
      setSubject('');
      setTopics('');
      setNumber('');
      setDate('');
      setHour('');
      setLink('');

  }
    


  return(
 <View style={{ position: "relative"}}>
    <Container style={{ marginBottom: 15 }}>
      <AdsContainer style={{ borderColor: border }}>
        <Description> {data.nome}</Description>
        <Description> {data.frente}</Description>
        <Description> {data.topicos}</Description>
        <Description> {data.dia} {data.hora}</Description>

        <Divider/>

        <ActionsContainer>
        <TouchableWithoutFeedback
            onPress={Info}
          >  
            <MaterialCommunityIcons name={icon} size={24} color="#5c2a71"/>
          </TouchableWithoutFeedback>  
          <TouchableWithoutFeedback
            onPress={Info}
          >  
            <Action style={{ color: '#5c2a71' }}>{info}</Action>
          </TouchableWithoutFeedback>  
        </ActionsContainer>

      </AdsContainer>

    </Container>

  <Modal
        visible={modalVisible4}
        transparent={true}
        animationType={"slide"}
      >

        
      
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 85}}>


        <TouchableOpacity onPress={() => {
          setModalVisible4(false)
        }}style={{ width: 60, height: 60, backgroundColor: '#5c2a71', marginBottom: 10, alignItems: 'center', flexDirection: 'column', justifyContent: "center", borderRadius: 30, shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,}}>
          <Text style={{fontSize: 30, color: '#fff' }}>X</Text>
        </TouchableOpacity>  

          <View style={{ width: '90%' , height: 620, backgroundColor: '#fff', borderRadius: 10,shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5, alignItems: 'center', justifyContent: 'center'}}>

          <InputContainer>

          <AreaInput>
            <Input2
            placeholder={data.serie}
            autoCorrect={false}
            autoCapitalize="none"
            value={grade}
            onChangeText={ (text) => setGrade(text) }
            />
            <Input2
            placeholder={data.frente}
            autoCorrect={false}
            autoCapitalize="none"
            value={subject}
            onChangeText={ (text) => setSubject(text) }
            />
          </AreaInput>

          <AreaInput>
            <Input3
            placeholder={data.topicos}
            autoCorrect={false}
            autoCapitalize="none"
            value={topics}
            multiline={true}
            onChangeText={ (text) => setTopics(text) }
          />

          </AreaInput>

          <AreaInput>
            <Input
            placeholder={data.numero}
            autoCorrect={false}
            autoCapitalize="none"
            value={number}
            onChangeText={ (text) => setNumber(text) }
            keyboardType = "number-pad"
            />
          </AreaInput>

          <AreaInput>
          <Input2
            placeholder={data.dia}
            autoCorrect={false}
            autoCapitalize="none"
            value={date}
            onChangeText={ (text) => setDate(text) }
            />
            <Input2
            placeholder={data.hora}
            autoCorrect={false}
            autoCapitalize="none"
            value={hour}
            onChangeText={ (text) => setHour(text) }
            />
          </AreaInput>

          <AreaInput>
            <Input
            placeholder={data.link}
            autoCorrect={false}
            autoCapitalize="none"
            value={link}
            onChangeText={ (text) => setLink(text) }
            />
          </AreaInput>

          </InputContainer>  


        <OutButton
        style={{ marginTop: 40, backgroundColor: '#5c2a71' }}
        onPress={handleSubmit}
        >

          <ButtonText>Atualizar</ButtonText>

        </OutButton>

        <OutButton
        style={{ marginTop: 20 }}
        onPress={ () => deleteItem(data) }
        >

          <ButtonText>Remover</ButtonText>

        </OutButton>

          </View>

        </View>


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
             <Text style={{ fontSize: 22, color: '#5c2a71', fontWeight: "bold"}}>Link copiado com</Text>
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

      <Modal
        visible={modalVisible3}
        transparent={true}
        animationType={"slide"}
      >
      
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 150}}>

      <TouchableOpacity onPress={() => {
        setModalVisible3(false)
      }}style={{ width: 60, height: 60, backgroundColor: '#5c2a71', marginBottom: 10, alignItems: 'center', flexDirection: 'column', justifyContent: "center", borderRadius: 30}}>
        <Text style={{fontSize: 30, color: '#fff' }}>X</Text>
      </TouchableOpacity>  
      
      <View style={{ backgroundColor: '#fff', width: "90%", height: 340, borderRadius: 20, shadowColor: "#000", flexDirection: "column",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5, }}>


          <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%'}}>
              <View style={{ borderWidth: 2, borderColor: 'black', width: 80, height: 80, borderRadius: 25, flexDirection: 'column', alignItems: "center", justifyContent: "center", marginLeft: 5,}}>
                  <Text style={{ fontSize: 20 }}>FOTO</Text>
              </View>
              <View style={{ marginLeft: '4%'}}>
                <Text style={{ fontSize: 21, fontWeight: "bold" , marginBottom: 7,}}>Aula ministrada por:</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 2,}}>@{data.nome}</Text>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Série: {data.serie}</Text>
              </View>
          </View>


          <View style={{ marginTop: '7%', alignItems: "center"}}>
            <TouchableOpacity
                onPress={Copy2}>
              <View style={{}}>
                <View style={{ backgroundColor: '#5c2A71', width: 280, height: 45, borderRadius: 20, alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: "bold"}}>Copiar link do meu portfólio</Text>
                </View>
              </View>  
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '7%', alignItems: "center"}}>
            <TouchableOpacity
                onPress={Copy3}>
              <View style={{}}>
                <View style={{ backgroundColor: '#5c2A71', width: 280, height: 45, borderRadius: 20, alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: "bold"}}>Copiar link do meu classroom</Text>
                </View>
              </View>  
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: '7%', alignItems: "center"}}>
            <TouchableOpacity
                onPress={Copy}>
              <View style={{}}>
                <View style={{ backgroundColor: '#5c2A71', width: 280, height: 45, borderRadius: 20, alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: "bold"}}>Link para participar</Text>
                </View>
              </View>  
          </TouchableOpacity>
        </View>

      </View>

      </View>

      </Modal>


  </View>
  )
}

