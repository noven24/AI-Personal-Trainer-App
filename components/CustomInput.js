import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  leftIcon,
  style,
  label,
  error,
  autoCapitalize = 'none',
  editable = true,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isPassword = secureTextEntry;

  return (
    <View style={[styles.wrapper, style]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[
          styles.container,
          isFocused && styles.focused,
          error && styles.errorBorder,
        ]}
      >
        {leftIcon ? (
          <View style={styles.leftIcon}>
            <Ionicons name={leftIcon} size={20} color={isFocused ? COLORS.secondary : COLORS.gray} />
          </View>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !showPassword}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={editable}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.rightIcon}>
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: COLORS.dark,
    fontWeight: '600',
    marginBottom: 6,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.inputBg,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: COLORS.inputBg,
    paddingHorizontal: 14,
    height: 54,
  },
  focused: {
    borderColor: COLORS.secondary,
    backgroundColor: COLORS.white,
  },
  errorBorder: {
    borderColor: COLORS.primary,
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 10,
    padding: 2,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: COLORS.dark,
    height: '100%',
  },
  errorText: {
    fontSize: 12,
    color: COLORS.primary,
    marginTop: 4,
    marginLeft: 4,
  },
});

export default CustomInput;
