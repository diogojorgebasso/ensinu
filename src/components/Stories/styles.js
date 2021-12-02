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
    background: #f0f0f0;
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
`;  


export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Stories = styled(LinearGradient)`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    align-items: center;
    justify-content: center;
    
`;

export const Img = styled.Image`
    width: 62px;
    height: 62px;
    border-radius: 31px;
    margin-top: 0px;
`;

export const Img2 = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 31px;
    margin-top: 0px;
    border: 3px #5c2a71
`;

export const Label = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 14px;
  margin-top: 2px;
`;