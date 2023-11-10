import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import styles from './welcome.style';
import {useAppDispatch} from '../../redux/hooks';
import {SIZES, COLORS, FONT} from '../../constants';
import {useAppSelector} from '../../redux/hooks';
import {selectCurrentUser} from '../../redux/auth/authSlice';
import {icons} from '../../constants';
import {setArgSearch, setArgFilter} from '../../redux/stations/stationsSlice';

const bikeAvailability: string[] = [
  'Mechanical Bikes',
  'eBikes',
  'Both mechanical and eBikes',
  'Busy',
  'All',
];

const getTabStyle = (activeButton: string, item: string) => ({
  paddingVertical: SIZES.small / 2,
  paddingHorizontal: SIZES.small,
  borderRadius: SIZES.medium,
  borderWidth: 1,
  borderColor: activeButton === item ? COLORS.secondary : COLORS.gray2,
});

const getTabTextStyle = (activeButton: string, item: string) => ({
  fontFamily: FONT.regular,
  color: activeButton === item ? COLORS.secondary : COLORS.gray2,
});

export const Welcome = () => {
  const [activeButton, setActiveButton] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleClick = () => {
    console.log(searchTerm);
    dispatch(setArgSearch(searchTerm));
  };

  const user = useAppSelector(selectCurrentUser);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.userName}>Hello {user}</Text>
      <Text style={styles.welcomeMessage}>
        Get WHAT you want, WHERE you want
      </Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={(text: string) => setSearchTerm(text)}
          placeholder="What are you looking for?"
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={bikeAvailability}
          renderItem={({item}) => (
            <TouchableOpacity
              style={getTabStyle(activeButton, item)}
              onPress={() => {
                setActiveButton(item);
                dispatch(setArgFilter(item));
              }}>
              <Text style={getTabTextStyle(activeButton, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          horizontal
          collapsable={true}
          ItemSeparatorComponent={() => <View style={styles.tabsContainer} />}
        />
      </View>
    </View>
  );
};
