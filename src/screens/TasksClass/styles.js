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

export const PageName = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #5c2a71
`;

export const ContainerScroll = styled.ScrollView`
    margin-top: 10px;
`;

export const Container = styled.View`
    align-items: center
`;

export const Card = styled.View`
    background-color: #fff;
    width: 90%;
    height: 650px;
    margin-top: 10px;
    border-radius: 15px;
    border: 2px #5c2a71
`;

export const SubjectTitle = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #5c2a71
    margin-left: 3%;
    margin-top: 2%;
`;

export const SubjectInfo= styled.Text`
    font-size: 11px;
    font-weight: bold;
    color: #000
    margin-left: 1%;
    margin-top: 1%;
    margin-right: 3%;
`;

export const AddContainer = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background-color: #5c2a71;
    align-items: center;
    justify-content: center;
    position: absolute
`;

export const InputContainer = styled.View`
    margin-top: 20px;
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

export const SubmitButton = styled.TouchableOpacity`
        align-items: center;
        justify-content: center;
        background-color: #5C2A71;
        width: 50%;
        height: 65px;
        border-radius: 10px;
        margin-top: 15px;
    `;
    
export const SubmitText = styled.Text`
        font-size: 25px;
        font-weight: bold;
        color: #fff;
    `;
