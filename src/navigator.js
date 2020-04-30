import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './features/login';
import Home from './features/home';
import ForgotPassword from './features/forgotPassword';

const mainRoutes = {
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
};

const mainNavigator = createSwitchNavigator(mainRoutes, {
  initialRouteName: 'Login',
});

export default createAppContainer(mainNavigator);
