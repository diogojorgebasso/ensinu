import styled from 'styled-components/native'

export const Wrapper = styled.View`
    flex:1;
    background-color: #FFF;
    align-items: center;
`;

export const Logo = styled.Image`
    height: 210px;
    width: 210px;

`;

export const Title = styled.Text`
    color: #5C2A71;
    font-size: 47px;
    font-weight: bold;
`;

export const Title2 = styled.Text`
    color: #0A7AAC;
    font-size: 47px;
    font-weight: bold;
    margin-top: -10px;
`;

export const Title3 = styled.Text`
    color: #FF9404;
    font-size: 47px;
    font-weight: bold;
    margin-top: -10px;
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #5C2A71;
    width: 90%;
    height: 40px;
    border-radius: 10px;
    margin-top: 40px;
    margin-bottom: -15px;
`;

export const SubmitText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
`;

export const Description = styled.Text`
    margin-top: 65px;
    font-size: 20px;
    color: #CF923E;
`;

export const Credits = styled.Text`
    margin-top: 65px;
    font-size: 19px;
    color: #cccc
`;