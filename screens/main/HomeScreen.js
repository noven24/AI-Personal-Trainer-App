import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/colors';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const handleWorkout = () => {
    navigation.navigate('Latihan');
  };

  const handleAITrainer = () => {
    navigation.navigate('AITrainer');
  };

  const handleCommunity = () => {
    navigation.navigate('GymCommunity');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ─── HEADER ─── */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.greetingText}>👋 Halo!</Text>
            <Text style={styles.nameText}>Puspa</Text>
          </View>
          <View style={styles.profileContainer}>
            <Ionicons name="person-outline" size={32} color="#000" />
            <View style={styles.notificationBadge}>
              <Ionicons name="notifications" size={14} color="#000" />
            </View>
          </View>
        </View>

        {/* ─── PROGRESS CARD ─── */}
        <View style={styles.progressCard}>
          <View style={styles.progressCardHeader}>
            <View>
              <Text style={styles.progressTitle}>Progres Minggu Ini</Text>
              <Text style={styles.progressSubtitle}>3 dari 5 latihan tercapai</Text>
            </View>
            <Text style={styles.progressPercentage}>64%</Text>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarTrack}>
            <LinearGradient
              colors={['#E11E24', '#F15A24']} // Red to Orange
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.progressBarFill, { width: '64%' }]}
            />
          </View>

          {/* Days */}
          <View style={styles.daysRow}>
            {/* MIN (Active) */}
            <View style={styles.dayCol}>
              <Text style={[styles.dayText, styles.dayTextActive]}>MIN</Text>
              <View style={[styles.dayDot, styles.dayDotActive]} />
            </View>
            {/* SEN */}
            <View style={styles.dayCol}>
              <Text style={styles.dayText}>SEN</Text>
              <View style={styles.dayDot} />
            </View>
            {/* SEL (Active) */}
            <View style={styles.dayCol}>
              <Text style={[styles.dayText, styles.dayTextActive]}>SEL</Text>
              <View style={[styles.dayDot, styles.dayDotActive]} />
            </View>
            {/* RAB (Active) */}
            <View style={styles.dayCol}>
              <Text style={[styles.dayText, styles.dayTextActive]}>RAB</Text>
              <View style={[styles.dayDot, styles.dayDotActive]} />
            </View>
            {/* KAM */}
            <View style={styles.dayCol}>
              <Text style={styles.dayText}>KAM</Text>
              <View style={styles.dayDot} />
            </View>
            {/* JUM */}
            <View style={styles.dayCol}>
              <Text style={styles.dayText}>JUM</Text>
              <View style={styles.dayDot} />
            </View>
            {/* SAB */}
            <View style={styles.dayCol}>
              <Text style={[styles.dayText, styles.dayTextActive]}>SAB</Text>
              <View style={styles.dayDot} />
            </View>
          </View>
        </View>

        {/* ─── ACTION BUTTONS ─── */}
        <TouchableOpacity style={styles.mainActionBtn} onPress={handleWorkout} activeOpacity={0.85}>
          <Ionicons name="play" size={24} color="#000" />
          <Text style={styles.mainActionText}>Latihan Hari Ini</Text>
          <Ionicons name="chevron-forward" size={24} color="#000" style={styles.mainActionArrow} />
        </TouchableOpacity>

        <View style={styles.subActionsRow}>
          <TouchableOpacity style={styles.subActionBox} onPress={handleAITrainer} activeOpacity={0.85}>
            <MaterialCommunityIcons name="message-text" size={28} color={COLORS.secondary} style={styles.subActionIcon} />
            <Text style={styles.subActionText}>Konsultasi AI Trainer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.subActionBox} onPress={handleCommunity} activeOpacity={0.85}>
            <Ionicons name="people" size={28} color={COLORS.secondary} style={styles.subActionIcon} />
            <Text style={styles.subActionText}>Gabung Komunitas</Text>
          </TouchableOpacity>
        </View>

        {/* ─── AKTIVITAS TERAKHIR ─── */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Aktivitas Terakhir</Text>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.activityIconBox}>
            <MaterialCommunityIcons name="fire" size={32} color={COLORS.secondary} />
          </View>
          <View style={styles.activityMiddle}>
            <Text style={styles.activityTitle}>Lari pagi</Text>
            <Text style={styles.activitySubtitle}>Kemarin, 8:30</Text>
          </View>
          <View style={styles.activityRight}>
            <Text style={styles.activityStatTop}>3,2 Km</Text>
            <Text style={styles.activityStatBottom}>320 kkal</Text>
          </View>
        </View>

        {/* ─── EDUKASI & TIPS ─── */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Edukasi & Tips</Text>
        </View>

        <View style={styles.articleRowWrapper}>
          <TouchableOpacity style={styles.articleCard} activeOpacity={0.9}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop' }}
              style={styles.articleImage}
            />
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>Tips olahraga aman untuk sendi agar tetap aktif</Text>
              <Text style={styles.articleDesc} numberOfLines={3}>
                Latihan penguatan otot sekitar lutut sangat krusial untuk mencegah cedera jangka panjang.
              </Text>
            </View>
          </TouchableOpacity>
          <Ionicons name="chevron-forward" size={20} color="#000" style={styles.articleArrow} />
        </View>

        {/* Dots */}
        <View style={styles.paginationDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Bottom Padding for Scroll */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  
  // HEADER
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greetingText: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 2,
  },
  nameText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
  },
  profileContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -6,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 2,
  },

  // PROGRESS CARD
  progressCard: {
    backgroundColor: '#000000',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  progressCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  progressSubtitle: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  progressPercentage: {
    color: COLORS.secondary, // Orange
    fontSize: 32,
    fontWeight: '700',
  },
  progressBarTrack: {
    height: 10,
    backgroundColor: '#333333', // Dark gray
    borderRadius: 5,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayCol: {
    alignItems: 'center',
  },
  dayText: {
    color: '#A0A0A0',
    fontSize: 10,
    fontWeight: '700',
    marginBottom: 6,
  },
  dayTextActive: {
    color: '#FFFFFF',
  },
  dayDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#333333',
  },
  dayDotActive: {
    backgroundColor: COLORS.primary, // Red dot
  },

  // ACTION BUTTONS
  mainActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary, // Orange
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  mainActionText: {
    color: '#FFFFFF', // Putih seperti di gambar (wait, di gambar Latihan Hari Ini putih kan? Ya, tulisannya putih, ikon play hitam, ikon chevron hitam. Actually, the play icon is black, chevron is black, text is white. Let's make text white)
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 16,
    flex: 1,
  },
  mainActionArrow: {
    opacity: 0.8,
  },
  subActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  subActionBox: {
    backgroundColor: '#000000',
    borderRadius: 16,
    padding: 20,
    width: '48%',
    justifyContent: 'center',
  },
  subActionIcon: {
    marginBottom: 12,
  },
  subActionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  // AKTIVITAS TERAKHIR
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  activityIconBox: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityMiddle: {
    flex: 1,
    marginLeft: 8,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  activitySubtitle: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  activityRight: {
    alignItems: 'flex-end',
  },
  activityStatTop: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  activityStatBottom: {
    fontSize: 12,
    color: '#A0A0A0',
  },

  // EDUKASI & TIPS
  articleRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  articleCard: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  articleImage: {
    width: 120, // fixed width for image on left
    height: '100%',
  },
  articleContent: {
    flex: 1,
    padding: 12,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 6,
    lineHeight: 18,
  },
  articleDesc: {
    fontSize: 11,
    color: '#A0A0A0',
    lineHeight: 16,
  },
  articleArrow: {
    marginLeft: 10,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D9D9D9',
  },
  dotActive: {
    backgroundColor: '#000000',
  },
});

export default HomeScreen;
