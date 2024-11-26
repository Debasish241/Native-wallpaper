import { SplitView } from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { useCarousel } from "@/hooks/useCarousel";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";

const TOPBAR_HEIGHT = 250;

export default function explore() {
  const wallpapers = useWallpapers();
  const width = Dimensions.get("window").width;
  const [yOffset, setScrollY] = useState(0);
  const carouselItems = useCarousel();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View style={{ height: TOPBAR_HEIGHT - yOffset }}>
        <Carousel
          loop
          width={width}
          data={carouselItems}
          onSnapToItem={(index) => console.log(index)}
          renderItem={({ index }) => (
            <>
              <View
                style={{ flex: 1, borderWidth: 1, justifyContent: "center" }}
              >
                <Image
                  source={{ uri: carouselItems[index].image }}
                  style={{ height: TOPBAR_HEIGHT }}
                />
              </View>
              <LinearGradient
                colors={["transparent", "black"]}
                style={{
                  flex: 1,
                  position: "absolute",
                  zIndex: 10,
                  height: TOPBAR_HEIGHT / 2,
                  width: "100%",
                  bottom: 0,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    paddingTop: TOPBAR_HEIGHT / 3,
                    textAlign: "center",
                    fontSize: 30,
                    fontWeight: "600",
                  }}
                >
                  {carouselItems[index].title}
                </Text>
              </LinearGradient>
            </>
          )}
        />
      </Animated.View>
      {/* <Text>Hi there</Text> */}
      <SplitView
        onScroll={(yOffset) => {
          setScrollY(yOffset);
        }}
        wallpapers={wallpapers}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 4,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});
