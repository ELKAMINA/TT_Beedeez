import React from 'react';
import {View, Text} from 'react-native';
import {Navbar} from '../../components/common/navbar/Navbar';
import styles from './station.styles';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../components/common/stations/StationsCard';
import {SCREENS} from '../../navigators/screens';

type StationDetailsProps = {
  route: RouteProp<RootStackParamList, typeof SCREENS.DETAILS>;
};

export const StationDetails: React.FC<StationDetailsProps> = ({route}) => {
  const station = route.params.station;
  console.log(station.name);
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.cardDetails}>
        <Text> {}</Text>
      </View>
    </View>
  );
};
