import React, { useState } from "react";
import { Modal, StyleSheet, Pressable, View, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import Item from "../components/Item";
import FormRecordingTime from "../components/FormRecordingTime";

const ModalScreen = (props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <Pressable
              onPress={() => {
                props.setModalVisible(false);
              }}
            >
              <Icon name="caret-down" type="fontisto" color="#3b3b3b" />
            </Pressable>
            {props.onFormRecording ? (
              <FormRecordingTime
                timeRecording={props.timeRecording}
                setModalVisible={props.setModalVisible}
                dataStart={props.dataStart}
                dataFinish={props.dataFinish}
                addData={props.addData}
                setOnFormRecording={props.setOnFormRecording}
              />
            ) : (
              <></>
            )}
            <ScrollView style={styles.scrollView}>
              {props.cardTime.map((card) => (
                <View key={card._id}>
                  <Item
                    dataStart={card.dataStart}
                    dataFinish={card.dataFinish}
                    title={card.title}
                    time={card.time}
                    card={card}
                    onDelCard={props.onDelCard}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#2f2f2f",
    borderRadius: 20,
    height: "90%",
    width: "100%",
    elevation: 5,
    position: "relative",
  },
  contentContainer: {},
  text: {
    color: "#f5f5f5",
    fontSize: 30,
    textAlign: "center",
  },
});

export default ModalScreen;
