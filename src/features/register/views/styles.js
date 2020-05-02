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
    width: 100%;
    margin: 0px auto 40px auto;
`;

export const ImgBottom = styled.Image`
    width: 100%;
    height: 30px;
    margin: 0px;
    transform: rotate(180deg);
`;

export const BtnPrevious = styled.Image`
    height: 30px;
    width: 31px;
    transform: rotate(180deg);
    margin: 0px 24px;
    display: ${(props) => (props.isShow ? 'flex' : 'none')};
`;

export const BtnNext = styled.Image`
    height: 30px;
    width: 31px;
    margin: 0px 24px;
    display: ${(props) => (props.isShow ? 'flex' : 'none')};
`;

export const BoxPreviousNext = styled.View`
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 8px;
`;

export const BoxCheckbox = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 20px;
`;

export const TextCheckbox = styled.Text`
    color: ${colors.grey900};
    font-size: 14px;
    margin-right: 24px;
`;

export const ScrollView = styled.ScrollView`
    width: ${Dimensions.get('window').width}px;
`;

export const BoxStep = styled.View`
    width: ${Dimensions.get('window').width}px;
    position: relative;
    padding: 20px;
`;

export const BoxButton = styled.View`
    margin: 16px auto -16px auto;
    width: 180px;
`;
