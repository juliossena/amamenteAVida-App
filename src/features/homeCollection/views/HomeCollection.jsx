import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const HomeCollections = ({ navigation }) => (
  <>
    <Text>Coleta Domiciliar</Text>
  </>
);

HomeCollections.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeCollections;
