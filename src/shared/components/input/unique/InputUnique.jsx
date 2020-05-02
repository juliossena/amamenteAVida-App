/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../../../utils/colors';
import { InputStyled } from './styles';

const InputUnique = ({
  placeholder, innerRef,
  disabled, value, onChangeText, onFocus,
  ...inputProps
}) => (
  <InputStyled
    {...inputProps}
    autoCorrect={false}
    keyboardType="numeric"
    placeholder={placeholder}
    placeholderTextColor={colors.grey100}
    ref={innerRef}
    disabled={disabled}
    value={value}
    onChangeText={onChangeText}
    onFocus={onFocus}
    maxLength={1}
  />
);

InputUnique.propTypes = {
  placeholder: PropTypes.string,
  innerRef: PropTypes.instanceOf(Object),
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
};

InputUnique.defaultProps = {
  placeholder: '0',
  innerRef: () => '',
  disabled: false,
  onFocus: () => '',
};

export default InputUnique;
