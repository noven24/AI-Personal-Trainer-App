import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const AuthHeader = ({ onBack, navigation }) => {
  const insets = useSafeAreaInsets();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (navigation) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* Background Curved SVG */}
      <View style={styles.svgContainer}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Lengkungan yang menutupi bagian atas */}
          <Path
            d="M 0,0 L 100,0 L 100,60 Q 50,110 0,40 Z"
            fill={COLORS.primary}
          />
        </Svg>
      </View>

      {/* Header Content */}
      <View style={[styles.contentRow, { marginTop: insets.top + 16 }]}>
        {/* Tombol Back */}
        <TouchableOpacity onPress={handleBack} style={styles.backButton} activeOpacity={0.8}>
          <Ionicons name="chevron-back" size={24} color={COLORS.white} />
        </TouchableOpacity>

        {/* Logo GymCare (Putih - Oranye) */}
        <View style={styles.logoContainer}>
          <Text style={styles.gymText}>Gym</Text>
          <Text style={styles.careText}>Care</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160, 
    width: '100%',
    backgroundColor: COLORS.white,
    position: 'relative',
  },
  svgContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(139, 0, 0, 0.4)', // Warna merah tua (dark red) dengan transparansi
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gymText: {
    fontSize: 26,
    fontWeight: '900',
    color: COLORS.white,
    letterSpacing: 0.5,
  },
  careText: {
    fontSize: 26,
    fontWeight: '900',
    color: COLORS.secondary, // Warna Oranye sesuai request
    letterSpacing: 0.5,
  },
});

export default AuthHeader;
