import React from "react";
import { View } from "react-native";
import MediaListItem from "@/components/MediaListItem";
import mediaList from "@assets/data/mediaList.json";

export default function HomeScreen() {
  return (
    <View>
      <MediaListItem mediaItem={mediaList[0]} />
      <MediaListItem mediaItem={mediaList[1]} />
      <MediaListItem mediaItem={mediaList[2]} />
    </View>
  );
}
