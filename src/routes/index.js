import React, { useContext, useReducer } from 'react';
import { AuthContext } from '../contexts/auth';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import AppCobRoutes from './appcob.routes';
import AppProfRoutes from './appprof.routes';

function Routes(){
    const { signed, loading, signed2, user } = useContext(AuthContext);

    if(signed == true){
        if(user.Tipo === 'admin'){
            return(
                <AppRoutes></AppRoutes>
            )
        }else if(user.Tipo === 'aluno'){
            return(
                <AppCobRoutes></AppCobRoutes>
            )
        }else if(user.Tipo === 'Professor'){
            return(
                <AppProfRoutes></AppProfRoutes>
            )}
}else{
    return(
        <AuthRoutes/>
    )
}

return(
    signed ? <AppRoutes/> : <AuthRoutes/>
)

}


export default Routes;