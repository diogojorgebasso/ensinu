import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled.View`
    flex: 1;
`;

export const Container = styled.View`
    align-items: center;
`;

export const PageName = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: #5c2a71
    margin-top: 10px;
`;

export const InfoName = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #5c2a71
    margin-top: 10px;
    margin-left: 6%;
    margin-bottom: 10px;
`;


export const OutButton = styled.TouchableOpacity`
    background-color: #C60909;
    height: 45px;
    width: 70%;
    border-radius: 20px;
    align-items: center;
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


export const Img = styled.Image`
    height: 90px;
    width: 75px;
    margin-top: -170px;
    margin-left: -280px;
    margin-bottom: 70px;
`;


export const ButtonText = styled.Text`
    color: #fff
    font-size: 23px;
    font-weight: bold;
    margin-top: 7px;
`;

export const Card = styled(LinearGradient)`
    height: 200px;
    width: 93%;
    shadowColor: #000;
    flex-direction: row;
    border-radius: 15px;
    shadowOffset: {
	width: 4;
	height: 0;
}
    shadowOpacity: 0.30;
    shadowRadius: 4.65;

    elevation: 8;
    margin-top: 20px;
    margin-bottom: 15px;
`;

export const Card2 = styled.View`
    background-color: #fff
    height: 150px;
    width: 85%;
    shadowColor: #000;
    shadowOffset: {
	width: 4;
	height: 0;
}
    shadowOpacity: 0.30;
    shadowRadius: 4.65;

    elevation: 8;
    margin-top: 25px;
    margin-bottom: 20px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
`;

export const CardInfo = styled.Text`
    color: #5c2a71;
    font-size: 15px;
    font-weight: normal;
    margin-top: 4px;

`;

export const CardInfo2 = styled.Text`
    color: #5c2a71;
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
`;

export const CardInfo3 = styled.Text`
    color: #5c2a71;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
`;

export const CardSub = styled.Text`
    color: #5c2a71;
    font-size: 12px;
    margin-top: 2px;
    margin-left: 10%;
`;

export const Logo2 = styled.Image`
    height: 50px;
    width: 50px;
    margin-left: 3%;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#5C2A71'
   })`
       width: 90%;
       height: 50px;
       font-size: 17px;
       color: #5C2A71;
       margin-bottom: 15px;
       padding: 10px;
       border-radius: 10px;
       border-bottom-width: 2px;
       border-bottom-color: #5c2a71;
       margin-top: -3px;
`;

export const SubmitButton = styled.TouchableOpacity`
        align-items: center;
        justify-content: center;
        background-color: #5C2A71;
        width: 45%;
        height: 40px;
        border-radius: 10px;
        margin-top: 0px;
    `;
    
export const SubmitText = styled.Text`
        font-size: 20px;
        font-weight: bold;
        color: #fff;
    `;


