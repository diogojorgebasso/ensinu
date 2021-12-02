import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { PickerView } from './styles';

export default function PickerType({ onChange }){
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
            onValueChange={ (Type) => onChange(Type) }
            items={[
                {label: 'Dicas Planck', value: 'Dicas Planck', color: '#5c2a71'},
                {label: 'Escola de alto desempenho', value: 'Escola de alto desempenho', color: '#5c2a71'},
            ]}
            />
        </PickerView>
    )
}