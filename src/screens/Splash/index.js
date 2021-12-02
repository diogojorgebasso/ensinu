import React from 'react';
import { useNavigation } from '@react-navigation/native'

import { Wrapper,
        Logo,
        Header,
        Title,
        Title2,
        Title3,
        SubmitButton, 
        SubmitText, 
        Description,
        Credits,
} from './styles';

import img1 from '../../images/logo.png'

export default function Splash() {

  const navigation = useNavigation()

 return ( 
    <Wrapper>
        <Logo source={img1}/>

      <Title>Bem vindo(a)</Title>
      <Title2>ao</Title2>
      <Title3>Planck</Title3>
      <Title3>Conectividade</Title3>


      <SubmitButton onPress={ () => navigation.navigate('SignIn')}>
        <SubmitText>Entrar</SubmitText>
      </SubmitButton>

      <SubmitButton onPress={ () => navigation.navigate('Cadastro')}>
        <SubmitText>Cadastro</SubmitText>
      </SubmitButton>

      <Description>
      {` Como estamos em Beta,\n somente alunos e professores\n são autorizados -com um\n email prévio do Planck- sem a\n opção, portanto, de cadastro.`}
      </Description>

      <Credits>Desenvolvido por @Ensinu.app</Credits>
    </Wrapper>
  );
}