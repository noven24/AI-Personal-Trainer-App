import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/colors';

const initialMessages = [
  {
    id: '1',
    text: 'Trainer, tolong kaki saya nyeri abis leg day kemarin tapi yang lebih sakit itu punggung bawah saya. Aman gk nih kalo saya mau Deadlift hari ini?',
    isUser: true,
  },
  {
    id: '2',
    text: 'baiklah kalo gitu kita ganti sesi latihan Deadlift hari ini dengan peregangan aktif dan mobilitas punggung biar besok kamu bisa fit lagi. Semangat ya latihan nya 🔥',
    isUser: false,
  },
  {
    id: '3',
    text: 'wih makasih banget loh 😭 jadi lebih semangat lagi nih buat latihan',
    isUser: true,
  },
  {
    id: '4',
    text: 'sama-sama 😊',
    isUser: false,
  },
];

const AITrainerScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');

  const renderMessage = (msg) => {
    const isUser = msg.isUser;
    return (
      <View
        key={msg.id}
        style={[
          styles.messageRow,
          isUser ? styles.messageRowUser : styles.messageRowAI,
        ]}
      >
        <View
          style={[
            styles.bubble,
            isUser ? styles.bubbleUser : styles.bubbleAI,
          ]}
        >
          <Text style={[styles.messageText, isUser ? styles.textUser : styles.textAI]}>
            {msg.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: insets.top }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Konsultasi AI Trainer</Text>
        <View style={{ width: 26 }} /> {/* placeholder to perfectly center title */}
      </View>

      {/* Chat Area */}
      <ScrollView
        contentContainerStyle={styles.chatContent}
        showsVerticalScrollIndicator={false}
      >
        {messages.map(renderMessage)}
      </ScrollView>

      {/* Input Area at the bottom */}
      <View style={[styles.inputContainer, { paddingBottom: insets.bottom || 24 }]}>
        <View style={styles.inputPill}>
          <TouchableOpacity style={styles.plusBtn} activeOpacity={0.7}>
            <Feather name="plus" size={24} color="#000" />
          </TouchableOpacity>
          
          <TextInput
            style={styles.textInput}
            placeholder="Ketik di sini..............."
            placeholderTextColor="#C4C4C4"
            value={inputText}
            onChangeText={setInputText}
          />
          
          <TouchableOpacity style={styles.galleryBtn} activeOpacity={0.7}>
            {/* Gallery icon */}
            <Ionicons name="images-outline" size={24} color="#000" />
          </TouchableOpacity>
          
          <View style={styles.divider} />
          
          <TouchableOpacity style={styles.sendBtn} activeOpacity={0.7}>
            <Ionicons name="send" size={16} color={COLORS.secondary} style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
  backBtn: {
    paddingVertical: 10,
    paddingRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  chatContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  messageRow: {
    marginBottom: 24,
    flexDirection: 'row',
  },
  messageRowUser: {
    justifyContent: 'flex-end',
  },
  messageRowAI: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '85%',
    paddingHorizontal: 20,
    paddingVertical: 16,
    // Add light shadow to both bubbles
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  bubbleUser: {
    backgroundColor: COLORS.secondary, // Orange '#F15A24'
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 0, // sharp corner at bottom right
    shadowColor: COLORS.secondary,
    shadowOpacity: 0.25,
  },
  bubbleAI: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 0, // sharp corner at bottom left
    shadowColor: '#000000',
    shadowOpacity: 0.1,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '500',
  },
  textUser: {
    color: '#FFFFFF',
  },
  textAI: {
    color: '#000000',
  },
  
  // Input Area Styles
  inputContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },
  inputPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 35,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 65,
  },
  plusBtn: {
    padding: 4,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',
    marginHorizontal: 12,
  },
  galleryBtn: {
    paddingRight: 12,
  },
  divider: {
    width: 2,
    height: 30,
    backgroundColor: '#000000',
    marginRight: 12,
  },
  sendBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendIcon: {
    marginLeft: 3, // Optically center the paper plane
    marginTop: 2,
  },
});

export default AITrainerScreen;
