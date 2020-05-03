import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Label } from './styles';

const Info = ({ title, label, isShowBorder }) => (
  <Container isShowBorder={isShowBorder}>
    <Title>
      {title}
    </Title>
    <Label>
      {label}
    </Label>
  </Container>
);

Info.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isShowBorder: PropTypes.bool,
};

Info.defaultProps = {
  isShowBorder: true,
};

export default Info;
