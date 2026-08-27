import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const SERVICES = [
  {
    title: "Book an Appointment",
    description: "Schedule a visit with a local clinic or provider.",
  },
  {
    title: "My Health Records",
    description: "View your visit history, prescriptions, and test results.",
  },
  {
    title: "Find a Clinic",
    description: "Locate nearby health centers across the Pacific islands.",
  },
  {
    title: "Talk to a Nurse",
    description: "Get quick health advice through chat or a phone call.",
  },
];

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.eyebrow}>PACIFIKA HEALTH</Text>
          <Text style={styles.title}>Talofa, welcome back</Text>
          <Text style={styles.subtitle}>
            Your health, connected across the Pacific.
          </Text>
        </View>

        <View style={styles.grid}>
          {SERVICES.map((service) => (
            <View key={service.title} style={styles.card}>
              <Text style={styles.cardTitle}>{service.title}</Text>
              <Text style={styles.cardDescription}>{service.description}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5FAF9",
  },
  content: {
    padding: 24,
    gap: 24,
  },
  header: {
    gap: 6,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.5,
    color: "#0F766E",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0B1F1C",
  },
  subtitle: {
    fontSize: 15,
    color: "#4B5A57",
  },
  grid: {
    gap: 14,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    gap: 6,
    borderWidth: 1,
    borderColor: "#E3EDEA",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0B1F1C",
  },
  cardDescription: {
    fontSize: 13,
    color: "#5B6B67",
  },
});
