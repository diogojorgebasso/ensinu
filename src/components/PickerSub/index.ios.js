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
                label: 'Matéria',
                color: '#fff',
                value: null,
            }}
            onValueChange={ (subject) => onChange(subject) }
            items={[
                {label: 'Álgebra', value: 'Álgebra', color: '#fff'},
                {label: 'Matemática Fundamental', value: 'Matemática Fundamental', color: '#fff'},
                {label: 'Geometria', value: 'Geometria', color: '#fff'},
                {label: 'Biologia - F1', value: 'Biologia - F1', color: '#fff'},
                {label: 'Biologia - F2', value: 'Biologia - F2', color: '#fff'},
                {label: 'Química - F1', value: 'Química - F1', color: '#fff'},
                {label: 'Química - F2', value: 'Química - F2', color: '#fff'},
                {label: 'Física - F1', value: 'Física - F1', color: '#fff'},
                {label: 'Física - F2', value: 'Física - F2', color: '#fff'},
                {label: 'Atualidades', value: 'Atualidades', color: '#fff'},
                {label: 'História - Brasil', value: 'História - Brasil', color: '#fff'},
                {label: 'História - Geral', value: 'História - Geral', color: '#fff'},
                {label: 'Gramática', value: 'Gramática', color: '#fff'},
                {label: 'Texto', value: 'Texto', color: '#fff'},
                {label: 'Literatura', value: 'Literatura', color: '#fff'},
                {label: 'Geografia', value: 'Geografia', color: '#fff'},
                {label: 'Inglês', value: 'Inglês', color: '#fff'},
                {label: 'Sociologia', value: 'Sociologia', color: '#fff'},
                {label: 'Redação', value: 'Redação', color: '#fff'},
                {label: 'Design Maker', value: 'Design Maker', color: '#fff'},
                {label: 'Outro', value: 'Outro', color: '#fff'},
            ]}
            />
        </PickerView>
    )
}