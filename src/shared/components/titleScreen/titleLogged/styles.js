import styled from 'styled-components';

import { colors } from '../../../../utils/colors';

export const Container = styled.View`
    width: 100%;
    background-color: ${colors.pink};
    height: 60px;
    flex-direction: row;
    align-items: center;
    border-bottom-color: ${colors.primary};
    border-bottom-width: 8px;
`;


export const Title = styled.Text`
    font-size: 18px;
    width: 100%;
    text-align: center;
    color: ${colors.white};
`;
