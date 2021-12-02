import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Button = styled(LinearGradient)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-size: 9px;
  font-weight: bold;
  color: ${({ focused }) => focused ? '#6606CB' : '#fff'};
  margin-top: 4px;
  margin-bottom: 10px;
  opacity: 1;
`;