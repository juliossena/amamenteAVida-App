import React, { useState } from 'react';
import {
  Logo, Background, ContainerLogin,
} from './styles';
import Input from '../../shared/input/Input';
import Button from '../../shared/button/Button';
import { colors } from '../../utils/colors';
import {
  EMAIL_TYPE, PASSWORD_TYPE,
} from '../../shared/input/constants';

const image = require('../../assets/img/logo.png');
const iconEmail = require('../../assets/icons/email.png');
const iconPassword = require('../../assets/icons/password.png');

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          placeholder="Email"
          type={EMAIL_TYPE}
          color={colors.pinkLight}
          icon={iconEmail}
          value={email}
          onChangeText={handleChangeEmail}
        />
        <Input
          placeholder="Senha"
          type={PASSWORD_TYPE}
          color={colors.pinkLight}
          icon={iconPassword}
          value={password}
          onChangeText={handleChangePassword}
        />
        <Button onPress={() => ''} label="ENTRAR" />
      </ContainerLogin>
    </Background>
  );
};

export default Login;
