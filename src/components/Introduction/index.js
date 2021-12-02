import React, {useContext, useEffect, useState} from 'react';
import { View } from 'react-native';

import { AuthContext } from '../../contexts/auth'

import { DescContainer, Description } from './styles'

export default function Introduction({data}) {

    const { user } = useContext(AuthContext);
    const [nome, setNome] = useState('')

 return (
   <>
    <DescContainer>
      <Description>Olá, {data.nome}:)  </Description>
      <Description>Que tal ficar ligados nas novidades:</Description>
    </DescContainer>  
   </>
  );
}