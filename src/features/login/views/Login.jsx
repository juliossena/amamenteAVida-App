import React, { useState, createRef } from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
  Logo, Background, ContainerLogin, ErrorMessage, BoxBottom, ButtonBottom,
} from './styles';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { colors } from '../../../utils/colors';
import {
  EMAIL_TYPE, PASSWORD_TYPE,
} from '../../../shared/components/input/constants';
import { ConectarApiPost } from '../../../shared/functions/conectionAPI';
import { onSignIn } from '../../../shared/functions/auth';


const image = require('../../../assets/img/logo.png');
const iconEmail = require('../../../assets/icons/email.png');
const iconPassword = require('../../../assets/icons/password.png');

const URL_BASE = 'https://amamenteavida.herokuapp.com/';
const URL_LOGIN = `${URL_BASE}login`;

const Login = ({ navigation }) => {
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
      const result = await ConectarApiPost(URL_LOGIN, bodyLogin);
      onSignIn(result.headers.authorization);
      navigation.navigate('Home');
    } catch (e) {
      setErrorMessage('Email ou senha inválidos');
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
        <ButtonBottom>Esqueci a senha</ButtonBottom>
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
};

export default withNavigation(Login);
