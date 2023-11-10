/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Navbar} from '../../components/common/navbar/Navbar';
import styles from './station.styles';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../components/common/stations/StationsCard';
import {SCREENS} from '../../navigators/screens';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  selectSelectedStation,
  setSelectedStation,
} from '../../redux/stations/stationsSlice';
import {useNavigation} from '@react-navigation/native';
import {icons} from '../../constants';

type StationDetailsProps = {
  route: RouteProp<RootStackParamList, typeof SCREENS.DETAILS>;
};

export const StationDetails: React.FC<StationDetailsProps> = ({route}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    if (typeof route.params.station === 'object') {
      dispatch(setSelectedStation(route.params.station));
    }
  }, []);

  const station = useAppSelector(selectSelectedStation);

  return (
    <View>
      <Navbar />
      <TouchableOpacity
        style={styles.paginationButton}
        onPress={() => {
          if (typeof route.params.station === 'object') {
            navigation.goBack();
          } else {
            navigation.navigate(SCREENS.MAIN as never);
          }
        }}>
        <Image
          style={styles.paginationImage}
          source={icons.chevronLeft}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text>Go back</Text>
      <View style={styles.cardDetails}>
        <View>
          <Text style={styles.headText}>{station?.name}</Text>
        </View>
        <View style={styles.rowCards}>
          <View style={styles.infoBox}>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Latitude:</Text>
              {' ' + station?.lat}
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Longitude:</Text>
              {' ' + station?.lon}
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Station code:</Text>
              {' ' + station?.stationCode}
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Docks available:</Text>
              {' ' + station?.numDocksAvailable}
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Capacity:</Text>
              {' ' + station?.capacity}
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Creation date:</Text>
              {' ' + station?.createdAt}
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text numberOfLines={1}>
              <Text style={{fontWeight: 'bold'}}>Total bikes available:</Text>
              {' ' + station?.numBikesAvailable}
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Mechanical Bikes:</Text>
              {' ' + station?.num_bikes_available_types.at(0)?.mechanical}
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text>
              <Text style={{fontWeight: 'bold'}}>eBikes:</Text>
              {' ' + station?.num_bikes_available_types.at(1)?.ebike}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
