import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

// ---- GymConnect Sub-tab ----
const GYMS = [
  { id: '1', name: 'FitZone Premium', address: 'Jl. Sudirman No.45', dist: '0.8 km', rating: 4.8, tag: 'Terdekat', emoji: '🏟️' },
  { id: '2', name: 'Lady Fitness Studio', address: 'Jl. Gatot Subroto 12', dist: '1.2 km', rating: 4.6, tag: 'Khusus Wanita', emoji: '💃' },
  { id: '3', name: 'GoldGym Pusat', address: 'Jl. Thamrin 88', dist: '2.1 km', rating: 4.9, tag: 'Populer', emoji: '🏋️' },
  { id: '4', name: 'CrossFit Arena', address: 'Jl. Rasuna Said 5', dist: '3.0 km', rating: 4.5, tag: 'HIIT', emoji: '⚡' },
];

const GymConnectTab = () => (
  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16 }}>
    {/* Map Placeholder */}
    <View style={gymStyles.mapPlaceholder}>
      <Text style={gymStyles.mapEmoji}>🗺️</Text>
      <Text style={gymStyles.mapText}>Peta Gym Terdekat</Text>
      <Text style={gymStyles.mapSub}>Tap untuk eksplorasi gym di sekitar kamu</Text>
    </View>

    {/* Filters */}
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={gymStyles.filters}>
      {['Terdekat', 'Khusus Wanita', 'Populer', 'HIIT', '24 Jam'].map((f) => (
        <TouchableOpacity key={f} style={gymStyles.filterChip}>
          <Text style={gymStyles.filterText}>{f}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    <Text style={gymStyles.nearbyTitle}>Gym Terdekat</Text>
    {GYMS.map((gym) => (
      <TouchableOpacity key={gym.id} style={gymStyles.gymCard}>
        <View style={gymStyles.gymIcon}>
          <Text style={{ fontSize: 28 }}>{gym.emoji}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={gymStyles.gymName}>{gym.name}</Text>
          <Text style={gymStyles.gymAddress}>{gym.address}</Text>
          <View style={gymStyles.gymMeta}>
            <Ionicons name="location-outline" size={12} color={COLORS.secondary} />
            <Text style={gymStyles.gymDist}>{gym.dist}</Text>
            <Ionicons name="star" size={12} color="#FFD700" style={{ marginLeft: 8 }} />
            <Text style={gymStyles.gymRating}>{gym.rating}</Text>
          </View>
        </View>
        <View style={gymStyles.gymTag}>
          <Text style={gymStyles.gymTagText}>{gym.tag}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const gymStyles = StyleSheet.create({
  mapPlaceholder: {
    height: 170,
    backgroundColor: '#E8F0FE',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  mapEmoji: { fontSize: 46, marginBottom: 8 },
  mapText: { fontSize: 16, fontWeight: '700', color: '#1A1A1A' },
  mapSub: { fontSize: 12, color: COLORS.gray, marginTop: 4 },
  filters: { paddingBottom: 12, gap: 8 },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.card,
    borderWidth: 1.5,
    borderColor: COLORS.lightGray,
  },
  filterText: { fontSize: 12, fontWeight: '600', color: COLORS.dark },
  nearbyTitle: { fontSize: 16, fontWeight: '700', color: COLORS.dark, marginBottom: 10 },
  gymCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    gap: 12,
  },
  gymIcon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: 'rgba(241,90,36,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gymName: { fontSize: 14, fontWeight: '700', color: COLORS.dark },
  gymAddress: { fontSize: 12, color: COLORS.gray, marginVertical: 2 },
  gymMeta: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  gymDist: { fontSize: 11, color: COLORS.secondary, fontWeight: '600' },
  gymRating: { fontSize: 11, color: COLORS.dark, fontWeight: '600' },
  gymTag: {
    backgroundColor: 'rgba(241,90,36,0.12)',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  gymTagText: { fontSize: 10, color: COLORS.secondary, fontWeight: '600' },
});

// ---- Community Sub-tab ----
const POSTS = [
  {
    id: '1', user: 'Rian D.', avatar: '🧑‍🦱', time: '2 jam lalu',
    content: 'Hari ini akhirnya berhasil push-up 50x nonstop! Tidak ada yang tidak mungkin kalau kita disiplin 💪🔥',
    likes: 128, comments: 24, shares: 12,
  },
  {
    id: '2', user: 'Sari M.', avatar: '👩', time: '5 jam lalu',
    content: 'Ladies, jangan lewatkan yoga morning challenge! Sudah minggu ke-3 dan badan sudah lebih fleksibel ✨🧘‍♀️',
    likes: 87, comments: 31, shares: 8,
  },
  {
    id: '3', user: 'Budi K.', avatar: '👨‍🦲', time: '1 hari lalu',
    content: 'Tips nutrisi: Konsumsi protein 30 menit setelah workout untuk pemulihan otot yang optimal 🥗💊',
    likes: 214, comments: 45, shares: 67,
  },
];

const CommunityTab = ({ navigation }) => (
  <FlatList
    data={POSTS}
    keyExtractor={(i) => i.id}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 16 }}
    renderItem={({ item }) => (
      <View style={commStyles.postCard}>
        <View style={commStyles.postHeader}>
          <View style={commStyles.avatar}>
            <Text style={{ fontSize: 22 }}>{item.avatar}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={commStyles.postUser}>{item.user}</Text>
            <Text style={commStyles.postTime}>{item.time}</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={18} color={COLORS.gray} />
          </TouchableOpacity>
        </View>
        <Text style={commStyles.postContent}>{item.content}</Text>
        <View style={commStyles.postActions}>
          <TouchableOpacity style={commStyles.actionBtn}>
            <Ionicons name="heart-outline" size={18} color={COLORS.gray} />
            <Text style={commStyles.actionText}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={commStyles.actionBtn}
            onPress={() => navigation.navigate('CommentDetail', { post: item })}
          >
            <Ionicons name="chatbubble-outline" size={18} color={COLORS.gray} />
            <Text style={commStyles.actionText}>{item.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={commStyles.actionBtn}>
            <Ionicons name="share-outline" size={18} color={COLORS.gray} />
            <Text style={commStyles.actionText}>{item.shares}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )}
  />
);

const commStyles = StyleSheet.create({
  postCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginBottom: 12,
    padding: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  postHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, gap: 10 },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postUser: { fontSize: 14, fontWeight: '700', color: COLORS.dark },
  postTime: { fontSize: 11, color: COLORS.gray, marginTop: 1 },
  postContent: { fontSize: 14, color: COLORS.dark, lineHeight: 21, marginBottom: 14 },
  postActions: { flexDirection: 'row', gap: 20, borderTopWidth: 1, borderTopColor: COLORS.lightGray, paddingTop: 12 },
  actionBtn: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  actionText: { fontSize: 13, color: COLORS.gray, fontWeight: '500' },
});

// ---- Main GymCommunity Screen ----
const GymCommunityScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('GymConnect');

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Gym & Komunitas</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="add-circle-outline" size={26} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>

      {/* Top Tabs */}
      <View style={styles.tabRow}>
        {['GymConnect', 'Komunitas'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <View style={{ flex: 1 }}>
        {activeTab === 'GymConnect' ? <GymConnectTab /> : <CommunityTab navigation={navigation} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: { fontSize: 22, fontWeight: '800', color: COLORS.dark },
  headerIcon: { padding: 4 },
  tabRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  tab: { flex: 1, paddingVertical: 12, alignItems: 'center' },
  tabActive: { borderBottomWidth: 3, borderBottomColor: COLORS.secondary },
  tabText: { fontSize: 15, fontWeight: '600', color: COLORS.gray },
  tabTextActive: { color: COLORS.secondary },
});

export default GymCommunityScreen;
