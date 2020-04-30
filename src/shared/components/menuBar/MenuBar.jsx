import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Icon } from './styles';

const icon = require('../../../assets/icons/full-bar.png');

const MenuBar = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <Icon source={icon} />
  </TouchableOpacity>
);

MenuBar.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default MenuBar;
