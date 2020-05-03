import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Info from './info/Info';
import { isoToBr } from '../../../shared/functions/date';
import { colors } from '../../../utils/colors';
import Button from '../../../shared/components/button/Button';
import { onSignOut } from '../../../shared/functions/auth';
import {
  Container,
  PhotoProfile,
  InitialName,
  Name,
  Profession,
  BoxInfo,
  BoxDateCreate,
  BoxDonors,
  TitleBox,
  SubTitle1,
  SubTitle2,
  ContainerInfo,
  BoxButton,
} from './styles';

const Profile = ({ client, navigation }) => {
  const signOut = () => {
    onSignOut();
    navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' }),
      ],
    }));
  };

  return (
    <Container>
      <ContainerInfo
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.primary, colors.pink]}
      >
        <PhotoProfile>
          <InitialName>{client.name.charAt(0).toUpperCase()}</InitialName>
        </PhotoProfile>
        <Name>{client.name}</Name>
        <Profession>{client.profession ? client.profession : ''}</Profession>
      </ContainerInfo>

      <BoxInfo>
        <BoxDateCreate>
          <TitleBox>{isoToBr(client.birthDate)}</TitleBox>
          <SubTitle1>Data de nascimento</SubTitle1>
        </BoxDateCreate>
        <BoxDonors>
          <TitleBox>0</TitleBox>
          <SubTitle2>Doações</SubTitle2>
        </BoxDonors>
      </BoxInfo>
      <Info title="E-mail:" label={client.email} />
      <Info title="CPF:" label={client.cpf} />
      <BoxButton>
        <Button
          label="Sair"
          onPress={signOut}
          backgroundColor={colors.primary}
        />
      </BoxButton>
    </Container>
  );
};

Profile.propTypes = {
  client: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export const mapStateToProps = (state) => ({
  client: state.userReducer.client,
});

export default withNavigation(compose(connect(mapStateToProps, null))(Profile));
