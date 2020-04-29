import styled from 'styled-components';
import { Platform } from 'react-native';

import { colors } from '../../utils/colors';

export const ButtonStyle = styled.Button`
    border-radius: 3px;
    color: white;
    padding-left: 5px;
    border: 1px solid ${colors.pinkLight};
    margin: 8px auto;
`;

export const ActivityContainer = styled.View`
  position: absolute;
  top: 0;
  left: 15;
  bottom: 0;
  justify-content: center;
`;

export const Container = styled.View`
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || colors.blue};
  border-radius: 4px;
  ${(props) => (props.shadow
    ? {
      ...Platform.select({
        ios: {
          shadowOffset: { height: 1, width: 1 },
          shadowColor: colors.black,
          shadowOpacity: 0.5,
          shadowRadius: 5,
        },
        android: {
          elevation: 3.5,
        },
      }),
    }
    : {})};
`;

export const Text = styled.Text`
    color: ${(props) => props.color || colors.white};
`;

export default ButtonStyle;
