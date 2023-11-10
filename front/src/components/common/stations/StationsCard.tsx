/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styles from './stationsCard.style';
import {Station} from '../../list-stations/interface/station.interface';
import {TouchableOpacity, Text, View} from 'react-native';
import {formatDate} from '../../../utils/formattingDate';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../../navigators/screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  station: Station;
}
export type RootStackParamList = {
  [SCREENS.DETAILS]: {station: Station};
};

export const StationsCard: React.FC<Props> = ({station}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(SCREENS.DETAILS, {station});
      }}>
      <View style={styles.textContainer}>
        <Text style={styles.stationName}>{station.name}</Text>
        <Text style={styles.stationType} numberOfLines={1}>
          <Text style={{fontWeight: 'bold'}}> Total bikes available : </Text>
          {' ' + station.numBikesAvailable}
        </Text>
        <Text style={styles.stationType}>
          <Text style={{fontWeight: 'bold'}}> Mechanical Bikes : </Text>
          {' ' + station.num_bikes_available_types.at(0)?.mechanical}
        </Text>
        <Text style={styles.stationType}>
          <Text style={{fontWeight: 'bold'}}> eBikes : </Text>
          {' ' + station.num_bikes_available_types.at(1)?.ebike}
        </Text>
        <Text style={styles.stationType}>
          <Text style={{fontWeight: 'bold'}}> Last update : </Text>
          {' ' + formatDate(station.updatedAt)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
