import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { PickerView } from './styles';

export default function Picker({ onChange }){
    return(
        
        <PickerView>
            <RNPickerSelect
            style={{
                inputIOS:{
                    height: 50,
                    width: 330,
                    marginLeft: -10,
                    borderRadius: 15,
                    padding: 5,
                    backgroundColor: '#5c2a71',
                    fontSize: 18
                }
            }}
            placeholder={{
                label: 'Tipo',
                color: '#fff',
                value: null,
            }}
            onValueChange={ (type) => onChange(type) }
            items={[
                {label: 'Em grupo', value: 'Em grupo', color: '#fff'},
                {label: 'Fazer', value: 'Fazer', color: '#fff'},
                {label: 'Entregar', value: 'Entregar', color: '#fff'},
            ]}
            />
        </PickerView>
    )
}