import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import styles from './listStations.style';
import {COLORS} from '../../constants';
import {StationsCard} from '../common/stations/StationsCard';
import useFetch from '../../utils/useFetch';

const ListStations = () => {
  const {data, isLoading, error} = useFetch('stations', {
    query: '',
    num_pages: '1',
  });

  return (
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text style={styles.headerTitle}>Nearby Stations</Text>
    //     <TouchableOpacity>
    //       <Text style={styles.headerBtn}>Show all</Text>
    //     </TouchableOpacity>
    //   </View>

    //   <View style={styles.cardsContainer}>
    //     {isLoading ? (
    //       <ActivityIndicator size="large" color={COLORS.primary} />
    //     ) : error ? (
    // <Text>Something went wrong</Text>
    //     ) : (
    //       data?.map(station => <StationsCard station={station} />)
    //     )}
    //   </View>
    // </View>
  );
};

export default ListStations;
