import React from 'react';
import {View} from 'react-native';
import NavbarBtn from './NavbarBtn';
import {icons} from '../../../constants';
import styles from './navbarBtn.style';
import {resetStations} from '../../../redux/stations/stationsSlice';
import axios from 'axios';
import {
  resetAuth,
  selectAccessToken,
  selectPwd,
} from '../../../redux/auth/authSlice';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {selectCurrentUser, selectId} from '../../../redux/auth/authSlice';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../../navigators/screens';

interface User {
  _id: string;
  email: string;
  password: string;
}

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const token = useAppSelector(selectAccessToken);
  const user: User = {
    _id: useAppSelector(selectId),
    email: useAppSelector(selectCurrentUser),
    password: useAppSelector(selectPwd),
  };
  const handleLogout = async () => {
    await axios
      .post('http://localhost:3000/logout', user, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(() => {
        dispatch(resetStations());
        dispatch(resetAuth());
        navigation.navigate(SCREENS.SIGNUP as never);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.btnContainer}>
      <NavbarBtn iconUrl={icons.woman} handlePress={() => {}} />
      <NavbarBtn
        iconUrl={icons.logout}
        handlePress={() => {
          handleLogout();
        }}
      />
    </View>
  );
};
