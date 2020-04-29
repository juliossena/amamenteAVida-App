import React, { useState, createRef } from 'react';
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

const image = require('../../../assets/img/logo.png');
const iconEmail = require('../../../assets/icons/email.png');
const iconPassword = require('../../../assets/icons/password.png');

const URL_BASE = 'https://amamenteavida.herokuapp.com/';
const URL_LOGIN = `${URL_BASE}login`;

const Login = () => {
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
      console.log(result.headers.authorization);
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
          innerRef={emailRef}
          placeholder="Email"
          type={EMAIL_TYPE}
          color={colors.pinkLight}
          icon={iconEmail}
          value={email}
          onChangeText={handleChangeEmail}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
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
        <ButtonBottom>Criar novo cadastro</ButtonBottom>
      </BoxBottom>
    </Background>
  );
};

export default Login;
