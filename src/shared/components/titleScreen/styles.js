import styled from 'styled-components';

import { colors } from '../../../utils/colors';

export const IconBack = styled.Image`
  width: 20px;
  height: 20px;
  margin: 20px;
`;

export const Container = styled.View`
    width: 100%;
`;

export const ContainerBack = styled.View`
    background-color: ${colors.primaryLight};
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    color: ${colors.primary};
    text-align: center;
    font-size: 22px;
`;

export const BackgroundEffect = styled.Image`
    width: 100%;
    height: 50px;
`;
