/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../../utils/colors';
import {
  EMAIL_TYPE, PASSWORD_TYPE, CPF_TYPE, NUMBER_TYPE, TYPE_DATE, TYPE_CPF,
} from './constants';
import {
  InputStyled, Container, Icon, Title, ContainerTitle, MessageError,
} from './styles';

export const Mask = {
  date: (_value) => {
    const value = (_value || '').toString();

    const v = value.replace(/\D/g, '').slice(0, 8);

    if (v.length >= 5) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
    }

    if (v.length >= 3) {
      return `${v.slice(0, 2)}/${v.slice(2)}`;
    }

    return v;
  },
  cpf: (_value) => {
    const value = (_value || '').toString();

    const v = value.replace(/\D/g, '').slice(0, 11);

    if (v.length >= 10) {
      return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6, 9)}-${v.slice(9)}`;
    }

    if (v.length >= 7) {
      return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6)}`;
    }

    if (v.length >= 4) {
      return `${v.slice(0, 3)}.${v.slice(3)}`;
    }

    return v;
  },
};

export const SelectMask = (mask) => {
  switch (mask) {
    case TYPE_DATE:
      return Mask.date;
    case TYPE_CPF:
      return Mask.cpf;
    default:
      return '';
  }
};

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
  placeholder, color, type, icon, innerRef, editable, colorPlacehoder,
  disabled, value, onChangeText, onFocus, maxLength, title, colorTitle,
  colorBorder, messageErro, ...inputProps
}) => (
  <ContainerTitle>
    <Title color={colorTitle}>
      {title}
    </Title>
    <Container color={colorBorder}>
      <InputStyled
        {...inputProps}
        {...getPropsByType(type)}
        color={color}
        placeholder={placeholder}
        placeholderTextColor={colorPlacehoder}
        ref={innerRef}
        editable={editable}
        disabled={disabled}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        maxLength={maxLength}
      />
      {icon ? (<Icon source={icon} />) : null}
    </Container>
    <MessageError>
      {messageErro}
    </MessageError>
  </ContainerTitle>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  colorBorder: PropTypes.string,
  title: PropTypes.string.isRequired,
  colorTitle: PropTypes.string,
  color: PropTypes.string,
  colorPlacehoder: PropTypes.string,
  type: PropTypes.string,
  inputProps: PropTypes.instanceOf(Object),
  icon: PropTypes.number,
  innerRef: PropTypes.instanceOf(Object),
  editable: PropTypes.bool,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  maxLength: PropTypes.number,
  messageErro: PropTypes.string,
};

Input.defaultProps = {
  color: colors.grey900,
  colorBorder: colors.primary,
  colorTitle: colors.grey900,
  colorPlacehoder: colors.grey200,
  inputProps: null,
  icon: null,
  type: EMAIL_TYPE,
  innerRef: () => {},
  placeholder: '',
  editable: true,
  disabled: false,
  onFocus: () => {},
  maxLength: 9999,
  messageErro: '',
};

export default Input;
