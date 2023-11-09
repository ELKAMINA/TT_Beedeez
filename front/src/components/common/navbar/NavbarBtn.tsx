import styles from './navbarBtn.style';
import React from 'react';
import {Image, TouchableOpacity, GestureResponderEvent} from 'react-native';

interface NavbarBtnProps {
  iconUrl: string;
  handlePress: (event: GestureResponderEvent) => void;
}

const NavbarBtn: React.FC<NavbarBtnProps> = ({iconUrl, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode="cover" style={styles.btnImg} />
    </TouchableOpacity>
  );
};

export default NavbarBtn;
