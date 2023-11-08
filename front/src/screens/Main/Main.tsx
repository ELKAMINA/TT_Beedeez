import React from 'react';
import {TextInput, View, Text} from 'react-native';
import useFetch from '../../utils/useFetch';
import styles from './main.styles';
import {ScrollView} from 'react-native-gesture-handler';
import {Welcome} from '../../components/welcome/Welcome';

type AuthProps = {
  authMode: 'Sign in' | 'Sign up';
};

export const Main = () => {
  const {data, isLoading, error} = useFetch('stations', {
    query: '',
    num_pages: '1',
  });

  return (
    <View>
      <Welcome />
    </View>
  );
};
