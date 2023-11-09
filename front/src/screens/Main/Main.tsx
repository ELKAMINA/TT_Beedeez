import React from 'react';
import {View} from 'react-native';

import {Welcome} from '../../components/welcome/Welcome';
import ListStations from '../../components/list-stations/ListStations';
import {Navbar} from '../../components/common/navbar/Navbar';

type AuthProps = {
  authMode: 'Sign in' | 'Sign up';
};

export const Main = () => {
  return (
    <View>
      <Navbar />
      <Welcome />
      <ListStations />
    </View>
  );
};
