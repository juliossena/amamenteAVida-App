import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';

import { colors } from '../../../../utils/colors';
import Input from '../../../../shared/components/input/Input';
import Button from '../../../../shared/components/button/Button';
import { URL_FORGOT, ConectarApiPost } from '../../../../shared/functions/conection';
import { BoxStep, BoxButton } from './styles';

const ForgotPasswordStep1 = ({
  nextStep, email, setEmail, setMessageError,
}) => {
  const [loading, setLoading] = useState(false);

  const handleSendCodeVerification = async () => {
    Keyboard.dismiss();
    setLoading(true);
    try {
      await ConectarApiPost(URL_FORGOT, { email });
      nextStep();
    } catch (e) {
      setMessageError(e.message);
    }
    setLoading(false);
  };

  return (
    <BoxStep>
      <Input
        title="E-mail:"
        value={email}
        placeholder="email@email.com"
        onChangeText={(value) => setEmail(value)}
        onSubmitEditing={handleSendCodeVerification}
      />
      <BoxButton>
        <Button
          backgroundColor={colors.primary}
          label="Recuperar senha"
          onPress={handleSendCodeVerification}
          loading={loading}
        />
      </BoxButton>
    </BoxStep>
  );
};

ForgotPasswordStep1.propTypes = {
  nextStep: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setMessageError: PropTypes.func.isRequired,
};

export default ForgotPasswordStep1;
