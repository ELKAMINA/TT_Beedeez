import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import axios from 'axios';
import {
  setEmail,
  setJwtTokens,
  setId,
  setPwd,
} from '../../redux/auth/authSlice';
import styles from './auth.styles';
import {useAppDispatch} from '../../redux/hooks';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigators/screens';
import LinearGradient from 'react-native-linear-gradient';

type AuthProps = {
  authMode: 'Sign in' | 'Sign up';
};

export const Auth: React.FC<AuthProps> = ({authMode}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [email, setMail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async () => {
    const endpoint = authMode === 'Sign up' ? 'signup' : 'login';
    dispatch(setEmail(email));
    dispatch(setPwd(password));
    await axios
      .post(`http://localhost:3000/${endpoint}`, {
        email: email,
        password: password,
      })
      .then(res => {
        console.log('res ', res.data.data._id);
        dispatch(setJwtTokens(res.data.authToken.token));
        dispatch(setId(res.data.data._id));
        navigation.navigate(SCREENS.MAIN as never);
      })
      .catch(e => {
        console.error(e);
        if (e.response.data.message) {
          setError(e.response.data.message);
        }
      });
  };

  const handleSwitch = () => {
    navigation.navigate(
      authMode === 'Sign up'
        ? (SCREENS.SIGNIN as never)
        : (SCREENS.SIGNUP as never),
    );
  };

  return (
    <View style={styles.wholeBody}>
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <Text style={styles.headText}>Welcome to Find my bike</Text>
          <Text style={styles.normalText}>Let's {authMode}</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            autoFocus
            value={email}
            onChangeText={text => setMail(text)}
            style={styles.searchInput}
            keyboardType="default"
          />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            autoFocus
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={text => setPassword(text)}
            style={styles.searchInput}
          />
        </View>
        {error ? (
          <View style={styles.searchContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
        <TouchableOpacity style={styles.submitBtn} onPress={handleAuth}>
          <Text style={styles.smallText}>{authMode}</Text>
        </TouchableOpacity>
        <View style={styles.switchContainer}>
          <Text style={styles.smallText}>
            {authMode === 'Sign up'
              ? 'Already have an account ?'
              : "Don't have an account ?"}
          </Text>
          <TouchableOpacity onPress={handleSwitch}>
            <Text style={styles.underlineBtn}>
              {' '}
              {authMode === 'Sign up' ? 'Sign in' : 'Sign up'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
