import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { ContainerRadio, InternContainer } from './styles';

const RadioButton = ({ color, status, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <ContainerRadio color={color}>
      {status ? <InternContainer color={color} /> : null}
    </ContainerRadio>
  </TouchableOpacity>
);

RadioButton.propTypes = {
  color: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default RadioButton;
