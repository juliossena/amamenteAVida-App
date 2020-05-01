import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import {
  IconBack, Container, Title, BackgroundEffect, ContainerBack,
} from './styles';

const bg = require('../../../assets/img/bg_light.png');
const icon = require('../../../assets/icons/back.png');

const TitleScreen = ({ goBack, title }) => (
  <Container>
    <ContainerBack>
      <TouchableOpacity onPress={() => goBack()}>
        <IconBack source={icon} />
      </TouchableOpacity>
      <Title>{title}</Title>
    </ContainerBack>
    <BackgroundEffect source={bg} />
  </Container>
);

TitleScreen.propTypes = {
  goBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TitleScreen;
