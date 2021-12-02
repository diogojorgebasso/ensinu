import React, { useState, useContext, useEffect} from 'react';
import {Image,View, Text, StyleSheet, Linking, TouchableWithoutFeedback, Clipboard, Modal, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';



export default function List2({ data }){


 let url = data
    

  return(
  <View style={{ marginBottom: 15, alignItems: 'center', marginTop: 10}}>
    <Image source={{uri: url}} style={{height: 200, width: 250, borderWidth: 3, borderColor: '#5c2a71', borderRadius: 10 }} />
  </View>
  )
}

