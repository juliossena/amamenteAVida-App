import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faInfo, faMapMarkerAlt, faHandHoldingWater, faUser,
} from '@fortawesome/free-solid-svg-icons';

import { colors } from './utils/colors';
import Login from './features/login';
import Splash from './features/splash';
import ForgotPassword from './features/forgotPassword';
import Register from './features/register';
import Locations from './features/locations';
import Information from './features/information';
import HomeCollection from './features/homeCollection';
import Profile from './features/profile';

const mainNavigator = createStackNavigator({
  Splash,
  Login,
  ForgotPassword,
  Register,
  Home: createBottomTabNavigator(
    {
      Information: {
        screen: Information,
        navigationOptions: {
          title: 'Informações',
        },
      },
      Locations: {
        screen: Locations,
        navigationOptions: {
          title: 'Locais Doação',
        },
      },
      HomeCollection: {
        screen: HomeCollection,
        navigationOptions: {
          title: 'Doar',
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: 'Perfil',
        },
      },
    },
    {
      tabBarOptions: {
        activeTintColor: colors.white,
        inactiveTintColor: colors.pinkDark,
        style: {
          backgroundColor: colors.primary,
          height: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      defaultNavigationOptions: ({ navigation }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          switch (routeName) {
            case 'Information':
              return <FontAwesomeIcon icon={faInfo} size={24} color={tintColor} />;
            case 'Locations':
              return <FontAwesomeIcon icon={faMapMarkerAlt} size={24} color={tintColor} />;
            case 'HomeCollection':
              return <FontAwesomeIcon icon={faHandHoldingWater} size={24} color={tintColor} />;
            case 'Profile':
              return <FontAwesomeIcon icon={faUser} size={24} color={tintColor} />;
            default:
              return <FontAwesomeIcon icon={faInfo} size={24} color={tintColor} />;
          }
        },
      }),
    },
  ),
}, { defaultNavigationOptions: { headerShown: false } });

export default createAppContainer(mainNavigator);
