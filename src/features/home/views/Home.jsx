import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { onSignOut } from '../../../shared/functions/auth';

const Home = () => (
  <TouchableOpacity onPress={() => onSignOut()}>
    <Text>
      home
    </Text>
  </TouchableOpacity>
);

export default Home;
