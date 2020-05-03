import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';


const Information = ({ navigation }) => (
  <>
    <Text>Informações</Text>
  </>
);

Information.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default Information;
