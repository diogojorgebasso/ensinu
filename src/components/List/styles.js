import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
`;

export const ContainerScroll = styled.ScrollView`
    margin-top: 10px;
`;

export const AdsContainer = styled.View`
    
    width: 89%
    background-color: #fff
    border: 2px
    border-radius: 20px;
    margin-top: 10px;
`;

export const InputContainer = styled.View`
    top: 5px;
    align-items: center;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
 placeholderTextColor: '#fff'
})`
    background: #5C2A71;
    width: 90%;
    height: 50px;
    font-size: 17px;
    color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 10px;
    border: 3px #5C2A71
    margin-top: -3px;
    `;

export const Input2 = styled.TextInput.attrs({
    placeholderTextColor: '#fff'
})`
    background: #5C2A71;
    width: 45%;
    height: 50px;
    font-size: 17px;
    color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 10px;
    border: 3px #fff;
    margin-top: -5px;
    `;

export const Input3 = styled.TextInput.attrs({
        placeholderTextColor: '#fff',
    })`
        background: #5C2A71;
        width: 90%;
        height: 150px;
        font-size: 17px;
        color: #fff;
        margin-bottom: 15px;
        padding: 10px;
        border-radius: 10px;
        border: 3px #5C2A71
        margin-top: -5px;
        `;


export const Description = styled.Text`
    margin-top: 5px;
    margin-left: 5%;
    font-size: 16px;
    font-weight: bold;
    color:#CF923E
`;

export const ActionsContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top: 7px;
    margin-bottom: 7px;
    
`;

export const Divider = styled.View`
    height: 1px;
    width: 100%
    background-color: #5C2A71
    margin-top: 10px;
`;

export const Action = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const AddContainer = styled.TouchableOpacity`
    height: 70px;
    width: 70px;
    border-radius: 35px;
    background-color: #5c2a71;
    align-items: center;
    justify-content: center;
    margin-top: 650px;
    margin-bottom: 100px;
    position:  absolute
`;

export const Logo = styled.Image`
    margin-top: 35px;
    margin-bottom: -5px;
    height: 70px;
    width: 70px;
`;

export const InfoContainer = styled.View`
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`;

export const Information = styled.Text`
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 24px;
    font-weight: bold;
    color: #5c2a71
`;