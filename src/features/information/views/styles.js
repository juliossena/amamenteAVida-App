import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors } from '../../../utils/colors';

export const Container = styled.View`
    height: 100%;
    width: 100%;
    position: relative;
    position: relative;
`;

export const ScrollView = styled.ScrollView`
    width: 100%;
    padding: 24px;
    padding-top: 0px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 22px; 
    color: ${colors.primary};
    margin-top: 24px;
`;

export const Paragraph = styled.Text`
    font-size: 18px;
    text-align: justify;
    width: 95%;
    color: ${colors.grey800};
    margin: 8px;
`;

export const Icon = styled(FontAwesomeIcon)`
`;
