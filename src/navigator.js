import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './features/login';
import Home from './features/home';
import Splash from './features/splash';
import ForgotPassword from './features/forgotPassword';
import Register from './features/register';

const mainRoutes = {
  Splash: {
    name: 'Splash',
    screen: Splash,
  },
  Login: {
    name: 'Login',
    screen: Login,
  },
  Home: {
    name: 'Home',
    screen: Home,
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
