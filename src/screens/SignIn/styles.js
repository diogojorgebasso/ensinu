import styled from 'styled-components/native';




 export const Background = styled.View`
    flex:1;
    background-color: #FFF;
 `;

 export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
    margin-top: -70px;
 `;

 export const Header = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 40px;
 `;

 export const Logo = styled.Image`
    height: 250px;
    width: 250px;
    margin-bottom: -240px;
    margin-top: -60px;
 `;

 export const Title = styled.Text`
    font-size: 28px
    font-Weight: bold
    margin-top: 10px;
    color: #5C2A71
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
 color: #000;
 margin-bottom: 15px;
 padding: 10px;
 border-radius: 10px;
 border: 3px #5C2A71
 `;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #5C2A71;
    width: 90%;
    height: 45px;
    border-radius: 10px;
    margin-top: 30px;
`;

export const SubmitText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 9px;
`;

export const LinkText = styled.Text`
    color: #5C2A71;
`;

export const AreaPass = styled.View`
   margin-top: 250px;
   align-items: center;
   justify-content: center;
`;