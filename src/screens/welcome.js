import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

export default function App({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require("./assets/NutriSnap-logo.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.header}>
        <Text>NutriSnap</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.steps}>1. Snap a picture of your food</Text>
        <Text style={styles.steps}>
          2. NutriSnap recognizes the food and tracks calories, carbs, fats,
          protein
        </Text>
        <Text style={styles.steps}>
          3. The built-in Pedometer also tracks how many calories you burned by
          moving around
        </Text>
        <Text style={styles.steps}>
          4. Get notified when reaching your limits
        </Text>
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => {
            navigation.navigate("mainFlow");
          }}
          title="Start"
          color="grey"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E88B3C",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  button: {
    marginBottom: 300,
  },
  image: {
    flex: 1,
    width: 100,
    resizeMode: "contain",
  },
  header: {
    color: "white",
    fontSize: 40,
    marginTop: -100,
  },
  card: {
    alignItems: "center",
    color: "white",
    fontSize: 40,
    marginBottom: 50,
  },
  steps: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    paddingHorizontal: 80,
    paddingVertical: 20,
  },
});
