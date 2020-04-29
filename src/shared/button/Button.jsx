import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Text, ActivityContainer, Container } from './styles';

import { colors } from '../../utils/colors';

const Button = ({
  onPress,
  backgroundColor,
  borderColor,
  color,
  label,
  disabled,
  loading,
  style,
  radius,
  shadow,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.8}
  >
    <Container
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      style={style}
      radius={radius}
      shadow={shadow}
    >
      {loading ? (
        <ActivityContainer>
          <ActivityIndicator size="small" color={colors.white} />
        </ActivityContainer>
      ) : null}
      <Text semiBold color="white">
        {label}
      </Text>
    </Container>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  color: PropTypes.string,
  radius: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  shadow: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Button.defaultProps = {
  radius: false,
  shadow: false,
  backgroundColor: colors.pinkLight,
  borderColor: colors.pinkLight,
  color: colors.white,
  disabled: false,
  loading: false,
  style: {},
};


export default Button;
