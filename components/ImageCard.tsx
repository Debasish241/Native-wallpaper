import { Image, StyleSheet, View } from "react-native";
import { Wallpaper } from "@/hooks/useWallpapers";
export function ImageCard() {
  return (
    <View>
      <Image src={{ uri: Wallpaper.uri }} style={styles.image} />
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
  },
});
