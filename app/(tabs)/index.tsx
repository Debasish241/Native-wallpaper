import { DownloadPicture } from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SplitView } from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function explore() {
  const wallpapers = useWallpapers();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
            source={{
              uri: wallpapers[0]?.url ?? "",
            }}
          />
        }
      >
        <SplitView wallpapers={wallpapers} />
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // padding: 4,
    flex: 1,
    // width: "100%",
  },
  innerContainer: {
    flex: 1,
    padding: 4,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});
