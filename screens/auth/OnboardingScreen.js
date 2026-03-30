// YOO GYZZZ I EDITTED THIS SECTION HHAAAA...
// just delete it if u done wth this

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import GymCareLogo from "../../components/GymCareLogo";

const { width } = Dimensions.get("window");

const OnboardingScreen = ({ navigation, route }) => {
  const onLogin = route?.params?.onLogin;

  const handleNext = () => {
    navigation.navigate("Login", { onLogin });
  };

  const handleSkip = () => {
    navigation.navigate("Login", { onLogin });
  };

  return (
    <View style={styles.container}>
      {/* ─── Upper section: Logo ─── */}
      <View style={styles.logoSection}>
        <GymCareLogo size={200} />
      </View>

      {/* ─── Middle: tagline ─── */}
      <Text style={styles.tagline}>HEALTHY IN EVERY SINGLE DAY</Text>

      {/* ─── Bottom section ─── */}
      <View style={styles.bottomSection}>
        {/* Pagination dots */}
        <View style={styles.dotsRow}>
          {/* Active dot — red pill */}
          <View style={styles.dotActive} />
          {/* Inactive dots — dark circles */}
          <View style={styles.dotInactive} />
          <View style={styles.dotInactive} />
        </View>

        {/* Next button */}
        <TouchableOpacity
          style={styles.btnNext}
          onPress={handleNext}
          activeOpacity={0.85}
        >
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>

        {/* Skip button */}
        <TouchableOpacity
          style={styles.btnSkip}
          onPress={handleSkip}
          activeOpacity={0.85}
        >
          <Text style={styles.btnText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 48,
  },

  // Logo sits in the upper ~60% of the screen
  logoSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  // Italic tagline text
  tagline: {
    fontSize: 13,
    fontStyle: "italic",
    color: "#7A7A7A",
    letterSpacing: 1,
    marginBottom: 20,
    textAlign: "center",
  },

  // Bottom area: dots + buttons
  bottomSection: {
    width: "100%",
    paddingHorizontal: 28,
    alignItems: "center",
    gap: 14,
  },

  // Pagination dots row
  dotsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  dotActive: {
    width: 28,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#E11E24",
  },
  dotInactive: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#1A1A1A",
  },

  // Buttons — both orange pill shape
  btnNext: {
    width: "100%",
    backgroundColor: "#F15A24",
    borderRadius: 30,
    paddingVertical: 17,
    alignItems: "center",
    shadowColor: "#F15A24",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  btnSkip: {
    width: "100%",
    backgroundColor: "#F15A24",
    borderRadius: 30,
    paddingVertical: 17,
    alignItems: "center",
    shadowColor: "#F15A24",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});

export default OnboardingScreen;
