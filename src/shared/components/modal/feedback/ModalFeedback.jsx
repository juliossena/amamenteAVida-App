import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../../../utils/colors';
import {
  ImageSucess, Text, BoxButton, Title,
} from './styles';
import Button from '../../button/Button';
import Modal from '../Modal';

const imageError = require('../../../../assets/gifs/error.gif');
const imageSucess = require('../../../../assets/gifs/checked.gif');

const ModalFeedback = ({
  open, onClose, children, isSuccess,
}) => (
  <Modal open={open} onClose={onClose}>
    <ImageSucess source={isSuccess ? imageSucess : imageError} />
    <Title>
      {isSuccess ? 'Sucesso!' : 'Erro :('}
    </Title>
    <Text>
      {children}
    </Text>
    <BoxButton>
      <Button label="OK" onPress={onClose} backgroundColor={colors.primary} />
    </BoxButton>
  </Modal>
);

ModalFeedback.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool,
};

ModalFeedback.defaultProps = {
  isSuccess: true,
};


export default ModalFeedback;
