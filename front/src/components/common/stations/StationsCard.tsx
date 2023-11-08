import React from 'react';
import styles from './stationsCard.style';
import {Station} from '../../list-stations/interface/station.interface';
import {TouchableOpacity, Text, View} from 'react-native';

interface Props {
  station: Station;
}

export const StationsCard: React.FC<Props> = ({station}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.logoContainer} />
      <View style={styles.textContainer}>
        <Text style={styles.stationName} numberOfLines={1} />
        {station.numBikesAvailable}
        <Text style={styles.stationType} />
      </View>
    </TouchableOpacity>
  );
};
