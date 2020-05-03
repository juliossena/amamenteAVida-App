import styled from 'styled-components';

import { colors } from '../../../../utils/colors';

export const Container = styled.View`
    width: 80%;
    margin: auto;
    padding: 16px;
    border-bottom-color: ${colors.pinkLight};
    border-bottom-width: ${(props) => (props.isShowBorder ? '1px' : '0px')};
`;

export const Title = styled.Text`
    color: ${colors.primary};
    
`;

export const Label = styled.Text`
    color: ${colors.grey900};
`;
