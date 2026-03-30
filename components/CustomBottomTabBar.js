import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../constants/colors';

const CustomBottomTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: Platform.OS === 'ios' ? insets.bottom : 8 }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Custom Tab: Gym & Komunitas (Urutan ketiga = index 2)
        if (index === 2) {
          return (
             <TouchableOpacity
              key={route.key}
              activeOpacity={0.9}
              onPress={onPress}
              style={styles.middleTabButton}
            >
              <View style={styles.middleTabInner}>
                <Ionicons name="chatbubbles" size={26} color="#FFFFFF" />
                <Text style={styles.middleTabText} numberOfLines={2}>
                  Konsultasi{'\n'}AI
                </Text>
              </View>
            </TouchableOpacity>
          );
        }

        // Tentukan Icon untuk tab standar
        let iconName = 'ellipse';
        if (index === 0) iconName = isFocused ? 'home' : 'home-outline';
        if (index === 1) iconName = isFocused ? 'speedometer' : 'speedometer-outline';
        if (index === 3) iconName = isFocused ? 'people' : 'people-outline';
        if (index === 4) iconName = isFocused ? 'person' : 'person-outline';

        // Warna text & icon aktif=Oranye, tidak aktif=Abu-abu
        const color = isFocused ? COLORS.secondary : '#A0A0A0';

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={styles.tabButton}
            activeOpacity={0.8}
          >
            <Ionicons name={iconName} size={24} color={color} />
            <Text style={[styles.tabText, { color }]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    height: Platform.OS === 'ios' ? 85 : 70, // Cukup ruang untuk label
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 10,
    marginTop: 4,
    fontWeight: '500',
  },
  middleTabButton: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  middleTabInner: {
    top: -24, // Membuat lingkaran menonjol menimpa tab bar
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: COLORS.secondary, // Warna oranye utama
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 4,
    borderColor: '#FFFFFF', // Border putih agar lebih membaur saat ditaruh di atas komponen lain
  },
  middleTabText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 2,
    lineHeight: 12,
  },
});

export default CustomBottomTabBar;
