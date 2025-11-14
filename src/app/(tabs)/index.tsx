import React from "react";
import { FlatList, View } from "react-native";
import MediaListItem from "@/components/MediaListItem";
import mediaList from "@assets/data/mediaList.json";

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={mediaList}
        renderItem={({ item }) => <MediaListItem mediaItem={item} />}
      />
    </View>
  );
}
