import React, { useEffect } from 'react';
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { StatusBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { operations } from '../../../redux';
import { valueToken } from '../../../shared/functions/auth';
import { colors } from '../../../utils/colors';
import { Container, Logo } from './styles';

const logo = require('../../../assets/img/logo.png');

const Splash = ({ navigation, reqGetClient }) => {
  const resetActionLogin = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Login' }),
    ],
  });

  const resetActionHome = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Home' }),
    ],
  });

  useEffect(() => {
    const validateLogin = async () => {
      const jwt = await valueToken();
      if (jwt === null) {
        navigation.dispatch(resetActionLogin);
      } else {
        try {
          await reqGetClient();
          navigation.dispatch(resetActionHome);
        } catch (e) {
          navigation.dispatch(resetActionLogin);
        }
      }
    };

    validateLogin();
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <Logo source={logo} />
      <ActivityIndicator size="large" color={colors.white} />

    </Container>
  );
};

Splash.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
  reqGetClient: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  reqGetClient: operations.reqGetClient,
};

export default withNavigation(compose(connect(null, mapDispatchToProps))(Splash));
