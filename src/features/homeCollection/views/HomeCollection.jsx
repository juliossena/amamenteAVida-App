import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { Linking } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ModalFeedback from '../../../shared/components/modal/feedback/ModalFeedback';
import { brToIso } from '../../../shared/functions/date';
import { operations } from '../../../redux';
import Button from '../../../shared/components/button/Button';
import Input, {
  NUMBER_TYPE, SelectMask, TYPE_DATE, TYPE_TELEPHONE,
} from '../../../shared/components/input';
import { Container, BoxButton, ContainerInput } from './styles';
import TitleLogged from '../../../shared/components/titleScreen/titleLogged/TitleLogged';

const HomeCollections = ({ reqInsertDono }) => {
  const [loading, setLoading] = useState(false);
  const [donationVolume, setDonationVolume] = useState('');
  const [collectionDate, setCollectionDate] = useState('');
  const [contact, setContact] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const donationVolumeRef = createRef(null);
  const collectionDateRef = createRef(null);
  const contactRef = createRef(null);

  const handleInsertDono = async () => {
    setLoading(true);
    try {
      const bodyCreate = { donationVolume, collectionDate: brToIso(collectionDate), contact };
      await reqInsertDono(bodyCreate);
      Linking.openURL('tel:3856898');
    } catch (e) {
      setErrorMessage(e.message);
    }
    setLoading(false);
  };

  const handleChangeDate = (value) => {
    const maskFn = SelectMask(TYPE_DATE);
    setCollectionDate(maskFn(value));
  };
  const handleChangeTelephone = (value) => {
    const maskFn = SelectMask(TYPE_TELEPHONE);
    setContact(maskFn(value));
  };

  return (
    <Container>
      <ModalFeedback open={errorMessage !== ''} isSuccess={false} onClose={() => setErrorMessage('')}>
        {errorMessage}
      </ModalFeedback>
      <TitleLogged title="Fazer doação" />
      <ContainerInput>
        <Input
          innerRef={donationVolumeRef}
          type={NUMBER_TYPE}
          title="Volume a ser doado (ml):"
          placeholder="500 ml"
          value={donationVolume}
          onChangeText={(value) => setDonationVolume(value)}
          measure="ml"
          onSubmitEditing={() => collectionDateRef.current.focus()}
        />
        <Input
          innerRef={collectionDateRef}
          type={NUMBER_TYPE}
          placeholder="00/00/00"
          title="Data da coleta:"
          value={collectionDate}
          onChangeText={handleChangeDate}
          onSubmitEditing={() => contactRef.current.focus()}
        />
        <Input
          innerRef={contactRef}
          type={NUMBER_TYPE}
          placeholder="(00) 00000-0000"
          title="Telefone para contato:"
          value={contact}
          onChangeText={handleChangeTelephone}
          onSubmitEditing={handleInsertDono}
        />
      </ContainerInput>
      <BoxButton>
        <Button loading={loading} label="Salvar e ligar" onPress={handleInsertDono} />
      </BoxButton>
    </Container>
  );
};

HomeCollections.propTypes = {
  reqInsertDono: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  reqInsertDono: operations.reqInsertDono,
};

export default withNavigation(compose(connect(null, mapDispatchToProps))(HomeCollections));
