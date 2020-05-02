import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';

import { colors } from '../../../../utils/colors';
import { InputUnique } from '../../../../shared/components/input';
import Button from '../../../../shared/components/button/Button';
import { URL_FORGOT, ConectarApiGet } from '../../../../shared/functions/conection';
import { generateQueryString } from '../../../../utils/service';
import {
  BoxStep,
  ImageEmail,
  Text,
  Title,
  BoxCode,
  BoxButton,
} from './styles';

const sendEmail = require('../../../../assets/gifs/send-email.gif');

const ForgotPasswordStep2 = ({
  nextStep, email, setMessageError,
}) => {
  const [loading, setLoading] = useState(false);
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');
  const [code5, setCode5] = useState('');
  const [code6, setCode6] = useState('');

  const code1Ref = createRef(null);
  const code2Ref = createRef(null);
  const code3Ref = createRef(null);
  const code4Ref = createRef(null);
  const code5Ref = createRef(null);
  const code6Ref = createRef(null);


  const handleSendCodeVerification = async (codeVerification) => {
    setLoading(true);
    const url = generateQueryString(URL_FORGOT, { email, codeVerification });
    try {
      await ConectarApiGet(url, { email });
      nextStep();
    } catch (e) {
      setMessageError(e.message);
    }
    setLoading(false);
  };

  const handleChangeInput = (value, setCode, nextRef) => {
    setCode(value);
    if (value.length > 0) {
      nextRef.current.focus();
    }
  };

  const handleChangeLastInput = (value) => {
    if (value) {
      setCode6(value);
    }
    if (value.length > 0) {
      Keyboard.dismiss();
      const codeVerification = code1 + code2 + code3 + code4 + code5 + value;
      handleSendCodeVerification(codeVerification);
    }
  };

  const handleBackspace = (nativeEvent, beforeRef) => {
    if (nativeEvent.key === 'Backspace') {
      beforeRef.current.focus();
    }
  };

  return (
    <BoxStep>
      <ImageEmail source={sendEmail} />
      <Title>Código enviado!</Title>
      <Text>
        O código de verificação foi enviado para seu e-mail,
        confira na caixa principal ou spam e insira os números abaixo:
      </Text>
      <BoxCode>
        <InputUnique
          innerRef={code1Ref}
          onFocus={() => setCode1('')}
          value={code1}
          onChangeText={(value) => { handleChangeInput(value, setCode1, code2Ref); }}
          onSubmitEditing={() => code2Ref.current.focus()}
        />
        <InputUnique
          innerRef={code2Ref}
          onFocus={() => setCode2('')}
          value={code2}
          onChangeText={(value) => { handleChangeInput(value, setCode2, code3Ref); }}
          onSubmitEditing={() => code3Ref.current.focus()}
          onKeyPress={({ nativeEvent }) => handleBackspace(nativeEvent, code1Ref)}
        />
        <InputUnique
          innerRef={code3Ref}
          onFocus={() => setCode3('')}
          value={code3}
          onChangeText={(value) => { handleChangeInput(value, setCode3, code4Ref); }}
          onSubmitEditing={() => code4Ref.current.focus()}
          onKeyPress={({ nativeEvent }) => handleBackspace(nativeEvent, code2Ref)}
        />
        <InputUnique
          innerRef={code4Ref}
          onFocus={() => setCode4('')}
          value={code4}
          onChangeText={(value) => { handleChangeInput(value, setCode4, code5Ref); }}
          onSubmitEditing={() => code5Ref.current.focus()}
          onKeyPress={({ nativeEvent }) => handleBackspace(nativeEvent, code3Ref)}
        />
        <InputUnique
          innerRef={code5Ref}
          onFocus={() => setCode5('')}
          value={code5}
          onChangeText={(value) => { handleChangeInput(value, setCode5, code6Ref); }}
          onSubmitEditing={() => code6Ref.current.focus()}
          onKeyPress={({ nativeEvent }) => handleBackspace(nativeEvent, code4Ref)}
        />
        <InputUnique
          innerRef={code6Ref}
          onFocus={() => setCode6('')}
          value={code6}
          onChangeText={handleChangeLastInput}
          onSubmitEditing={handleChangeLastInput}
          onKeyPress={({ nativeEvent }) => handleBackspace(nativeEvent, code5Ref)}
        />
      </BoxCode>
      <BoxButton>
        <Button
          backgroundColor={colors.primary}
          label="Validar código"
          onPress={() => handleSendCodeVerification(code1 + code2 + code3 + code4 + code5 + code6)}
          loading={loading}
        />
      </BoxButton>

    </BoxStep>
  );
};

ForgotPasswordStep2.propTypes = {
  nextStep: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setMessageError: PropTypes.func.isRequired,
};

export default ForgotPasswordStep2;
