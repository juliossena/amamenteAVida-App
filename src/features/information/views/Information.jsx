import React from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../../../utils/colors';
import {
  Container, ScrollView, Title, Paragraph, Icon,
} from './styles';
import TitleLogged from '../../../shared/components/titleScreen/titleLogged/TitleLogged';

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
        Por que eu devo doar?
      </Title>
      <Paragraph>
        Querida mamãe o seu leite é capaz de beneficiar diversos bebês
        que nasceram prematuros ou com doenças gastrointestinais, pois
        apesar de existirem diversas formulações de leite a gente sabe
        que não existe nada melhor do que o leite materno né?
      </Paragraph>
      <Paragraph>
        Além disso, quanto mais o leite materno é retirado maior será a
        sua produção de leite!
      </Paragraph>
      <Title>
        {' '}
        <Icon icon={faChevronRight} color={colors.primary} />
        Informações
      </Title>
      <Paragraph>
        1 - Ferver os potes de vidro por 15 minutos e deixar secar sobre um pano limpo;
      </Paragraph>
      <Paragraph>
        2 - Use uma touca e um lenço na cabeça;
      </Paragraph>
      <Paragraph>
        3 - Coloque uma máscara sobre o nariz ou a boca;
      </Paragraph>
      <Paragraph>
        4 - Lave as mãos e os braços até o cotovelo com água e sabão;
      </Paragraph>
      <Paragraph>
        5 - Lave as mamas com água e seque com um pano limpo;
      </Paragraph>
      <Paragraph>
        6 - Procure um lugar tranquilo e limpo na casa;
      </Paragraph>
      <Paragraph>
        7 - faça massagem nos seio com as pontas dos dedos com movimentos circulares;
      </Paragraph>
      <Paragraph>
        8 - Inicie a coleta direto no pote e encha-o até faltarem dois dedos;
      </Paragraph>
      <Paragraph>
        9 - Identifique o pote com seu nome e data do início da coleta;
      </Paragraph>
      <Paragraph>
        10 - Caso deseje completar o pote que já contém leite, faça a coleta em um copo de vidro limpo e depois despeje no pote;
      </Paragraph>
      <Paragraph>
        11 - O leite pode ficar até 10 dias no congelador ou freezer;
      </Paragraph>
      <Paragraph>
        12 - Para a coleta solicite o serviço no Banco de leite por meio do aplicativo.
      </Paragraph>


    </ScrollView>
  </Container>
);

export default Information;
