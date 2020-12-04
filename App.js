import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CounterText from "./components/CounterText";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function renderEncouragingText() {
    if ((count) => 10) {
      return "Keep going!";
    } else return "Click more!";
  }

  return (
    <View style={styles.container}>
      <CounterText color="lightgrey" fontSize={10}>
        {count}
      </CounterText>
      <CounterText color="lightblue" fontSize={30}>
        {count}
      </CounterText>
      <CounterText color="blue" fontSize={60}>
        {count}
      </CounterText>
      <CounterText color="navy" fontSize={90}>
        {count}
      </CounterText>

      <CounterText style={{ fontSize: 60, color: "blue" }}></CounterText>

      <Text style={{ fontSize: 80, fontWeight: "bold" }}>{count}</Text>

      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}> Press me! </Text>
      </TouchableOpacity>
      <Text style={styles.encouragingText}>{renderEncouragingText()}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },

  encouragingText: {
    marginTop: 50,
    color: "#888",
  },
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    justifyContent: "center",
  },
});
