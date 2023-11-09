import React from 'react';
import styles from './stationsCard.style';
import {Station} from '../../list-stations/interface/station.interface';
import {TouchableOpacity, Text, View} from 'react-native';
import {formatDate} from '../../../utils/formattingDate';

interface Props {
  station: Station;
}

export const StationsCard: React.FC<Props> = ({station}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.stationName}>{station.name}</Text>
        <Text style={styles.stationType} numberOfLines={1}>
          Total bikes available : {station.numBikesAvailable}
        </Text>
        <Text style={styles.stationType}>
          Mechanical Bikes :
          {station.num_bikes_available_types.at(0)?.mechanical} | eBikes :
          {station.num_bikes_available_types.at(1)?.ebike}
        </Text>
        <Text style={styles.stationType}>
          Last update : {formatDate(station.updatedAt)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
