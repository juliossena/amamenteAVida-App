import styled from 'styled-components';

import { colors } from '../../../utils/colors';


export const Container = styled.View`
    height: 48px;
    padding: 0px 16px;
    color: white;
    padding-left: 5px;
    border-bottom-color: ${(props) => props.color || colors.primary};
    border-bottom-width: 1px;
    margin-bottom: 16px;
    text-align: center;
    font-size: 18px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ContainerTitle = styled.View`
    display: flex;
`;

export const InputStyled = styled.TextInput`
    color: ${(props) => props.color || colors.primary};
    text-align: left;
    font-size: 14px;
    width: 100%;
    margin-bottom: -16px;
`;

export const Icon = styled.Image`
    margin-left: -20px;
    width: 16px;
    height: 16px;
`;

export const Title = styled.Text`
    color: ${(props) => props.color || colors.grey900};
    margin-bottom: -8px;
`;
