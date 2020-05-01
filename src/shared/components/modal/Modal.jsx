import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import {
  Container, BoxModal, IconClose, TouchableOpacity,
} from './styles';

const iconClose = require('../../../assets/icons/close.png');

const Modal = ({
  open, onClose, isButtonClose, children,
}) => {
  if (!open) {
    return null;
  }

  return (
    <Container>
      <BoxModal>
        {isButtonClose ? (
          <TouchableOpacity onPress={onClose}>
            <IconClose source={iconClose} />
          </TouchableOpacity>
        ) : null}
        {children}
      </BoxModal>
    </Container>
  );
};


Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isButtonClose: PropTypes.bool,
  children: PropTypes.instanceOf(Object).isRequired,
};

Modal.defaultProps = {
  isButtonClose: false,
};

export default Modal;
