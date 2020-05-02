import React, { useState, createRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import RadioButton from '../../../shared/components/input/radioButton/RadioButton';

import { brToIso } from '../../../shared/functions/date';
import {
  EMAIL_TYPE, PASSWORD_TYPE, CPF_TYPE, NUMBER_TYPE, TYPE_DATE, TYPE_CPF,
} from '../../../shared/components/input/constants';
import { colors } from '../../../utils/colors';
import {
  Container,
  ImgBottom,
  BoxPreviousNext,
  BtnNext,
  BtnPrevious,
  BoxCheckbox,
  TextCheckbox,
} from './styles';
import ModalFeedback from '../../../shared/components/modal/feedback/ModalFeedback';
import TitleScreen from '../../../shared/components/titleScreen/TitleScreen';
import Input, { SelectMask } from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { validateCpf, validateEmail, validateDate } from '../../../shared/functions/validate';
import { ConectarApiPost } from '../../../shared/functions/conectionAPI';

const imageBg = require('../../../assets/img/bg_light.png');
const iconNext = require('../../../assets/icons/next.png');

const URL_BASE = 'https://amamenteavida.herokuapp.com/';
const URL_CREATE_USER = `${URL_BASE}client`;

const Register = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [modalSuccessful, setModalSuccessful] = useState(false);
  const [sendSuccessful, setSendSuccessful] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [page, setPage] = useState(1);
  const [checkDonor, setCheckDonor] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [profession, setProfession] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const nameRef = createRef(null);
  const emailRef = createRef(null);
  const birthDateRef = createRef(null);
  const cpfRef = createRef(null);
  const professionRef = createRef(null);
  const passwordRef = createRef(null);
  const confirmPasswordRef = createRef(null);

  const handleChangeDate = (value) => {
    const maskFn = SelectMask(TYPE_DATE);
    setBirthDate(maskFn(value));
  };

  const handleChangeCpf = (value) => {
    const maskFn = SelectMask(TYPE_CPF);
    setCpf(maskFn(value));
  };

  const isFilled = () => {
    if (name === '') {
      return false;
    }
    if (email === '') {
      return false;
    }
    if (birthDate === '') {
      return false;
    }
    if (cpf === '') {
      return false;
    }
    if (profession === '') {
      return false;
    }
    if (password === '') {
      return false;
    }
    if (confirmPasswordRef === '') {
      return false;
    }
    return true;
  };

  const sendRegister = async () => {
    if (name === '') {
      setPage(1);
      nameRef.current.focus();
      return false;
    }
    if (email === '' || !validateEmail(email)) {
      setPage(1);

      emailRef.current.focus();
      return false;
    }
    if (birthDate === '' || !validateDate(birthDate)) {
      setPage(1);

      birthDateRef.current.focus();
      return false;
    }
    if (cpf === '') {
      setPage(1);
      cpfRef.current.focus();
      return false;
    }
    if (password === '' || password.length < 3) {
      setPage(2);
      passwordRef.current.focus();
      return false;
    }
    if (confirmPasswordRef === '' || confirmPassword !== password) {
      setPage(2);
      confirmPasswordRef.current.focus();
      return false;
    }
    setLoading(true);
    const bodyCreate = {
      name, email, password, profession, birthDate: brToIso(birthDate), cpf, isDonor: checkDonor,
    };
    try {
      await ConectarApiPost(URL_CREATE_USER, bodyCreate);
      setModalSuccessful(true);
      setSendSuccessful(true);
    } catch (e) {
      setModalSuccessful(true);
      setMessageError(e.message);
    }
    setLoading(false);
    return true;
  };

  const handleButtonModal = () => {
    if (sendSuccessful) {
      navigation.navigate('Login');
    } else {
      setModalSuccessful(false);
    }
  };


  const renderQuestion1 = () => (
    <View style={{ display: page === 1 ? 'flex' : 'none' }}>
      <Input
        innerRef={nameRef}
        type={EMAIL_TYPE}
        title="Nome Completo:"
        placeholder="Nome Completo"
        value={name}
        onChangeText={(value) => setName(value)}
        onSubmitEditing={() => emailRef.current.focus()}
      />
      <Input
        innerRef={emailRef}
        color={validateEmail(email) ? colors.grey900 : colors.pink}
        type={EMAIL_TYPE}
        title="E-mail:"
        placeholder="email@email.com"
        value={email}
        onChangeText={(value) => setEmail(value)}
        onSubmitEditing={() => birthDateRef.current.focus()}
      />
      <Input
        innerRef={birthDateRef}
        color={validateDate(birthDate) ? colors.grey900 : colors.pink}
        type={NUMBER_TYPE}
        title="Data de Nascimento:"
        placeholder="00/00/0000"
        value={birthDate}
        onChangeText={handleChangeDate}
        onSubmitEditing={() => cpfRef.current.focus()}
      />
      <Input
        innerRef={cpfRef}
        color={validateCpf(cpf) ? colors.grey900 : colors.pink}
        type={CPF_TYPE}
        title="CPF:"
        placeholder="000.000.000-00"
        value={cpf}
        onChangeText={handleChangeCpf}
        onSubmitEditing={() => setPage(2)}
      />
    </View>
  );

  const renderQuestion2 = () => (
    <View style={{ display: page === 2 ? 'flex' : 'none' }}>
      <Input
        innerRef={passwordRef}
        color={password.length > 3 ? colors.grey900 : colors.pink}
        type={PASSWORD_TYPE}
        title="Senha:"
        placeholder="Senha"
        value={password}
        onChangeText={(value) => setPassword(value)}
        onSubmitEditing={() => confirmPasswordRef.current.focus()}
      />
      <Input
        innerRef={confirmPasswordRef}
        color={confirmPassword === password ? colors.grey900 : colors.pink}
        type={PASSWORD_TYPE}
        title="Confirmar senha:"
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChangeText={(value) => setConfirmPassword(value)}
        onSubmitEditing={() => professionRef.current.focus()}
      />
      <Input
        innerRef={professionRef}
        type={EMAIL_TYPE}
        title="Profissão:"
        placeholder="Profissão"
        value={profession}
        onChangeText={(value) => setProfession(value)}
      />
      <TextCheckbox style={{ marginBottom: 8 }}>Ja sou doadora?</TextCheckbox>
      <BoxCheckbox>
        <RadioButton
          color={colors.primary}
          status={checkDonor === true}
          onPress={() => { setCheckDonor(true); }}
        />
        <TouchableOpacity onPress={() => setCheckDonor(true)}>
          <TextCheckbox>Sim</TextCheckbox>
        </TouchableOpacity>
        <RadioButton
          color={colors.primary}
          status={checkDonor === false}
          onPress={() => { setCheckDonor(false); }}
        />
        <TouchableOpacity onPress={() => setCheckDonor(false)}>
          <TextCheckbox>Não</TextCheckbox>
        </TouchableOpacity>
      </BoxCheckbox>
    </View>
  );

  return (
    <View style={{ backgroundColor: colors.primaryLight, height: '100%', position: 'relative' }}>
      <ModalFeedback open={modalSuccessful} isSuccess={sendSuccessful} onClose={handleButtonModal}>
        {sendSuccessful ? 'Cadastro efetuado. Efetue o login com o e-mail e a senha cadastradas.' : messageError}
      </ModalFeedback>
      <View style={{ backgroundColor: colors.white }}>
        <TitleScreen
          title="Criar novo cadastro"
          goBack={() => navigation.navigate('Login')}
        />
        <Container>
          {renderQuestion1()}
          {renderQuestion2()}
          <BoxPreviousNext>
            <TouchableOpacity onPress={() => setPage(1)}>
              <BtnPrevious source={iconNext} isShow={page === 2} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPage(2)}>
              <BtnNext source={iconNext} isShow={page === 1} />
            </TouchableOpacity>

          </BoxPreviousNext>
          <Button
            loading={loading}
            label="Registrar"
            backgroundColor={isFilled() ? colors.primary : colors.grey200}
            onPress={sendRegister}
          />
        </Container>
        <ImgBottom source={imageBg} />
      </View>
    </View>
  );
};

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;
