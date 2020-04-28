import React from 'react';
import { Image } from 'react-native';
import {
  Logo, Background, Input, Button,
} from './styles';
import { colors } from '../../utils/colors';


const image = require('../../assets/img/logo.png');

const Login = () => (
  <Background>
    <Logo source={image} />
    <Input placeholder="Email" placeholderTextColor={colors.pinkLight} />
    <Input placeholder="Senha" placeholderTextColor={colors.pinkLight} />
    <Button
      title="Entrar"
    />
  </Background>
);

export default Login;
