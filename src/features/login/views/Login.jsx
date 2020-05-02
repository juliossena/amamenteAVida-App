import React, { useState, createRef } from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { operations } from '../../../redux';
import {
  Logo, Background, ContainerLogin, ErrorMessage, BoxBottom, ButtonBottom,
} from './styles';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { colors } from '../../../utils/colors';
import {
  EMAIL_TYPE, PASSWORD_TYPE,
} from '../../../shared/components/input/constants';


const image = require('../../../assets/img/logo.png');
const iconEmail = require('../../../assets/icons/email.png');
const iconPassword = require('../../../assets/icons/password.png');

const Login = ({ navigation, reqLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = createRef(null);
  const passwordRef = createRef(null);

  const login = async () => {
    if (email === '') {
      setErrorMessage('Preencha o email');
      emailRef.current.focus();
      return;
    } if (password === '') {
      setErrorMessage('Preencha a senha');
      passwordRef.current.focus();
      return;
    }
    setLoading(true);
    const bodyLogin = { email, password };
    try {
      await reqLogin(bodyLogin);
      navigation.navigate('Home');
    } catch (e) {
      setErrorMessage('E-mail ou senha inválidas.');
    }
    setLoading(false);
  };

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  return (
    <Background>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Logo source={image} />
      <ContainerLogin>
        <Input
          title="E-mail:"
          colorBorder={colors.pinkLight}
          colorTitle={colors.pinkLight}
          color={colors.white}
          innerRef={emailRef}
          placeholder="Email"
          type={EMAIL_TYPE}
          icon={iconEmail}
          value={email}
          onChangeText={handleChangeEmail}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          title="Senha:"
          colorBorder={colors.pinkLight}
          colorTitle={colors.pinkLight}
          innerRef={passwordRef}
          placeholder="Senha"
          type={PASSWORD_TYPE}
          color={colors.pinkLight}
          icon={iconPassword}
          value={password}
          onChangeText={handleChangePassword}
          onSubmitEditing={login}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <Button onPress={login} label="ENTRAR" loading={loading} />

      </ContainerLogin>
      <BoxBottom>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <ButtonBottom>Esqueci a senha</ButtonBottom>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <ButtonBottom>Criar novo cadastro</ButtonBottom>
        </TouchableOpacity>
      </BoxBottom>
    </Background>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  reqLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  reqLogin: operations.reqLogin,
};

export default withNavigation(compose(connect(null, mapDispatchToProps))(Login));
