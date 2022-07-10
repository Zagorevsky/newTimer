import { useState } from "react";
import { StyleSheet, Alert, View, TextInput, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import Timer from "./Timer";

export default function RecordingTime(props) {
  const [title, setTitle] = useState("New time");

  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        {new Date(props.dataStart).toDateString()}
      </Text>
      <Timer time={props.timeRecording} />
      <TextInput
        onChangeText={setTitle}
        autoFocus
        style={styles.input}
        value={title}
        placeholder="New time"
      />
      <Button
        onPress={() => {
          props.addData(title, props.dataStart, props.dataFinish, props.timeRecording);
          props.setOnFormRecording(false)
        }}
        title="Save"
        buttonStyle={styles.buttons}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  buttons: {
    margin: 20,
    width: 200,
  },
  view: {
    alignItems: "center",
  },
  text: {
    color: "#f5f5f5",
    fontSize: 20,
    textAlign: "center",
  },
});
