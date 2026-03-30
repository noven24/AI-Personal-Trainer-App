import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Defs, ClipPath, Rect, G } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AuthCurvedHeader = ({ title, onBack, navigation }) => {
  const insets = useSafeAreaInsets();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (navigation) {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Background Swoop */}
      <View style={styles.redBackground}>
        {/* Curved bottom via SVG */}
        <Svg
          height="100%"
          width="100%"
          viewBox="0 0 400 180"
          preserveAspectRatio="none"
          style={StyleSheet.absoluteFill}
        >
          <Path
            d="M0,0 L400,0 L400,130 Q320,190 180,140 Q80,100 0,160 Z"
            fill={COLORS.primary}
          />
        </Svg>

        {/* Content inside the red area */}
        <View style={styles.contentRow}>
          {/* Back button */}
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color={COLORS.white} />
          </TouchableOpacity>

          {/* Logo / Title */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>GymCare</Text>
            {title ? <Text style={styles.subtitleText}>{title}</Text> : null}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.white,
  },
  redBackground: {
    flex: 1,
    position: 'relative',
    alignItems: 'flex-end',
  },
  contentRow: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    zIndex: 10,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 36, // compensate for back button
  },
  logoText: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.white,
    letterSpacing: 1,
  },
  subtitleText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },
});

export default AuthCurvedHeader;
