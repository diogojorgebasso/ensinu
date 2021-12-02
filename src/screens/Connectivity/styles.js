import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled.View`
    flex: 1
    
`;


//Cabecalho
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
//Cabecalho


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

export const Container = styled.View`
    align-items: center;
`;

export const ContainerScroll = styled.ScrollView`
    margin-top: 0px;
`;

export const AdsContainer = styled.View`
    height: 245px;
    width: 89%
    background-color: #fff
    border: 2px #5C2A71
    border-radius: 20px;
    margin-top: 10px;
`;

export const Description = styled.Text`
    margin-top: 6px;
    margin-left: 5%;
    font-size: 16px;
    font-weight: bold;
    color:#CF923E
`;

export const ActionsContainer = styled.View`
    margin-bottom: 30px;
    height: 30px;
    width: 100%
    flex-direction: row
    justify-content: space-around
    margin-top: 10px;
`;

export const Divider = styled.View`
    height: 1px;
    width: 100%
    background-color: #5C2A71
    margin-top: 7px;
    margin-bottom: -3px;
`;

export const Action = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: -10%;
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




export const ContainerStories = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
      alignItems: 'center',
      paddingLeft: 16,
    },
  }))`
    background-color: #f0f0f0
    height: 0px;
    margin-top: 0px;
`;

export const DividerContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Divider2 = styled.View`
  background: #c6c6c6;
  height: 1px;
  width: 93%;
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
    



