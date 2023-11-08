import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import axios from 'axios';
import {setEmail, setJwtTokens, setId} from '../../redux/auth/authSlice';
import styles from './auth.styles';
import {useAppDispatch} from '../../redux/hooks';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigators/screens';

type AuthProps = {
  authMode: 'Sign in' | 'Sign up';
};

export const Auth: React.FC<AuthProps> = ({authMode}) => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleAuth = async () => {
    const endpoint = authMode === 'Sign up' ? 'signup' : 'login';
    dispatch(setEmail(email));
    await axios
      .post(`http://localhost:3000/${endpoint}`, {
        email: email,
        password: password,
      })
      .then(res => {
        setJwtTokens(res.data.authToken);
        setId(res.data.data.id);
        navigation.navigate(SCREENS.MAIN as never);
      })
      .catch(e => console.error(e));
  };

  const handleSwitch = () => {
    navigation.navigate(
      authMode === 'Sign up'
        ? (SCREENS.SIGNIN as never)
        : (SCREENS.SIGNUP as never),
    );
  };

  return (
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
      <TouchableOpacity style={styles.submitBtn} onPress={handleAuth}>
        <Text>{authMode}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitBtn} onPress={handleSwitch}>
        <Text>{authMode === 'Sign up' ? 'Sign in' : 'Sign up'}</Text>
      </TouchableOpacity>
    </View>
  );
};
