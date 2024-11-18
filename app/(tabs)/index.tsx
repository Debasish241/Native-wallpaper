

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
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
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/3z31mvclQ_iNp1Oo3EEkMw",
            }}
          />
        }
      >
        <Text>Explore Page</Text>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}
