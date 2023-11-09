import React, {useEffect, useMemo} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './listStations.style';
import {StationsCard} from '../common/stations/StationsCard';
import {
  selectStations,
  FetchAllStations,
  selectIsLoaded,
  selectArgSearch,
  selectArgFilter,
} from '../../redux/stations/stationsSlice';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';

const ListStations = () => {
  const isLoaded = useAppSelector(selectIsLoaded);
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(selectArgSearch);
  const filterTerm = useAppSelector(selectArgFilter);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(FetchAllStations(searchTerm, filterTerm));
    }, 120000);

    dispatch(FetchAllStations(searchTerm, filterTerm));
    return () => clearInterval(timer);
  }, [isLoaded, searchTerm, dispatch, filterTerm]);

  const data = useAppSelector(selectStations);
  const memoizedData = useMemo(() => data, [data]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Stations</Text>
      </View>
      <View style={styles.cardsContainer}>
        {memoizedData.length === 0 ? (
          <Text>No data found... </Text>
        ) : (
          <FlatList
            data={memoizedData}
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
