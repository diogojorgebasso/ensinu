import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.View``;

export const ContainerStories = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
      alignItems: 'center',
      paddingLeft: 16,
    },
  }))`
    background-color: #f0f0f0
    height: 110px;
`;

export const DividerContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.View`
  background: #c6c6c6;
  height: 1px;
  width: 93%;
  margin-top: 8px;
`;  


export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 20px;
  align-items: center;
`;

export const Stories = styled(LinearGradient)`
    width: 65px;
    height: 65px;
    border-radius: 32.5px;
    align-items: center;
    justify-content: center;
    
`;

export const Img = styled.Image`
    width: 55px;
    height: 39px;
    border-radius: 0px;
    margin-top: 0px;
`;

export const Label = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 12px;
  margin-top: 2px;
`;

export const Title = styled.Text`
  color: #5c2a71;
  font-size: 38px;
  margin-top: 20px;
  margin-left: 10%;
`;

export const Information = styled.Text`
color: #000;
font-weight: normal;
font-size: 17px;
margin-top: 5px;
margin-left: 10%;

`;

export const Information2 = styled.Text`
color: #000;
font-weight: bold;
font-size: 17px;
margin-top: 23px;
margin-left: -25px;

`;

export const SubmitButton = styled.TouchableOpacity`
        align-items: center;
        justify-content: center;
        background-color: #5C2A71;
        width: 35%;
        height: 45px;
        border-radius: 15px;
        margin-top: 40px;
    `;
    
export const SubmitText = styled.Text`
        font-size: 25px;
        font-weight: bold;
        color: #fff;
    `;

export const TextView = styled.View`
      margin-left: 20%
    `;

    export const Logo = styled.Image`
    margin-top: 35px;
    margin-bottom: 0px;
    height: 60px;
    width: 60px;
`;

export const Header = styled.View`
  margin-top: 25px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around
`; 

export const Img2 = styled.Image`
    margin-top: 10px;
    width: 95px;
    height: 67px;
`;

export const Divider2 = styled.View`
  background: #c6c6c6;
  height: 130%;
  width: 2px;
  margin-top: 0px;
`;  