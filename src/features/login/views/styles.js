import styled from 'styled-components';

import { colors } from '../../../utils/colors';

export const Logo = styled.Image`
  width: 127px;
  height: 180px;
  margin: 50px auto;
`;

export const Background = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${colors.pinkDark};
`;

export const Input = styled.TextInput`
    border: 1px solid ${colors.grey300};
    border-radius: 3px;
    height: 48px;
    padding: 0px 16px;
    color: white;
    padding-left: 5px;
    border: 1px solid ${colors.pinkLight};
    margin-bottom: 8px;
    text-align: center;
`;

export const ContainerLogin = styled.View`
    width: 80%;
    margin: 8px auto;
`;

export const ErrorMessage = styled.Text`
    color: white;
    width: 100%;
    text-align: center;
    margin-bottom: 8px;
`;

export const ButtonBottom = styled.Text`
    text-decoration: underline;
    color: ${colors.white};
    margin: 8px auto;
    font-size: 16px;
`;

export const BoxBottom = styled.View`
    width: 100%;
    margin: 20px auto;
`;

export default Logo;
