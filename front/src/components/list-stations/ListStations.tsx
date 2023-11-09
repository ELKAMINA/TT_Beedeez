import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './listStations.style';
import {StationsCard} from '../common/stations/StationsCard';
import {
  selectStations,
  FetchAllStations,
  selectIsLoaded,
  selectArgSearch,
  resetArg,
  selectArgFilter,
} from '../../redux/stations/stationsSlice';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';

const ListStations = () => {
  const isLoaded = useAppSelector(selectIsLoaded);
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(selectArgSearch);
  const filterTerm = useAppSelector(selectArgFilter);

  useEffect(() => {
    dispatch(FetchAllStations(searchTerm, filterTerm));
  }, [isLoaded, searchTerm, dispatch, filterTerm]);

  const data = useAppSelector(selectStations);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Stations</Text>
      </View>
      <View style={styles.cardsContainer}>
        {data.length === 0 ? (
          <Text>No data found... </Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.container}>
                <StationsCard station={item} key={item._id} />
              </View>
            )}
            keyExtractor={item => item._id}
            numColumns={3}
            collapsable={false}
          />
        )}
      </View>
    </View>
  );
};
export default ListStations;
