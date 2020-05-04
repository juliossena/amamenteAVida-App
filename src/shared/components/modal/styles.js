import styled from 'styled-components';

import { colors } from '../../../utils/colors';

export const Container = styled.View`
    position: absolute;
    margin: auto;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    z-index: 100;
    justify-content: center;
    background-color: #00000080;
`;

export const BoxModal = styled.View`
    border-radius: 4px;
    width: 90%;
    background-color: ${colors.white};
    padding: 20px;
    margin: auto;
`;

export const IconClose = styled.Image`
    height: 20px;
    width: 20px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
    position: absolute;
    top: 16px;
    right: 16px;
`;

export default Container;
