import React, { useState, useEffect } from "react";
import { Pressable, View, TouchableHighlight, Text } from "react-native";
import { Icon } from "react-native-elements";
import Timer from "./Timer";

function Item(props) {
  return (
    <View
      style={{
        justifyContent: "center",
        borderRadius: 20,
        padding: 15,
        backgroundColor: "#3b3b3b",
        margin: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "#8D9699", fontSize: 12 }}>{props.title}</Text>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            {new Date(props.dataStart).toLocaleString()}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            {new Date(props.dataFinish).toLocaleString()}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            props.onDelCard(props.card);
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "700",
            }}
          >
            <Timer time={props.time} />
          </Text>
        </Pressable>
      </View>

    </View>
  );
}

export default Item;
