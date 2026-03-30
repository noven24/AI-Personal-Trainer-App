import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../constants/colors';

const CustomButton = ({
  title,
  onPress,
  style,
  textStyle,
  loading = false,
  variant = 'primary', // 'primary' | 'outline' | 'ghost'
  disabled = false,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'outline':
        return [styles.button, styles.outlineButton, style];
      case 'ghost':
        return [styles.button, styles.ghostButton, style];
      default:
        return [styles.button, styles.primaryButton, disabled && styles.disabled, style];
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'outline':
        return [styles.text, styles.outlineText, textStyle];
      case 'ghost':
        return [styles.text, styles.ghostText, textStyle];
      default:
        return [styles.text, styles.primaryText, textStyle];
    }
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      activeOpacity={0.85}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? COLORS.white : COLORS.secondary} />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 52,
  },
  primaryButton: {
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  outlineButton: {
    backgroundColor: COLORS.transparent,
    borderWidth: 1.5,
    borderColor: COLORS.secondary,
  },
  ghostButton: {
    backgroundColor: COLORS.transparent,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  primaryText: {
    color: COLORS.white,
  },
  outlineText: {
    color: COLORS.secondary,
  },
  ghostText: {
    color: COLORS.secondary,
  },
});

export default CustomButton;
