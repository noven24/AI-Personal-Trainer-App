import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const STATS = [
  { id: '1', icon: '🏅', label: 'Latihan Selesai', value: '48', unit: 'sesi' },
  { id: '2', icon: '🔥', label: 'Kalori', value: '12,400', unit: 'kal' },
  { id: '3', icon: '⏱️', label: 'Waktu', value: '2,160', unit: 'menit' },
];

const PREFERENCES = [
  { icon: 'body-outline', label: 'Target Fisik', value: 'Penurunan Berat Badan' },
  { icon: 'fitness-outline', label: 'Level Kebugaran', value: 'Intermediate' },
  { icon: 'calendar-outline', label: 'Frekuensi Latihan', value: '4x per Minggu' },
  { icon: 'restaurant-outline', label: 'Diet Preferensi', value: 'High Protein' },
  { icon: 'notifications-outline', label: 'Pengingat Latihan', value: '06:00 Pagi' },
];

const ProfileScreen = ({ route }) => {
  const insets = useSafeAreaInsets();
  const onLogout = route?.params?.onLogout;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header + Avatar */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarOuter}>
            <View style={styles.avatar}>
              <Text style={styles.avatarEmoji}>👩</Text>
            </View>
            <TouchableOpacity style={styles.editAvatarBtn}>
              <Ionicons name="camera" size={14} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Puspa</Text>
          <Text style={styles.email}>puspa@gymcare.app</Text>
          <View style={styles.memberBadge}>
            <Ionicons name="star" size={12} color={COLORS.secondary} />
            <Text style={styles.memberText}>GymCare Premium</Text>
          </View>
        </View>

        {/* Stats Cards */}
        <Text style={styles.sectionTitle}>Ringkasan Statistik</Text>
        <View style={styles.statsRow}>
          {STATS.map((stat) => (
            <View key={stat.id} style={styles.statCard}>
              <Text style={styles.statIcon}>{stat.icon}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statUnit}>{stat.unit}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Preferences */}
        <Text style={styles.sectionTitle}>Preferensi & Target</Text>
        <View style={styles.prefsCard}>
          {PREFERENCES.map((pref, i) => (
            <View key={i} style={[styles.prefItem, i < PREFERENCES.length - 1 && styles.prefBorder]}>
              <View style={styles.prefLeft}>
                <View style={styles.prefIconBg}>
                  <Ionicons name={pref.icon} size={18} color={COLORS.secondary} />
                </View>
                <View>
                  <Text style={styles.prefLabel}>{pref.label}</Text>
                  <Text style={styles.prefValue}>{pref.value}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color={COLORS.lightGray} />
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
          <Ionicons name="log-out-outline" size={20} color={COLORS.primary} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },

  profileHeader: { alignItems: 'center', paddingVertical: 24 },
  avatarOuter: { position: 'relative', marginBottom: 14 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFE0E3',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.secondary,
  },
  avatarEmoji: { fontSize: 52 },
  editAvatarBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  name: { fontSize: 24, fontWeight: '800', color: COLORS.dark },
  email: { fontSize: 13, color: COLORS.gray, marginTop: 4, marginBottom: 10 },
  memberBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(241,90,36,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  memberText: { fontSize: 12, color: COLORS.secondary, fontWeight: '600' },

  sectionTitle: { fontSize: 17, fontWeight: '700', color: COLORS.dark, marginBottom: 12 },

  statsRow: { flexDirection: 'row', gap: 10, marginBottom: 24 },
  statCard: {
    flex: 1,
    backgroundColor: '#1A1A2D',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
  },
  statIcon: { fontSize: 24, marginBottom: 8 },
  statValue: { fontSize: 18, fontWeight: '800', color: COLORS.white },
  statUnit: { fontSize: 10, color: COLORS.secondary, fontWeight: '600', marginBottom: 4 },
  statLabel: { fontSize: 10, color: 'rgba(255,255,255,0.5)', textAlign: 'center' },

  prefsCard: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 28,
  },
  prefItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  prefBorder: { borderBottomWidth: 1, borderBottomColor: COLORS.lightGray },
  prefLeft: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  prefIconBg: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(241,90,36,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prefLabel: { fontSize: 12, color: COLORS.gray },
  prefValue: { fontSize: 14, fontWeight: '600', color: COLORS.dark },

  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    borderRadius: 25,
    paddingVertical: 14,
    backgroundColor: COLORS.white,
  },
  logoutText: { color: COLORS.primary, fontSize: 16, fontWeight: '700' },
});

export default ProfileScreen;
