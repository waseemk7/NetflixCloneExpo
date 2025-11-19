import React from "react";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";

export default function RootLayout() {
  const myTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "white",
    },
  };

  return (
    <ThemeProvider value={myTheme}>
      <PaperProvider>
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: "black" },
            headerShown: false,
          }}
        >
          <Stack.Screen name="mediaDetails/[id]" />
        </Stack>
      </PaperProvider>
    </ThemeProvider>
  );
}
