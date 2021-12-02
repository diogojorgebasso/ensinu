import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { PickerView } from './styles';

export default function Picker({ onChange }){
    return(
        
        <PickerView>
            <RNPickerSelect
            style={{
                input:{
                    height: 50,
                    width: 330,
                    padding: 5,
                    borderRadius: 20,
                    backgroundColor: '#5c2a71',
                    fontSize: 18
                }
            }}
            placeholder={{
                label: 'Tipo',
                color: '#5c2a71',
                value: null,
            }}
            onValueChange={ (type) => onChange(type) }
            items={[
                {label: 'Entregar em grupo', value: 'Entregar em grupo', color: '#5c2a71'},
                {label: 'Recomendado', value: 'Recomendado', color: '#5c2a71'},
                {label: 'Entregar individual', value: 'Entregar individual', color: '#5c2a71'},
            ]}
            />
        </PickerView>
    )
}