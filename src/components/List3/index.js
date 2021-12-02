import React, { useState, useContext, useEffect} from 'react';
import {Image,View, Text, StyleSheet, Linking, TouchableWithoutFeedback, Clipboard, Modal, TouchableOpacity,} from 'react-native';
import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';


import { Wrapper, Header, Logo, Title, Description, DescContainer, 
    Container, ContainerScroll, AdsContainer, Informate,
    Divider,  ActionsContainer, ActionsContainer2, Action, InfoArea, Guide, 
    GuideArea,  GuideText, TextArea, GuideButton, ButtonName  ,
    AddContainer, Divider2, ContainerStories,
    DividerContainer,} from './styles'

export default function List3({ data }){

    const [icon, setIcon] = useState("heart-outline")
    const [color, setColor] = useState("#000")

    const [modalVisible2, setModalVisible2] = useState(false)

    const url = data.link
  
    function copy(){
        Clipboard.setString(url);

        SetModalVisible2(true)
    }

    function like() { 
      if(icon == "heart-outline"){
        setIcon("heart")
        setColor("#5c2a71")
      }else if(icon == "heart"){
        setIcon("heart-outline")
        setColor("#000")
      }}

return(
  <View style={{ alignItems: 'center', marginTop: 15 }}>

<Container>
      <AdsContainer>

        <InfoArea>
            <Informate>{data.titulo}</Informate>
        </InfoArea>

        <Divider/>

        <GuideArea>
          <Guide source={{ uri: data.img}}/>

          <TextArea>
            <GuideText>{data.Descrição}</GuideText>

          </TextArea>

  

        </GuideArea>

        <Divider/>
        <ActionsContainer>
            <TouchableOpacity onPress={like}>
            <MaterialCommunityIcons name={icon} size={26} color={color} style={{ marginTop: 8 }}/>
            </TouchableOpacity>
            <Action style={{ marginTop: 8 }}>Like</Action>
            <AntDesign  style={{ marginTop: 8 }} name="sharealt" size={24} color="color" />
            <Action style={{ marginTop: 8 }} >Leia Mais</Action>
        </ActionsContainer>

      </AdsContainer>

    </Container>

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

  </View>
  )
}
