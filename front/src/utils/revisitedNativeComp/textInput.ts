import React, { useState, CSSProperties } from 'react';
import {
  TextInput as NativeTextInput,
  TouchableOpacity,
  View,
  Text,
  Platform,
  TextInputProps as NativeTextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';

// Définition des props supplémentaires que vous pourriez avoir besoin pour le composant input pour le web
interface WebInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
    style?: CSSProperties;
  }
  
  // Création d'un type combiné pour les props des TextInput
  type TextInputProps = NativeTextInputProps & WebInputProps;
  
  // Composant TextInput qui différencie le web des plateformes natives
  const TextInput: React.FC<TextInputProps> = ({ props }) => {
    const inputStyle = Platform.OS === 'web' ? props.style : styles.searchInput;

    return Platform.OS === 'web' ? (
      <input {...props as WebInputProps} style={inputStyle as CSSProperties} />
    ) : (
      <NativeTextInput {...props as NativeTextInputProps} style={styles.searchInput as ViewStyle} />
    );
  };