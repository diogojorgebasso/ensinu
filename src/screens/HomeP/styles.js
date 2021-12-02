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
    margin-top: 3.5%
    margin-bottom: -5px;
    height: 70px;
    width: 70px;
`;

export const Title = styled.Text`
    margin-top: 9%
    font-weight: bold;
    color: #CF923E;
    font-size: 23px;
`;

export const DividerContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Divider2 = styled.View`
  background: #c6c6c6;
  height: 1px;
  width: 90%;
`;  

export const ContainerStories = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
      alignItems: 'center',
      paddingLeft: 16,
    },
  }))`
    background: #f0f0f0;
    height: 110px;
`;

export const Description = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #5C2A71;
`;

export const DescContainer = styled.View`
    align-items: center;
    margin-bottom: 5px;
    margin-top: 20px;
`;

//--------------------------------------\\

export const Container = styled.View`
    align-items: center;
`;

export const ContainerScroll = styled.ScrollView`
    margin-top: 10px;
`;

export const AdsContainer = styled.View`
    height: 265px;
    width: 90%
    background-color: #fff
    border: 2px #5C2A71
    border-radius: 20px;
    margin-top: 10px;
`;

export const InfoArea = styled.View`
    align-items: center;
`;

export const Informate = styled.Text`
    margin-top: 6px;
    margin-bottom: 6px;
    margin-left: 0px;
    font-size: 20px;
    font-weight: bold;
    color: #5C2A71;
`;

export const ActionsContainer = styled.View`
    margin-bottom: -30px;
    height: 25px;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
`;

export const Divider = styled.View`
    height: 1px;
    width: 100%
    background-color: #5C2A71

`;

export const Action = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: -10%;
    margin-bottom: -30px;
`;

export const GuideArea = styled.View`
    flex-direction: row;
`

export const GuideText = styled.Text`
    margin-top: 6px;
    margin-bottom: 6px;
    margin-left: 0px;
    font-size: 12px;
    font-weight: bold;
    color: #5C2A71;
`

export const Guide = styled.Image`
    margin-top: 0px;
    margin-bottom: 0px;
    height: 170px;
    width: 162px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    text-align: justify
`;

export const TextArea = styled.View`
    margin-left: 35px;
    align-items: center;
`;



export const GuideButton = styled.TouchableOpacity`
    background-color: #5C2A71;
    height: 30px;
    width: 85px;
    align-items: center;
    border-radius: 15px;
    margin-top: 135px;
    margin-left: -30%;
`;

export const ButtonName = styled.Text`
    font-size: 15px;
    font-weight: bold
    color: #fff;
    margin-top: 5px;
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