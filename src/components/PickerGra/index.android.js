import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { PickerView } from './styles';

export default function PickerGra({ onChange }){
    return(
        
        <PickerView>
            <RNPickerSelect
            style={{
                input:{
                    height: 50,
                    width: 300,
                    padding: 5,
                    borderRadius: 20,
                    backgroundColor: '#5c2a71',
                    fontSize: 18
                }
            }}
            placeholder={{
                label: 'Série',
                color: '#5c2a71',
                value: null,
            }}
            onValueChange={ (grade) => onChange(grade) }
            items={[
                {label: '3º ano', value: '3º ano', color: '#5c2a71'},
                {label: '2º ano', value: '2º ano', color: '#5c2a71'},
                {label: '1º ano', value: '1º ano', color: '#5c2a71'},
                {label: '9º ano', value: '9º ano', color: '#5c2a71'},
                {label: '8º ano', value: '8º ano', color: '#5c2a71'},
                {label: '7º ano', value: '7º ano', color: '#5c2a71'},
                {label: '6º ano', value: '6º ano', color: '#5c2a71'},
            ]}
            />
        </PickerView>
    )
}