import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Timer(props) {
  return (
    <View style={styles.timer}>
      <Text style={styles.text}>
        {("0" + Math.floor(props.time / 3600)).slice(-2)}:
      </Text>
      <Text style={styles.text}>
        {("0" + Math.floor((props.time / 60) % 60)).slice(-2)}:
      </Text>
      <Text style={styles.text}>
        {("0" + Math.floor(props.time % 60)).slice(-2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    flexDirection: "row",
    elevation: 2,
  },
  text: {
    color: "#f5f5f5",
    fontSize: 40,
    textAlign: "center",
  },
});
