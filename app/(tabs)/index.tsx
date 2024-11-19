import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/3z31mvclQ_iNp1Oo3EEkMw",
            }}
          />
        }
      >
        <View style={styles.container}>
          <FlatList data={DATA} renderItem={({item})}/>
          <View style={styles.innerContainer}>
            {wallpapers.map((w: Wallpaper) => (
              <ImageCard wallpaper={w} />
            ))}
          </View>
          <View style={styles.container}>
            {wallpapers.map((w: Wallpaper) => (
              <ImageCard wallpaper={w} />
            ))}
          </View>
        </View>
      </ParallaxScrollView>
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
    padding: 20,
  },
});
