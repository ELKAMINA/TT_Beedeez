import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './listStations.style';
import {StationsCard} from '../common/stations/StationsCard';
import {
  selectStations,
  FetchAllStations,
  selectIsLoaded,
} from '../../redux/stations/stationsSlice';

import {Station} from './interface/station.interface';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';

const ListStations = () => {
  const isLoaded = useAppSelector(selectIsLoaded);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(FetchAllStations());
  }, []);

  useEffect(() => {}, [isLoaded]);

  const data = useAppSelector(selectStations);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Stations</Text>
      </View>
      <View style={styles.cardsContainer}>
        {data.length === 0 ? (
          <Text>Waiting for your data to load ... </Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <StationsCard station={item} key={item._id} />
            )}
            keyExtractor={item => item._id}
          />
        )}
      </View>
    </View>
  );
};
export default ListStations;
