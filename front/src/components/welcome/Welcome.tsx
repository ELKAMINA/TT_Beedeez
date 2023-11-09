import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './welcome.style';
import {SIZES, COLORS, FONT} from '../../constants';
import {useAppSelector} from '../../redux/hooks';
import {selectCurrentUser} from '../../redux/auth/authSlice';

const bikeAvailability: string[] = ['Available', 'Busy', 'All'];

const getTabStyle = (activeButton: string, item: string) => ({
  paddingVertical: SIZES.small / 2,
  paddingHorizontal: SIZES.small,
  borderRadius: SIZES.medium,
  borderWidth: 1,
  borderColor: activeButton === item ? COLORS.secondary : COLORS.gray2,
});

const getTabTextStyle = (activeButton: string, item: string) => ({
  fontFamily: FONT.medium,
  color: activeButton === item ? COLORS.secondary : COLORS.gray2,
});

export const Welcome = () => {
  const [activeButton, setActiveButton] = useState<string>('All');
  const user = useAppSelector(selectCurrentUser);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello {user}</Text>
        <Text style={styles.welcomeMessage}>Get your bike where you want</Text>
      </View>
      <View>
        <FlatList
          data={bikeAvailability}
          renderItem={({item}) => (
            <TouchableOpacity
              style={getTabStyle(activeButton, item)}
              onPress={() => {
                setActiveButton(item);
                // router.push(`/search/${item}`);
              }}>
              <Text style={getTabTextStyle(activeButton, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{paddingHorizontal: SIZES.medium * 2}}
          horizontal
        />
      </View>
    </View>
  );
};
