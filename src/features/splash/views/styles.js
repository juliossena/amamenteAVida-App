import styled from 'styled-components';

import { colors } from '../../../utils/colors';

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${colors.primary};
`;

export const Logo = styled.Image`
    width: 112px;
    height: 160px;
    margin: 36px auto;
`;
