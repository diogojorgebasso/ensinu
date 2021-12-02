import React, { useContext, useState, useEffect, useRef } from 'react';
import { View, Text, Modal, ScrollView, TouchableOpacity, Image} from 'react-native';
import firebase from '../../services/firebaseConnection'

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Wrapper, OutButton, Header, Logo, Title, ButtonText, Container, 
  PageName, Card, Card2, CardInfo, CardInfo2, InfoName, Logo2, 
  CardInfo3, CardSub, Input, SubmitButton, SubmitText, } from './styles'

  import { AuthContext } from '../../contexts/auth'

export default function Account() {

  const [modalVisible2, setModalVisible2] = useState(false);

  const [port2, setPort2] = useState('Link do portfolio');
  const [classes2, setClasses2] = useState('Link do classroom');
  const [port, setPort] = useState('');
  const [classes, setClasses] = useState('');

  const { user, users, signOut } = useContext(AuthContext);

  const uid = user.uid
  

  async function extraInfo(){
    await firebase.database().ref().child('users').child(uid).set({
      nome: user.nome,
      Tipo: user.Tipo,
      classe: classes,
      portfolio: port,
    })
    setPort2(port)
    setClasses2(classes)
    setModalVisible2(true)

  }

 return (
   <Wrapper>
       
       <Header>
          <Logo source={require('../../images/logo.png')}/>
          <Title>Colégio e Curso Planck</Title>
      </Header>

      <ScrollView 
      showsVerticalScrollIndicator={false}
      >
      <Container 
      style={{ marginBottom: 40 }}
      style={{ marginBottom: '13%' }}
      >
        <PageName>Conta</PageName>

        
        <Card colors={['#FA9102','#CB7E17']}>
          <Card2>
          </Card2>

              <View style={{ flexDirection: "column",marginLeft: -190, marginTop: 33}}>
                  <CardInfo> {user.nome}</CardInfo>
                  <CardInfo2>Série:</CardInfo2>
                  <CardInfo2>CPF:</CardInfo2>
                  <CardInfo2>RM:</CardInfo2>
                  <CardInfo2>Validade: 28/02/21</CardInfo2>
              </View>
              <View style={{flexDirection: "row",justifyContent: "center", marginLeft: '5%'}}>
                <Logo2 source={require('../../images/logo.png')}/>
              </View>
        </Card>


        <Input
        placeholder={port2}
        autoCorrect={false}
        autoCapitalize="none"
        value={port}
        onChangeText={ (text) => setPort(text) }
        />

        <Input
        placeholder={classes2} 
        autoCorrect={false}
        autoCapitalize="none"
        value={classes}
        onChangeText={ (text) => setClasses(text) }
        />

        <SubmitButton onPress={extraInfo}>
            <SubmitText>Pronto</SubmitText>
        </SubmitButton>


        <Card2 style={{ width: '110%', borderRadius: 0}}>
          <View style={{ marginLeft: 15}}>
          <InfoName>Ajuda & Dúvida</InfoName>
            <View style={{ flexDirection: 'row', marginLeft: 25 }}>
              <MaterialIcons name="report-problem" size={24} color="#5c2a71" />
              <CardInfo> Problemas com a conta?</CardInfo>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 27 }}>
              <Ionicons name="ios-information-circle-outline" size={24} color="#5C2A71" />
              <CardInfo> Alguma informação está errada?</CardInfo>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 24 }}>
              <Feather name="bell" size={24} color="#5c2a71" />
              <CardInfo> Notificações</CardInfo>
            </View>
          </View>
        </Card2>

       
       <OutButton
       style={{ marginBottom: 5 }}
       onPress={ () => signOut() }
       >

         <ButtonText>Sair</ButtonText>

       </OutButton>

      </Container>
      </ScrollView>

      <Modal
        visible={modalVisible2}
        transparent={true}
        animationType={"slide"}
      >
      
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 300}}>
      
      <View style={{ backgroundColor: '#fff', width: 320, height: 255, borderRadius: 20, shadowColor: "#000", flexDirection: "column",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5, justifyContent: "flex-end"}}>
        

          <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "flex-start", marginBottom: 30}}>
             <Logo source={require('../../images/logo.png')}/>
             <Text style={{ fontSize: 22, color: '#5c2a71', fontWeight: "bold"}}>Iremos reiniciar seu login</Text>
             <Text style={{ fontSize: 22, color: '#5c2a71', fontWeight: "bold"}}> para salvar seus dados</Text>
             <Text style={{ fontSize: 22, color: '#5c2a71', fontWeight: "bold"}}>com sucesso! :)</Text>
          </View>

      <TouchableOpacity
              onPress={() => {
                setModalVisible2(!modalVisible2)
                signOut()
              }}>
            <View style={{}}>
               <View style={{ backgroundColor: '#5c2A71', width: 320, height: 70, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                  <Text style={{ fontSize: 24, color: '#fff', fontWeight: "bold"}}>Ok</Text>
              </View>
            </View>  
        </TouchableOpacity>

      </View>

      </View>

      </Modal>


   </Wrapper>
  );
}