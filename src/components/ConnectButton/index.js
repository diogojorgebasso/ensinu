import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles';

export default function ConnectButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
            ? ['#fff', '#ccc']
            : ['#844AC1', '#6606CB']
        }
        start={[1, 0.2]}
      >

        <FontAwesome5 
        name="hands-helping" 
        size={33} 
        color={focused ? '#6606CB' : '#fff'} 
        />
        
        <Label focused={focused}>Conectividade</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}