import React, { useEffect } from 'react';
import { withNavigation } from 'react-navigation';
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
  useEffect(() => {
    const validateLogin = async () => {
      const jwt = await valueToken();
      if (jwt === null) {
        navigation.navigate('Login');
      } else {
        try {
          await reqGetClient();
          navigation.navigate('Home');
        } catch (e) {
          navigation.navigate('Login');
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
  }).isRequired,
  reqGetClient: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  reqGetClient: operations.reqGetClient,
};

export default withNavigation(compose(connect(null, mapDispatchToProps))(Splash));
