import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Keyboard } from 'react-native';

import { operations } from '../../../../redux';
import { colors } from '../../../../utils/colors';
import { Input, PASSWORD_TYPE } from '../../../../shared/components/input';
import Button from '../../../../shared/components/button/Button';
import { BoxStep, BoxButton } from './styles';

const ForgotPasswordStep3 = ({
  setMessageError, reqUpdatePassword, setMessageSuccess,
}) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
  const passwordRef = createRef(null);
  const confirmPasswordRef = createRef(null);

  const validateInputs = () => {
    let noError = true;
    if (password !== confirmPassword) {
      passwordRef.current.focus();
      setErrorConfirmPassword('As senhas não são iguais.');
      noError = false;
    }
    if (password.length < 3) {
      confirmPasswordRef.current.focus();
      setErrorPassword('A senha está muito pequena.');
      noError = false;
    }
    return noError;
  };

  const handleSendCodeVerification = async () => {
    if (!validateInputs()) {
      return;
    }
    Keyboard.dismiss();
    setLoading(true);
    try {
      await reqUpdatePassword({ password });
      setMessageSuccess('Sua senha foi atualizada. Efetue o login com a nova senha para ter acesso à plataforma.');
    } catch (e) {
      setMessageError(e.message);
    }
    setLoading(false);
  };

  return (
    <BoxStep>
      <Input
        title="Nova senha:"
        type={PASSWORD_TYPE}
        value={password}
        placeholder="Nova senha"
        onChangeText={(value) => { setPassword(value); setErrorPassword(''); }}
        innerRef={passwordRef}
        onSubmitEditing={() => confirmPasswordRef.current.focus()}
        messageErro={errorPassword}
      />
      <Input
        title="Confirmar nova senha:"
        type={PASSWORD_TYPE}
        value={confirmPassword}
        placeholder="Confirmar nova senha"
        onChangeText={(value) => { setConfirmPassword(value); setErrorConfirmPassword(''); }}
        innerRef={confirmPasswordRef}
        messageErro={errorConfirmPassword}
        onSubmitEditing={handleSendCodeVerification}
      />
      <BoxButton>
        <Button
          backgroundColor={colors.primary}
          label="Alterar senha"
          onPress={handleSendCodeVerification}
          loading={loading}
        />
      </BoxButton>
    </BoxStep>
  );
};

ForgotPasswordStep3.propTypes = {
  setMessageError: PropTypes.func.isRequired,
  setMessageSuccess: PropTypes.func.isRequired,
  reqUpdatePassword: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  reqUpdatePassword: operations.reqUpdatePassword,
};

export default compose(connect(null, mapDispatchToProps))(ForgotPasswordStep3);
