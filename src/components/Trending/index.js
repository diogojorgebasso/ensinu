import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../contexts/auth'

import firebase from '../../services/firebaseConnection'

export default function Trending({ data }) {
    const { user } = useContext(AuthContext)
    
    const [key, setKey] = useState('')

    const [helpers1, setHelpers1] = useState([])
    const [helpers2, setHelpers2] = useState([])

    const [width, setWidth] = useState(0)
    const [color, setcolor] = useState('')
    const [back, setBack] = useState(3)


    useEffect(() => {
        async function dados2(){
          await firebase.database().ref('Doubted').orderByChild('help').equalTo(data.key + '_' + user.uid).on('value', (snapshot)=> {
            setHelpers2([])
    
            snapshot.forEach((chilItem) => {
              let data = {
                key: chilItem.val().key,
                id: chilItem.val().id,
                task: chilItem.val().taskId,
                help: chilItem.val().help
              };
    
              setHelpers2(data);
            })
          })
    
        }
        dados2()
  
  
    }, [])
  
    useEffect(() => {
  
      async function dados5() {
        await firebase.database().ref('Doubts').orderByChild('tipo').equalTo(data.key).on('value', (snapshot)=> {
          setHelpers1([]);
  
          snapshot.forEach((chilItem) => {
            let data = {
              key: chilItem.val().tipo,
              help: chilItem.val().ajudas,
            };
  
            setHelpers1(data);
          })
  
  
        })
      }
  
      dados5()
  
    }, [])

    useEffect(() => {

        function dados(){
            if(data.help != 0){
                setKey(data.key)
            }
        }

        dados()

    },[data.help])

    useEffect(() => {

        function dados2(){
            if(data.help <= 1){
               setWidth(100)
               setcolor('#8ECEED')
            }else if(data.help <= 4){
                setWidth(150)
                setcolor('#FFD900')
            }else if(data.help <= 7){
                setWidth(200)
                setcolor('#CACBD3')
            }else if(data.help <= 10){
                setWidth(250)
                setcolor('#5c2a71')
            }
        }

        dados2()

    },[data.help])

    useEffect(() => {

      if(helpers2.id === undefined){
        setBack(3)
      }else{
        setBack(20)
      }

    },[helpers2.id])

    async function uploadDoubt(){
      
        if(helpers2.id === undefined){

          
          let sugestions = await firebase.database().ref('Doubts');

          sugestions.child(data.key).update({
    
            ajudas:  data.help + 1
    
          })


          
          
    
              let help = await firebase.database().ref('Doubted');
        
              help.child(data.key + '_' + user.uid).set({
        
                id: user.uid,
                task: data.key,
                help: data.key + '_' + user.uid
        
              })
              
              
        }else{


          let sugestions = await firebase.database().ref('Doubts');
      
          sugestions.child(data.key).update({
    
            ajudas: data.help - 1 
    
          })
    
              let help = await firebase.database().ref('Doubted');
        
              help.child(data.key + '_' + user.uid).remove()
        }
        

      }
    

 return (
   <View style={{
    justifyContent: "center",
    marginLeft: 15,
    marginTop: 10,
    position: "relative",
   }}>
       <Text style={{ fontSize: 20, color: color, fontWeight: "bold", marginBottom: 5, marginLeft: 60}}>{key}</Text>
   
    <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={uploadDoubt}>
            <View style={{ width: 40, height: 40, backgroundColor:'#fff', marginRight: 15, borderWidth: back, borderColor: color,}}/>
        </TouchableOpacity>

        <View style={{ width: width, height: 40, backgroundColor: color, borderTopRightRadius: 7, borderBottomRightRadius: 7, }}>

        </View>
    </View>

   </View>
  );
}