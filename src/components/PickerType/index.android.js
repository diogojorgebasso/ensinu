import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { PickerView } from './styles';

export default function PickerType({ onChange }){
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
            onValueChange={ (grade) => onChange(grade) }
            items={[
                {label: 'Dicas Planck', value: 'Dicas Planck', color: '#5c2a71'},
                {label: 'Escola de alto desempenho', value: 'Escola de alto desempenho', color: '#5c2a71'},
            ]}
            />
        </PickerView>
    )
}