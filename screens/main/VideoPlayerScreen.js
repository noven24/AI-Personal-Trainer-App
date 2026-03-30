import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/colors';

const VideoPlayerScreen = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const workoutName = route?.params?.workoutName || 'Squat Jump';

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom || 20 }]}>
      {/* ─── HEADER ─── */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{workoutName}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* ─── VIDEO AREA ─── */}
      <View style={styles.videoContainer}>
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=2000' }} 
          style={styles.videoBackground}
          imageStyle={styles.videoImageStyle}
        >
          {/* Overlay Dimming */}
          <View style={styles.videoOverlay} />

          {/* Big Orange Play Triangle */}
          <View style={styles.playButtonWrapper}>
            <View style={styles.playTriangle} />
          </View>

          {/* Subtitle */}
          <Text style={styles.subtitleText}>
            Pastikan punggung tetap tegak dan{'\n'}
            mendarat dengan lembut menggunakan{'\n'}
            ujung kaki
          </Text>
        </ImageBackground>
      </View>

      {/* ─── PROGRESS BAR ROW ─── */}
      <View style={styles.progressRow}>
        <Text style={styles.timeText}>00:45</Text>
        
        <View style={styles.progressBarTrack}>
          {/* Filled Bar */}
          <View style={[styles.progressBarFill, { width: '50%' }]} />
          {/* Thumb */}
          <View style={styles.progressThumb} />
        </View>

        <Text style={styles.timeText}>01:30</Text>
      </View>

      {/* ─── BOTTOM CONTROLS ROW ─── */}
      <View style={styles.bottomRow}>
        
        {/* Left: CC, Volume, Fullscreen */}
        <View style={styles.leftControls}>
          <View style={styles.ccIconBox}>
            <Text style={styles.ccIconText}>CC</Text>
          </View>
          <Ionicons name="volume-high" size={28} color={COLORS.secondary} style={styles.iconSpaced} />
          <MaterialCommunityIcons name="fullscreen" size={32} color={COLORS.secondary} />
        </View>

        {/* Center: "Saya Bingung" Button */}
        <TouchableOpacity style={styles.sayaBingungBtn} activeOpacity={0.85}>
          <View style={styles.questionCircle}>
            <Text style={styles.questionMark}>?</Text>
          </View>
          <Text style={styles.sayaBingungText}>Saya Bingung</Text>
        </TouchableOpacity>

        {/* Right: Mini-Nav Row */}
        <View style={styles.miniNavContainer}>
          <Ionicons name="home-outline" size={22} color={COLORS.secondary} style={styles.navIcon} />
          
          <View style={styles.activeTabWrapper}>
            <View style={styles.activeTabBg} />
            <Ionicons name="speedometer-outline" size={24} color="#000000" style={styles.navIconActive} />
          </View>

          <Ionicons name="people-outline" size={22} color={COLORS.secondary} style={styles.navIcon} />
          <Ionicons name="person-outline" size={22} color={COLORS.secondary} style={styles.navIcon} />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 60,
  },
  backBtn: {
    width: 40,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary, // Red
  },
  headerRight: {
    width: 40,
  },
  videoContainer: {
    flex: 1,
    marginHorizontal: 0,
    marginBottom: 20,
  },
  videoBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoImageStyle: {
    resizeMode: 'cover',
  },
  videoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  playButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 60,
    borderRightWidth: 0,
    borderBottomWidth: 40,
    borderTopWidth: 40,
    borderLeftColor: COLORS.secondary, 
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    marginLeft: 10,
  },
  subtitleText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
    paddingHorizontal: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 6,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 28,
  },
  timeText: {
    color: '#A0A0A0',
    fontSize: 13,
    fontWeight: '500',
  },
  progressBarTrack: {
    flex: 1,
    height: 10,
    backgroundColor: '#EEEEEE',
    marginHorizontal: 12,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarFill: {
    height: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  progressThumb: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginLeft: -9,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  leftControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ccIconBox: {
    borderWidth: 2,
    borderColor: COLORS.secondary,
    borderRadius: 6,
    paddingHorizontal: 2,
    paddingVertical: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  ccIconText: {
    color: COLORS.secondary,
    fontSize: 12,
    fontWeight: '800',
  },
  iconSpaced: {
    marginRight: 10,
  },
  sayaBingungBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  questionCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  questionMark: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  sayaBingungText: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  miniNavContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 6,
    height: 48,
  },
  navIcon: {
    marginHorizontal: 8,
  },
  activeTabWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    position: 'relative',
    top: -10,
  },
  activeTabBg: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.secondary,
    top: -8,
  },
  navIconActive: {
    zIndex: 1,
  },
});

export default VideoPlayerScreen;
