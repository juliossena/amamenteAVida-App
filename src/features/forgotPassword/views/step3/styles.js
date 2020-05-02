import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const BoxStep = styled.View`
    width: ${Dimensions.get('window').width}px;
    position: relative;
    padding: 20px;
`;

export const BoxButton = styled.View`
    margin: 16px auto -16px auto;
    width: 180px;
`;
