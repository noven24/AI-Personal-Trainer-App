import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const COMMENTS = [
  {
    id: '1', user: 'Andi S.', avatar: '👨', time: '1 jam lalu',
    text: 'Mantap banget, aku juga sudah yang 50x! Keep going! 🔥',
    likes: 12,
    replies: [
      { id: 'r1', user: 'Rian D.', avatar: '🧑‍🦱', text: 'Terima kasih Andi! Kamu juga tetap semangat ya 💪', likes: 3 },
    ],
  },
  {
    id: '2', user: 'Dewi P.', avatar: '👩‍🦱', time: '45 menit lalu',
    text: 'Inspiratif sekali! Aku baru bisa 20x, masih jauh haha',
    likes: 8,
    replies: [],
  },
  {
    id: '3', user: 'Bimo R.', avatar: '👨‍🦲', time: '30 menit lalu',
    text: 'Progres is progress! Yang penting konsisten bro 🙌',
    likes: 15,
    replies: [
      { id: 'r2', user: 'Dewi P.', avatar: '👩‍🦱', text: 'Betul banget, makasih motivasinya! 😊', likes: 5 },
    ],
  },
];

const CommentDetailScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const post = route?.params?.post;
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(COMMENTS);

  const sendComment = () => {
    if (!newComment.trim()) return;
    const comment = {
      id: Date.now().toString(),
      user: 'Puspa',
      avatar: '👩',
      time: 'Baru saja',
      text: newComment.trim(),
      likes: 0,
      replies: [],
    };
    setComments((prev) => [comment, ...prev]);
    setNewComment('');
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentBlock}>
      <View style={styles.commentRow}>
        <View style={styles.avatar}>
          <Text style={{ fontSize: 20 }}>{item.avatar}</Text>
        </View>
        <View style={styles.commentContent}>
          <View style={styles.commentHeader}>
            <Text style={styles.commentUser}>{item.user}</Text>
            <Text style={styles.commentTime}>{item.time}</Text>
          </View>
          <Text style={styles.commentText}>{item.text}</Text>
          <View style={styles.commentActions}>
            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="heart-outline" size={16} color={COLORS.gray} />
              <Text style={styles.actionText}>{item.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="chatbubble-outline" size={16} color={COLORS.gray} />
              <Text style={styles.actionText}>Balas</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Nested Replies */}
      {item.replies?.map((reply) => (
        <View key={reply.id} style={styles.replyRow}>
          <View style={styles.replyLine} />
          <View style={styles.replyAvatar}>
            <Text style={{ fontSize: 16 }}>{reply.avatar}</Text>
          </View>
          <View style={styles.replyContent}>
            <Text style={styles.commentUser}>{reply.user}</Text>
            <Text style={styles.commentText}>{reply.text}</Text>
            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="heart-outline" size={14} color={COLORS.gray} />
              <Text style={styles.actionText}>{reply.likes}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: insets.top }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color={COLORS.dark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Komentar</Text>
        <View style={{ width: 32 }} />
      </View>

      {/* Original Post */}
      {post && (
        <View style={styles.originalPost}>
          <View style={styles.postAvatar}>
            <Text style={{ fontSize: 18 }}>{post.avatar}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.postUser}>{post.user}</Text>
            <Text style={styles.postContent} numberOfLines={2}>{post.content}</Text>
          </View>
        </View>
      )}

      {/* Comments List */}
      <FlatList
        data={comments}
        keyExtractor={(i) => i.id}
        renderItem={renderComment}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {/* Comment Input */}
      <View style={[styles.inputBar, { paddingBottom: insets.bottom + 8 }]}>
        <View style={styles.inputAvatar}>
          <Text style={{ fontSize: 16 }}>👩</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Tambahkan komentar..."
          placeholderTextColor={COLORS.gray}
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity
          style={[styles.sendBtn, newComment.trim() ? styles.sendBtnActive : null]}
          onPress={sendComment}
        >
          <Ionicons name="send" size={18} color={newComment.trim() ? COLORS.white : COLORS.gray} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  backBtn: { padding: 4 },
  headerTitle: { fontSize: 17, fontWeight: '700', color: COLORS.dark },
  originalPost: {
    flexDirection: 'row',
    gap: 10,
    padding: 16,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  postAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postUser: { fontSize: 13, fontWeight: '700', color: COLORS.dark },
  postContent: { fontSize: 12, color: COLORS.gray, marginTop: 2 },
  list: { padding: 16 },
  commentBlock: { marginBottom: 20 },
  commentRow: { flexDirection: 'row', gap: 10 },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentContent: { flex: 1 },
  commentHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  commentUser: { fontSize: 13, fontWeight: '700', color: COLORS.dark },
  commentTime: { fontSize: 11, color: COLORS.gray },
  commentText: { fontSize: 14, color: COLORS.dark, lineHeight: 21, marginBottom: 8 },
  commentActions: { flexDirection: 'row', gap: 16 },
  actionBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  actionText: { fontSize: 12, color: COLORS.gray, fontWeight: '500' },
  replyRow: { flexDirection: 'row', marginLeft: 50, marginTop: 10, gap: 8, alignItems: 'flex-start' },
  replyLine: {
    position: 'absolute',
    left: -18,
    top: -14,
    width: 1.5,
    height: '100%',
    backgroundColor: COLORS.lightGray,
  },
  replyAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  replyContent: { flex: 1 },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 10,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    gap: 10,
  },
  inputAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: COLORS.dark,
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnActive: { backgroundColor: COLORS.secondary },
});

export default CommentDetailScreen;
