import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import MenuBar from '../../../shared/components/menuBar/MenuBar';

const HomeCollections = ({ navigation }) => (
  <>
    <MenuBar navigation={navigation} />
    <Text>Coleta Domiciliar</Text>
  </>
);

HomeCollections.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeCollections;
