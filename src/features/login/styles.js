import styled from 'styled-components';

import { colors } from '../../utils/colors';

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
    width: 80%;
    margin: 8px auto;
    text-align: center;
`;

export const Button = styled.Button`
    border: 1px solid ${colors.grey300};
    border-radius: 3px;
    height: 48px;
    padding: 0px 16px;
    color: white;
    padding-left: 5px;
    border: 1px solid ${colors.pinkLight};
    width: 100px;
    margin: 8px auto;
    text-align: center;
`;

export default Logo;
