import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

export default function ControlButtons(props) {
  const StartButton = (
    <Button onPress={props.handleStart} title="Start" buttonStyle={styles.buttons} />
  );
  const ActiveButtons = (
    <>
      <Button
        onPress={props.handlePauseResume}
        title={props.isPaused ? "Resume" : "Pause"}
        buttonStyle={styles.buttons}
      />
      <Button
        onPress={props.handleReset}
        title="Finish"
        buttonStyle={styles.buttons}
      />
    </>
  );
  return (
      <View style={styles.blockButtons}>
        {props.active ? ActiveButtons : StartButton}
      </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    margin: 10,
    width: 200,
  },
  blockButtons: {
    flex:1,
    elevation:2,
  },
});
