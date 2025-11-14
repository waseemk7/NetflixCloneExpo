import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function MediaDetails() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={{ color: "white" }}>Media Id: {id}</Text>
    </View>
  );
}
