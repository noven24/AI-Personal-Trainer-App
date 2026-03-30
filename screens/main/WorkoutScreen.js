import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/colors';

const WorkoutScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filters = ['Semua', 'Cardio', 'Otot Perut', 'Otot Lengan'];

  const workoutList = [
    {
      id: 1,
      name: 'Squat Jump',
      duration: '10 Menit',
      calories: '150 kkal',
      level: 'Pemula',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=2000',
    },
    {
      id: 2,
      name: 'Push Up Challenge',
      duration: '5 Menit',
      calories: '80 kkal',
      level: 'Menengah',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=2000',
    },
    {
      id: 3,
      name: 'Plank Core',
      duration: '3 Menit',
      calories: '50 kkal',
      level: 'Sulit',
      image: 'https://images.unsplash.com/photo-1566241440091-acc16faf1614?auto=format&fit=crop&q=80&w=2000',
    },
  ];

  const handleStartWorkout = (workout) => {
    // Video Player removed as requested
    console.log('Video player feature removed.');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Latihan</Text>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* HERO BANNER */}
        <View style={styles.heroBanner}>
          <View style={styles.heroContent}>
            <Text style={styles.heroPreTitle}>PROGRAM BARU</Text>
            <Text style={styles.heroTitle}>Bakar Lemak 7 Hari</Text>
            <TouchableOpacity style={styles.heroBtn}>
              <Text style={styles.heroBtnText}>Gabung</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FILTERS */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filterScroll}
          contentContainerStyle={styles.filterContent}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <TouchableOpacity
                key={filter}
                style={[styles.filterBtn, isActive && styles.filterBtnActive]}
                onPress={() => setActiveFilter(filter)}
                activeOpacity={0.8}
              >
                <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
                  {filter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* WORKOUT LIST */}
        <View style={styles.listContainer}>
          <Text style={styles.sectionTitle}>Direkomendasikan</Text>

          {workoutList.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.workoutCard}
              activeOpacity={0.9}
              onPress={() => handleStartWorkout(item)}
            >
              <Image source={{ uri: item.image }} style={styles.workoutImage} />
              
              <View style={styles.workoutInfo}>
                <Text style={styles.workoutTitle}>{item.name}</Text>
                
                <View style={styles.statRow}>
                  <View style={styles.statItem}>
                    <Ionicons name="time-outline" size={14} color="#A0A0A0" />
                    <Text style={styles.statText}>{item.duration}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <MaterialCommunityIcons name="fire" size={14} color={COLORS.secondary} />
                    <Text style={styles.statTextCalories}>{item.calories}</Text>
                  </View>
                </View>

                <View style={styles.cardBottomRow}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.level}</Text>
                  </View>
                  <TouchableOpacity style={styles.startBtn} onPress={() => handleStartWorkout(item)}>
                    <Text style={styles.startBtnText}>Mulai</Text>
                    <Ionicons name="play" size={12} color="#FFFFFF" style={styles.startIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 60,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.primary, // Red
  },
  searchBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    paddingBottom: 20,
  },

  // HERO BANNER
  heroBanner: {
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 16,
    backgroundColor: '#000000',
    height: 160,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  heroContent: {
    padding: 24,
  },
  heroPreTitle: {
    color: COLORS.secondary, // Orange
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 4,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 16,
  },
  heroBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  heroBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  // FILTERS
  filterScroll: {
    marginBottom: 24,
  },
  filterContent: {
    paddingHorizontal: 20,
    gap: 12, // gap works in modern RN, fallback to margin if not
  },
  filterBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginRight: 10, // Backup for gap
  },
  filterBtnActive: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#707070',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },

  // WORKOUT LIST
  listContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  workoutCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  workoutImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
  },
  workoutInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 6,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  statText: {
    fontSize: 12,
    color: '#A0A0A0',
    marginLeft: 4,
  },
  statTextCalories: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '600',
    marginLeft: 4,
  },
  cardBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  badge: {
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 10,
    color: '#707070',
    fontWeight: '600',
  },
  startBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary, // Orange
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  startBtnText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '700',
    marginRight: 4,
  },
  startIcon: {
    marginTop: 1,
  },
});

export default WorkoutScreen;
