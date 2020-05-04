import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';

import { colors } from '../../../../utils/colors';
import { Container, Title } from './styles';

const TitleLogged = ({ title }) => (
  <Container>
    <StatusBar backgroundColor={colors.pink} barStyle="light-content" />
    <Title>{title}</Title>
  </Container>
);

TitleLogged.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleLogged;
