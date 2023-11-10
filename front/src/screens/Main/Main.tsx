import React from 'react';
import {View} from 'react-native';

import {Welcome} from '../../components/welcome/Welcome';
import ListStations from '../../components/list-stations/ListStations';
import {Navbar} from '../../components/common/navbar/Navbar';
import styles from './main.styles';

type AuthProps = {
  authMode: 'Sign in' | 'Sign up';
};

export const Main = () => {
  return (
    <View>
      <Navbar />
      <View style={styles.wrapper}>
        <Welcome />
        <ListStations />
      </View>
    </View>
  );
};
