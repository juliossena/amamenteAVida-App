import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import MenuBar from '../../../shared/components/menuBar/MenuBar';


const Information = ({ navigation }) => (
  <>
    <MenuBar navigation={navigation} />
    <Text>Informações</Text>
  </>
);

Information.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default Information;
