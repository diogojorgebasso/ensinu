import React, {useContext, createContext} from 'react';
import { View } from 'react-native';
export const Viewes = createContext({});
import { AuthContext } from '../../contexts/auth'

export default function Viewers({data}) {
    const { user } = useContext(AuthContext);
   
    if(data.key == user.uid){
       var id = data.key
   }
   console.log(id)
 return (
   <>
   <Viewes.Provider value={{ id }}>
   </Viewes.Provider>
   </>
  );
}