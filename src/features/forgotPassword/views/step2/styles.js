import styled from 'styled-components';
import { Dimensions } from 'react-native';

import { colors } from '../../../../utils/colors';

export const BoxStep = styled.View`
    width: ${Dimensions.get('window').width}px;
    position: relative;
    padding: 20px;
`;

export const ImageEmail = styled.Image`
    width: 140px;
    height: 140px;
    margin: -30px auto 0px auto;
`;

export const Title = styled.Text`
    text-align: center;
    margin: auto;
    font-size: 22px;
    color: ${colors.primary}

`;

export const Text = styled.Text`
    font-size: 14px;
    text-align: center;
    margin: 16px auto;
    color: ${colors.grey800}
`;

export const BoxCode = styled.View`
    display: flex;
    flex-direction: row;
    margin: auto;
    height: 60px;
`;

export const BoxButton = styled.View`
    margin: 16px auto -16px auto;
    width: 180px;
`;
