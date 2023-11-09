import React from 'react';
import {View} from 'react-native';

import {Welcome} from '../../components/welcome/Welcome';
import ListStations from '../../components/list-stations/ListStations';

type AuthProps = {
  // const [searchTerm, setSearchTerm] = useState<string>('');

  authMode: 'Sign in' | 'Sign up';
};

export const Main = () => {
  return (
    <View>
      <Welcome />
      <ListStations />
    </View>
  );
};
