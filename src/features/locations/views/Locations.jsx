import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const Locations = ({ navigation }) => (
  <>
    <Text>Local mais proximo para doação</Text>
  </>
);

Locations.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};


export default Locations;
