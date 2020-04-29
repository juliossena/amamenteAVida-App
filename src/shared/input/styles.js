import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Container = styled.View`
    border-radius: 3px;
    height: 48px;
    padding: 0px 16px;
    color: white;
    padding-left: 5px;
    border: 1px solid ${(props) => props.color || colors.pinkLight};
    margin-bottom: 8px;
    text-align: center;
    font-size: 18px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InputStyled = styled.TextInput`
    height: 48px;
    color: white;
    text-align: center;
    font-size: 18px;
    width: 100%
`;

export const Icon = styled.Image`
    margin-left: -20px;
    width: 16px;
    height: 16px;
`;

export default InputStyled;
