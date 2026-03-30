import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Ellipse, G } from 'react-native-svg';

/**
 * GymCareLogo — SVG recreation of the GymCare figure + barbell logo.
 * Props:
 *   size  — controls overall scale (default 180)
 */
const GymCareLogo = ({ size = 180 }) => {
  const scale = size / 180;

  return (
    <View style={{ alignItems: 'center' }}>
      {/* SVG Mark */}
      <Svg
        width={size}
        height={size * 0.72}
        viewBox="0 0 180 130"
      >
        {/* ─── Left dumbbell plate ─── */}
        <Path
          d="M10,42 Q8,38 12,35 L22,30 Q26,28 28,32 L34,50 Q36,54 32,56 L22,61 Q18,63 16,59 Z"
          fill="#E11E24"
        />
        {/* ─── Left bar segment ─── */}
        <Path
          d="M34,38 Q50,28 70,36 L68,48 Q50,40 36,50 Z"
          fill="#E11E24"
        />

        {/* ─── Right dumbbell plate ─── */}
        <Path
          d="M170,42 Q172,38 168,35 L158,30 Q154,28 152,32 L146,50 Q144,54 148,56 L158,61 Q162,63 164,59 Z"
          fill="#F15A24"
        />
        {/* ─── Right bar segment ─── */}
        <Path
          d="M146,38 Q130,28 110,36 L112,48 Q130,40 144,50 Z"
          fill="#F15A24"
        />

        {/* ─── Curved barbell bar (arc over head) ─── */}
        <Path
          d="M34,50 Q90,10 146,50 Q140,56 90,18 Q40,56 36,50 Z"
          fill="#1A1A1A"
        />

        {/* ─── Body / torso ─── */}
        {/* Head */}
        <Circle cx="90" cy="58" r="10" fill="#1A1A1A" />

        {/* Arms reaching up */}
        <Path
          d="M68,44 L82,56"
          stroke="#1A1A1A"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <Path
          d="M112,44 L98,56"
          stroke="#1A1A1A"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Torso */}
        <Path
          d="M83,66 Q90,72 97,66 L100,90 Q90,94 80,90 Z"
          fill="#1A1A1A"
        />

        {/* Left leg */}
        <Path
          d="M82,90 L72,118"
          stroke="#1A1A1A"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Right leg */}
        <Path
          d="M98,90 L108,118"
          stroke="#1A1A1A"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </Svg>

      {/* Text Mark */}
      <View style={styles.textMark}>
        <Text style={styles.gymText}>Gym</Text>
        <Text style={styles.careText}>Care</Text>
      </View>
      <Text style={styles.tagline}>STRENGTH | CARE | WELLNESS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textMark: {
    flexDirection: 'row',
    marginTop: 6,
  },
  gymText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#1A1A1A',
    letterSpacing: 0.5,
  },
  careText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#E11E24',
    letterSpacing: 0.5,
  },
  tagline: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7A7A7A',
    letterSpacing: 2,
    marginTop: 4,
  },
});

export default GymCareLogo;
