/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

import { InputStyled, Container, Icon } from './styles';
import {
  EMAIL_TYPE, PASSWORD_TYPE, CPF_TYPE, NUMBER_TYPE,
} from './constants';

const getPropsByType = (type) => {
  switch (type) {
    case EMAIL_TYPE:
      return {
        autoCorrect: false,
        keyboardType: 'email-address',
        autoCapitalize: 'none',
      };
    case PASSWORD_TYPE:
      return {
        autoCorrect: false,
        autoCapitalize: 'none',
        secureTextEntry: true,
      };
    case CPF_TYPE:
      return {
        autoCorrect: false,
        keyboardType: 'number-pad',
      };
    case NUMBER_TYPE:
      return {
        autoCorrect: false,
        keyboardType: 'numeric',
      };
    default:
      return {
        autoCorrect: false,
        keyboardType: 'email-address',
        autoCapitalize: 'none',
      };
  }
};

const Input = ({
  placeholder, color, type, icon, innerRef, editable,
  disabled, value, onChangeText, onFocus, maxLength, ...inputProps
}) => (
  <Container>
    <InputStyled
      placeholder={placeholder}
      placeholderTextColor={color}
      ref={innerRef}
      editable={editable}
      disabled={disabled}
      value={value}
      onChangeText={onChangeText}
      onFocus={onFocus}
      maxLength={maxLength}
      {...inputProps}
      {...getPropsByType(type)}
    />
    {icon ? (<Icon source={icon} />) : null}
  </Container>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  inputProps: PropTypes.instanceOf(Object),
  icon: PropTypes.number,
  innerRef: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  editable: PropTypes.bool,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  color: colors.pinkLight,
  inputProps: null,
  icon: null,
  type: EMAIL_TYPE,
  innerRef: () => {},
  placeholder: '',
  editable: true,
  disabled: false,
  onFocus: () => {},
  maxLength: 9999,
};

export default Input;
