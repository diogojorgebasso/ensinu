import styled from 'styled-components/native'


export const Wrapper = styled.View`
    flex: 1
    
`;

export const Header = styled.View`
    background-color: #fff
    flex-direction: row
    height: 80px;
`;

export const Logo = styled.Image`
    margin-top: 5%
    margin-bottom: -5px;
    height: 70px;
    width: 70px;
`;

export const Title = styled.Text`
    margin-top: 10.5%
    font-weight: bold;
    color: #CF923E;
    font-size: 23px;
`;

export const Description = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #5C2A71;
`;

export const DescContainer = styled.View`
    align-items: center;
    margin-bottom: 5px;
    margin-top: 8px;
    background-color: #f0f0f0

`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
 placeholderTextColor: '#5C2A71'
})`
    background: #fff;
    width: 90%;
    height: 50px;
    font-size: 17px;
    color: #5C2A71;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 10px;
    border: 3px #5C2A71
    margin-top: -3px;
    `;

export const Input2 = styled.TextInput.attrs({
    placeholderTextColor: '#5C2A71'
})`
    background: #fff;
    width: 44%;
    height: 50px;
    font-size: 17px;
    color: #5C2A71;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 10px;
    border: 3px #5C2A71;
    margin-top: -5px;
    margin-right: 5px
    margin-left: 5px;
    `;

export const Input3 = styled.TextInput.attrs({
        placeholderTextColor: '#5C2A71',
    })`
        background: #fff;
        width: 90%;
        height: 150px;
        font-size: 17px;
        color: #5C2A71;
        margin-bottom: 15px;
        padding: 10px;
        border-radius: 10px;
        border: 3px #5C2A71
        margin-top: -5px;
        `;

export const InputContainer = styled.View`
    align-items: center;
    margin-top: 15px;
`

export const Description2 = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #5C2A71;
`;

export const DescContainer2 = styled.View`
    align-items: center;
    margin-bottom: -5px;
    margin-top: 15px;
    background-color: #f0f0f0

`;

export const SubmitButton = styled.TouchableOpacity`
        align-items: center;
        justify-content: center;
        background-color: #5C2A71;
        width: 50%;
        height: 45px;
        border-radius: 10px;
        margin-top: -4px;
        margin-bottom: 50px;
    `;
    
export const SubmitText = styled.Text`
        font-size: 25px;
        font-weight: bold;
        color: #fff;
    `;
    
    export const Container = styled.View`
    align-items: center;
`;



