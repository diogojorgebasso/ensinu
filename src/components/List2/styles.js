import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
`;

export const ContainerScroll = styled.ScrollView`
    margin-top: 10px;
`;

export const AdsContainer = styled.View`
    height: 230px;
    width: 89%
    background-color: #fff
    border: 2px
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
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`;

export const Divider = styled.View`
    height: 1px;
    width: 100%
    background-color: #5C2A71
    margin-top: 15px;
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