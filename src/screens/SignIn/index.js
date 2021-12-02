import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'
import {Modal, Alert, Text, TouchableOpacity} from 'react-native'
import firebase from 'firebase';

import { AntDesign } from '@expo/vector-icons';

import { Background, 
        Container,
        Header,
        Title,
        Logo,  
        AreaInput, 
        Input, 
        SubmitButton, 
        SubmitText, 
        Link, 
        LinkText,
        AreaPass} from './styles';

import img1 from '../../images/logo.png'

export default function SignIn() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false)
  const [emailRecovery, setEmailRecovery] = useState('')


  function handleLogin(){
    signIn(email, password)
  }

  let forgotPassword = () => {
    firebase.auth().sendPasswordResetEmail(emailRecovery)
      .then(function (user) {
        Alert.alert('Você receberá o email em breve. Veja sua caixa de entrada')
        setModalVisible(false)
      }).catch(function (e) {
        Alert.alert('Ocorreu um erro, por favor, digite seu email novamente.')
      })

  }

 return (
   <Background>
        <Header>
          <Title>Login</Title>
        </Header>

        <Header>
          <Logo source={img1}/>
        </Header>
        
        
      <Container>

        <AreaInput>
          <Input
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          secureTextEntry = {true}
          onChangeText={ (text) => setPassword(text) }
          />
        </AreaInput>

      <SubmitButton onPress={handleLogin}>
        <SubmitText>Pronto</SubmitText>
      </SubmitButton>
      
      <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

            <AreaPass>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign name="closesquare" size={50} color="#5c2a71" style={{ marginTop: -90, marginBottom: 30 }}/>
            </TouchableOpacity>

              <Text
              style={{ fontSize: 25, fontWeight: "bold", color: '#5c2a71', marginBottom: 20  }}
              >Redefinir a senha</Text>
              <Input
              placeholder="Digite seu email aqui"
              onChangeText={(emailRecovery) => setEmailRecovery(emailRecovery)}/>
              <SubmitButton
              style={{ marginTop: -5 }}
              onPress={forgotPassword}>
                <SubmitText>Enviar</SubmitText>
              </SubmitButton>

            </AreaPass>
      </Modal>

          <Link onPress={()=>setModalVisible(true)}>
            <LinkText>Redefinir a senha</LinkText>
          </Link>
      
      </Container>
   </Background>
  );
}