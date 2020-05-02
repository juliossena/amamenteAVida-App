import styled from 'styled-components';

import { colors } from '../../../../utils/colors';

export const InputStyled = styled.TextInput`
    color: ${(props) => props.color || colors.primary};
    text-align: left;
    font-size: 14px;
    width: 30px;
    height: 45px;
    margin: 4px;
    text-align: center;
    border-radius: 8px;
    background-color: ${colors.grey200};
    margin-bottom: -16px;
`;

export default InputStyled;
