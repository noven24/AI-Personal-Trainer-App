import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const UnderlineInput = ({
  placeholder,
  value,
  onChangeText,
  iconName,
  secureTextEntry,
  keyboardType = 'default',
  autoCapitalize = 'none',
  style,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isPassword = secureTextEntry;

  return (
    <View style={[styles.container, isFocused && styles.containerFocused, style]}>
      {/* Icon */}
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={22} color={COLORS.dark} />
      </View>

      {/* Vertical Pipe Separator */}
      <View style={styles.separator} />

      {/* Text Input */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && !showPassword}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {/* Eye Icon for Password */}
      {isPassword && (
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color={COLORS.dark}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 12,
  },
  containerFocused: {
    borderBottomColor: COLORS.secondary,
  },
  iconContainer: {
    width: 32,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  separator: {
    width: 1,
    height: 24,
    backgroundColor: '#E0E0E0',
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: '500',
    height: 24,
    padding: 0, // Reset padding for Android
  },
  eyeIcon: {
    paddingLeft: 10,
  },
});

export default UnderlineInput;
