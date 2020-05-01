import styled from 'styled-components';
import { colors } from '../../../utils/colors';

export const Container = styled.View`
    width: 80%;
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
    display: ${(props) => (props.isShow ? 'flex' : 'none')};
`;

export const BtnNext = styled.Image`
    height: 30px;
    width: 31px;
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
    margin-bottom: 12px;
`;

export const TextCheckbox = styled.Text`
    color: ${colors.grey900};
    font-size: 14px;
    margin-right: 24px;
`;
