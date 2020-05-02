import React, { useState, createRef } from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import RadioButton from '../../../shared/components/input/radioButton/RadioButton';

import useHorizontalSteps from '../../../utils/useHorizontalSteps';
import { brToIso } from '../../../shared/functions/date';
import {
  EMAIL_TYPE, PASSWORD_TYPE, CPF_TYPE, NUMBER_TYPE, TYPE_DATE, TYPE_CPF,
} from '../../../shared/components/input/constants';
import { colors } from '../../../utils/colors';
import ModalFeedback from '../../../shared/components/modal/feedback/ModalFeedback';
import TitleScreen from '../../../shared/components/titleScreen/TitleScreen';
import Input, { SelectMask } from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { validateCpf, validateEmail, validateDate } from '../../../shared/functions/validate';
import { ConectarApiPost, URL_CREATE_USER } from '../../../shared/functions/conection';
import {
  Container,
  ImgBottom,
  BoxPreviousNext,
  BtnNext,
  BtnPrevious,
  BoxCheckbox,
  TextCheckbox,
  ContainerInfo,
  ScrollView,
  BoxStep,
  BoxButton,
} from './styles';

const imageBg = require('../../../assets/img/bg_light.png');
const iconNext = require('../../../assets/icons/next.png');

const Register = ({ navigation }) => {
  const {
    ref, nextStep, previousStep, currentStep,
  } = useHorizontalSteps(Dimensions.get('window').width);

  const [loading, setLoading] = useState(false);
  const [modalSuccessful, setModalSuccessful] = useState(false);
  const [sendSuccessful, setSendSuccessful] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [checkDonor, setCheckDonor] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [profession, setProfession] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorInput, setErrorInput] = useState({
    name: '',
    email: '',
    birthDate: '',
    cpf: '',
    profession: '',
    password: '',
    confirmPassword: '',
  });

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
    let notError = true;
    if (name === '') {
      if (currentStep() === 2) {
        previousStep();
      }
      errorInput.name = 'Informe um nome válido';
      notError = false;
    } else {
      errorInput.name = '';
    }
    if (email === '' || !validateEmail(email)) {
      if (currentStep() === 2) {
        previousStep();
      }
      errorInput.email = 'Informe um e-mail válido';
      notError = false;
    } else {
      errorInput.email = '';
    }
    if (birthDate === '' || !validateDate(birthDate)) {
      if (currentStep() === 2) {
        previousStep();
      }
      errorInput.birthDate = 'Informe uma dáta válida';
      notError = false;
    } else {
      errorInput.birthDate = '';
    }
    if (cpf === '' || !validateCpf(cpf)) {
      if (currentStep() === 2) {
        previousStep();
      }
      errorInput.cpf = 'Cpf inválido';
      notError = false;
    } else {
      errorInput.cpf = '';
    }
    if (password === '' || password.length < 3) {
      if (currentStep() === 2) {
        previousStep();
      }
      errorInput.password = 'A senha está pequena';
      notError = false;
    } else {
      errorInput.password = '';
    }
    if (confirmPasswordRef === '' || confirmPassword !== password) {
      if (currentStep() === 2) {
        previousStep();
      }
      errorInput.confirmPassword = 'As senhas não são iguais';
      notError = false;
    } else {
      errorInput.confirmPassword = '';
    }
    if (!notError) {
      return false;
    }
    setErrorInput(errorInput);
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
    <BoxStep>
      <Input
        messageErro={errorInput.name}
        innerRef={nameRef}
        type={EMAIL_TYPE}
        title="Nome Completo:"
        placeholder="Nome Completo"
        value={name}
        onChangeText={(value) => setName(value)}
        onSubmitEditing={() => emailRef.current.focus()}
      />
      <Input
        messageErro={errorInput.email}
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
        messageErro={errorInput.birthDate}
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
        messageErro={errorInput.cpf}
        innerRef={cpfRef}
        color={validateCpf(cpf) ? colors.grey900 : colors.pink}
        type={CPF_TYPE}
        title="CPF:"
        placeholder="000.000.000-00"
        value={cpf}
        onChangeText={handleChangeCpf}
        onSubmitEditing={() => nextStep()}
      />
    </BoxStep>
  );

  const renderQuestion2 = () => (
    <BoxStep>
      <Input
        messageErro={errorInput.password}
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
        messageErro={errorInput.confirmPassword}
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
    </BoxStep>
  );

  return (
    <Container>
      <ModalFeedback open={modalSuccessful} isSuccess={sendSuccessful} onClose={handleButtonModal}>
        {sendSuccessful ? 'Cadastro efetuado. Efetue o login com o e-mail e a senha cadastradas.' : messageError}
      </ModalFeedback>
      <View style={{ backgroundColor: colors.white }}>
        <TitleScreen
          title="Criar novo cadastro"
          goBack={() => navigation.navigate('Login')}
        />
        <ContainerInfo>
          <ScrollView
            ref={ref}
            horizontal
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
          >
            {renderQuestion1()}
            {renderQuestion2()}
          </ScrollView>
          <BoxPreviousNext>
            <TouchableOpacity onPress={() => previousStep()}>
              <BtnPrevious source={iconNext} isShow={currentStep() === 2} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nextStep()}>
              <BtnNext source={iconNext} isShow={currentStep() === 1} />
            </TouchableOpacity>

          </BoxPreviousNext>
          <BoxButton>
            <Button
              loading={loading}
              label="Registrar"
              backgroundColor={isFilled() ? colors.primary : colors.grey200}
              onPress={sendRegister}
            />
          </BoxButton>
        </ContainerInfo>
        <ImgBottom source={imageBg} />
      </View>
    </Container>
  );
};

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;
