import { View, Text } from "react-native";
import React from "react";
import { MediaList } from "@/types/types";

type MediaListItemProps = {
  mediaItem: MediaList;
};

export default function MediaListItem({ mediaItem }: MediaListItemProps) {
  return (
    <View>
      <Text style={{ color: "white" }}>{mediaItem?.title}</Text>
    </View>
  );
}
