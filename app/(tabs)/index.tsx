import { SplitView } from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { useCarousel } from "@/hooks/useCarousel";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { ThemedSafeAreView } from "@/components/ThemedSafeAreaView";

const TOPBAR_HEIGHT = 250;

export default function explore() {
  const wallpapers = useWallpapers();
  const width = Dimensions.get("window").width;
  const [yOffset, setScrollY] = useState(0);
  const carouselItems = useCarousel();

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            yOffset,
            [-TOPBAR_HEIGHT, 0, TOPBAR_HEIGHT],
            [1.5, 1, 1]
          ),
        },
      ],
    };
  });
  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        yOffset,
        [-TOPBAR_HEIGHT, TOPBAR_HEIGHT / 2, TOPBAR_HEIGHT],
        [1, 1, 0]
      ),
    };
  });

  return (
    <ThemedSafeAreView style={{ flex: 1 }}>
      <Animated.View
        style={[{ height: TOPBAR_HEIGHT - yOffset }, headerAnimatedStyle]}
      >
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
                <Animated.View style={textAnimatedStyle}>
                  <Text
                    style={[
                      {
                        color: "white",
                        paddingTop: TOPBAR_HEIGHT / 3,
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "600",
                      },
                    ]}
                  >
                    {carouselItems[index].title}
                  </Text>
                </Animated.View>
              </LinearGradient>
            </>
          )}
        />
      </Animated.View>
      <View style={{ borderRadius: 20 }}></View>
      {/* <Text>Hi there</Text> */}
      <SplitView
        onScroll={(yOffset) => {
          setScrollY(yOffset);
        }}
        wallpapers={wallpapers}
      />
    </ThemedSafeAreView>
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
