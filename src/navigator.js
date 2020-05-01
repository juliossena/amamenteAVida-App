/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Login from './features/login';
import Home from './features/home';
import ForgotPassword from './features/forgotPassword';
import Register from './features/register';
import Locations from './features/locations';
import Information from './features/information';
import HomeCollection from './features/homeCollection';

const menuRoutes = {
  Locations: {
    name: 'Locations',
    screen: (props) => <Locations {...props} />,
    navigationOptions: {
      title: 'Localizações',
    },
  },
  Information: {
    name: 'Information',
    screen: (props) => <Information {...props} />,
    navigationOptions: {
      title: 'Informações',
    },
  },
  HomeCollection: {
    name: 'HomeCollection',
    screen: (props) => <HomeCollection {...props} />,
    navigationOptions: {
      title: 'Coleta Domiciliar',
    },
  },
};

const menuNavigator = createDrawerNavigator(menuRoutes);

const mainRoutes = {
  Login: {
    name: 'Login',
    screen: Login,
  },
  Home: {
    name: 'Home',
    screen: menuNavigator,
  },
  ForgotPassword: {
    name: 'ForgotPassword',
    screen: ForgotPassword,
  },
  Register: {
    name: 'Register',
    screen: Register,
  },
};

const mainNavigator = createSwitchNavigator(mainRoutes);

export default createAppContainer(mainNavigator);
