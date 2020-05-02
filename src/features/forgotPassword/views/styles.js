import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { colors } from '../../../utils/colors';


export const Container = styled.View`
    background-color: ${colors.primaryLight};
    height: 100%;
    width: 100%;
    position: relative;
`;

export const ContainerInfo = styled.View`
    position: relative;
    width: 100%;
    margin: 0px auto 40px auto;
`;

export const ImgBottom = styled.Image`
    width: 100%;
    height: 30px;
    margin: 0px;
    transform: rotate(180deg);
`;

export const ScrollView = styled.ScrollView`
    width: ${Dimensions.get('window').width}px;
`;
