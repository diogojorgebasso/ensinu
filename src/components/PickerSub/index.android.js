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
                label: 'Matéria',
                color: '#5c2a71',
                value: null,
            }}
            onValueChange={ (subject) => onChange(subject) }
            items={[
                {label: 'Álgebra', value: 'Álgebra', color: '#5c2a71'},
                {label: 'Matemática Fundamental', value: 'Matemática Fundamental', color: '#5c2a71'},
                {label: 'Geometria', value: 'Geometria', color: '#5c2a71'},
                {label: 'Biologia - F1', value: 'Biologia - F1', color: '#5c2a71'},
                {label: 'Biologia - F2', value: 'Biologia - F2', color: '#5c2a71'},
                {label: 'Química - F1', value: 'Química - F1', color: '#5c2a71'},
                {label: 'Química - F2', value: 'Química - F2', color: '#5c2a71'},
                {label: 'Física - F1', value: 'Física - F1', color: '#5c2a71'},
                {label: 'Física - F2', value: 'Física - F2', color: '#5c2a71'},
                {label: 'Atualidades', value: 'Atualidades', color: '#5c2a71'},
                {label: 'História - Brasil', value: 'História - Brasil', color: '#5c2a71'},
                {label: 'História - Geral', value: 'História - Geral', color: '#5c2a71'},
                {label: 'Gramática', value: 'Gramática', color: '#5c2a71'},
                {label: 'Texto', value: 'Texto', color: '#5c2a71'},
                {label: 'Literatura', value: 'Literatura', color: '#5c2a71'},
                {label: 'Geografia', value: 'Geografia', color: '#5c2a71'},
                {label: 'Inglês', value: 'Inglês', color: '#5c2a71'},
                {label: 'Sociologia', value: 'Sociologia', color: '#5c2a71'},
                {label: 'Redação', value: 'Redação', color: '#5c2a71'},
                {label: 'Design Maker', value: 'Design Maker', color: '#5c2a71'},
                {label: 'Outro', value: 'Outro', color: '#5c2a71'},
            ]}
            />
        </PickerView>
    )
}