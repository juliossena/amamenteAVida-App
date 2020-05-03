import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Dimensions,
} from 'react-native';
import { colors } from '../../../utils/colors';
import ForgotPasswordStep1 from './step1/ForgotPasswordStep1';
import ForgotPasswordStep2 from './step2/ForgotPasswordStep2';
import ForgotPasswordStep3 from './step3/ForgotPasswordStep3';
import useHorizontalSteps from '../../../utils/useHorizontalSteps';
import TitleScreen from '../../../shared/components/titleScreen/TitleScreen';
import ModalFeedback from '../../../shared/components/modal/feedback/ModalFeedback';
import {
  Container,
  ContainerInfo,
  ImgBottom,
  ScrollView,
} from './styles';

const imageBg = require('../../../assets/img/bg_light.png');


const ForgotPassword = ({ navigation }) => {
  const { ref, nextStep } = useHorizontalSteps(Dimensions.get('window').width);
  const [email, setEmail] = useState('');
  const [messageError, setMessageError] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');

  return (
    <Container>
      <ModalFeedback open={messageError !== ''} isSuccess={false} onClose={() => setMessageError('')}>
        {messageError}
      </ModalFeedback>
      <ModalFeedback open={messageSuccess !== ''} onClose={() => navigation.navigate('Login')}>
        {messageSuccess}
      </ModalFeedback>
      <View style={{ backgroundColor: colors.white }}>
        <TitleScreen
          title="Recuperar senha"
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
            <ForgotPasswordStep1
              email={email}
              setEmail={setEmail}
              nextStep={nextStep}
              setMessageError={setMessageError}
            />
            <ForgotPasswordStep2
              email={email}
              nextStep={nextStep}
              setMessageError={setMessageError}
            />
            <ForgotPasswordStep3
              setMessageError={setMessageError}
              setMessageSuccess={setMessageSuccess}
            />
          </ScrollView>
        </ContainerInfo>
        <ImgBottom source={imageBg} />
      </View>
    </Container>
  );
};

ForgotPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ForgotPassword;
