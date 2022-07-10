import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  StyleSheet,
  View,
  Alert,
} from "react-native";
import Timer from "../components/Timer";
import ControlButtons from "../components/ControlButtons";
import ModalScreen from "./ModalScreen";
import CardTimeContext, { CardTime } from "../models/CardTime";

const { useRealm, useQuery, RealmProvider } = CardTimeContext;

function MainScreen() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [timeRecording, setTimeRecording] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataStart, setDataStart] = useState(0);
  const [dataFinish, setDataFinish] = useState(0);
  const [cardTime, setCardTime] = useState([]);
  const [onFormRecording, setOnFormRecording] = useState(false);

  const realm = useRealm();
  const result = useQuery(CardTime);

  const cardsTime = useMemo(() => result.sorted("dataStart"), [result]);

  const handleAddCardTime = useCallback(
    (title, dataStart, dataFinish, timeRecording) => {
      if (!title) {
        return;
      }
      realm.write(() => {
        realm.create("CardTime", CardTime.generate(title, dataStart, dataFinish, timeRecording));
      });
    },
    [realm]
  );

  const handleDeleteCardTime = useCallback(
    (card) => {
      realm.write(() => {
        realm.delete(card);
      });
    },
    [realm]
  );


  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setDataStart(Date.now());
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setOnFormRecording(true);
    setModalVisible(true);
    setTimeRecording(time);
    setDataFinish(Date.now());
    setIsActive(false);
    setTime(0);
  };

  const createTwoButtonAlert = (card) =>
    Alert.alert("Delete a card", "Please confirm your action", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => handleDeleteCardTime(card) },
    ]);

  return (
    <View style={styles.centeredView}>
      <ModalScreen
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        timeRecording={timeRecording}
        dataStart={dataStart}
        dataFinish={dataFinish}
        addData={handleAddCardTime}
        cardTime={cardsTime}
        setOnFormRecording={setOnFormRecording}
        onFormRecording={onFormRecording}
        onDelCard={createTwoButtonAlert}
      />
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0c1b",
  },
  backgroundVideo: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
  },
});

export default MainScreen;
