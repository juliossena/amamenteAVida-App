import React from 'react';
import { faChevronRight, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Linking, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors } from '../../../utils/colors';
import {
  Container, ScrollView, Title, Paragraph, Icon, TouchableOpacity,
} from './styles';
import TitleLogged from '../../../shared/components/titleScreen/titleLogged/TitleLogged';

const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
const latLng = '-19.926125, -43.957778';
const label = 'Custom Label';
const url = Platform.select({
  ios: `${scheme}${label}@${latLng}`,
  android: `${scheme}${latLng}(${label})`,
});

const Information = () => (
  <Container>
    <TitleLogged title="Informações para doação" />
    <ScrollView
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
    >
      <Title>
        {' '}
        <Icon icon={faChevronRight} color={colors.primary} />
        Endereço
      </Title>
      <Paragraph>
        Av. do Contorno, 9494 - Prado, Belo Horizonte - MG
      </Paragraph>

      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <FontAwesomeIcon icon={faMapMarked} size={24} color={colors.primary} />
      </TouchableOpacity>
      <Title>
        {' '}
        <Icon icon={faChevronRight} color={colors.primary} />
        Horários de atendimento
      </Title>
      <Paragraph>
        De 8 às 17 horas, são oferecidas 3 senhas a cada uma hora. Sendo
        o horário de 12 às 13 horas intervalo de almoço. As últimas senhas
        a serem distribuídas é no horário de 16 horas.
      </Paragraph>
      <Title>
        {' '}
        <Icon icon={faChevronRight} color={colors.primary} />
        Contato
      </Title>
      <Paragraph>
        (31) 3337-5678

      </Paragraph>
      <TouchableOpacity onPress={() => Linking.openURL('tel:3133375678')}>
        <FontAwesomeIcon icon={faPhone} size={24} color={colors.primary} />
      </TouchableOpacity>
    </ScrollView>
  </Container>
);

export default Information;
