import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../../utils/colors';

export const Container = styled.View`
    width: 100%;
`;

export const ContainerInfo = styled(LinearGradient)`
    width: 100%;
    padding: 24px;
`;

export const PhotoProfile = styled.View`
    width: 80px;
    height: 80px;
    padding: 20px;
    border-radius: 40px;
    margin: 16px auto;
    background-color: ${colors.pink};
`;

export const InitialName = styled.Text`
    color: ${colors.primary};
    font-size: 40px;
    margin: auto;
`;

export const Name = styled.Text`
    font-size: 18px;
    color: ${colors.white};
    margin: auto;
`;

export const Profession = styled.Text`
    font-size: 14px;
    color: ${colors.pinkLight};
    margin: auto;
`;

export const BoxInfo = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const BoxDateCreate = styled.View`
    width: 50%;
    padding: 20px;
    background-color: ${colors.pink};
`;

export const BoxDonors = styled.View`
    width: 50%;
    padding: 20px;
    background-color: ${colors.primary};
`;

export const TitleBox = styled.Text`
    color: ${colors.white};
    font-size: 18px;
    margin: auto;
`;

export const SubTitle1 = styled.Text`
    color: ${colors.primary};
    font-size: 14px;
    margin: auto;
`;

export const SubTitle2 = styled.Text`
    color: ${colors.pink};
    font-size: 14px;
    margin: auto;
`;

export const BoxButton = styled.View`
    margin: 16px auto -16px auto;
    width: 180px;
`;
