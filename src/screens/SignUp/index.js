import React, {useState, useContext} from 'react';
import { Platform, ActivityIndicator, View } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
SubmitText} from '../SignIn/styles';

export default function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { signUp } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  function handleSignUp(){
    setLoading(true)
    var name = nome;
    if(name.indexOf("colegioplanck.com.br") == -1){
      signUp(email, password, nome);
    };
    setLoading(true)
  }
 
 return (
  <>
  {loading ? 
    (
      <View style={{ marginTop: 120}}>
        <ActivityIndicator color="#121212" size={'large'} />
      </View>
    ) :
    (
      <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >


        <AreaInput>
          <Input
          placeholder="Email do colégio"
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
          onChangeText={ (text) => setPassword(text) }
          />
        </AreaInput>

      <SubmitButton onPress={handleSignUp}>
        <SubmitText>Cadastrar</SubmitText>
      </SubmitButton>

      </Container>
   </Background>
    )
    }
   </>
  );
}
