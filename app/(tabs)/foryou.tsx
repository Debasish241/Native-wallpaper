import { SplitView } from "@/components/SplitView";
import { ThemedSafeAreView } from "@/components/ThemedSafeAreaView";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import {
  useLibraryWallpapers,
  useLikedWallpapers,
  useSuggestedWallpapers,
  useWallpapers,
} from "@/hooks/useWallpapers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Tab = createMaterialTopTabNavigator();
export default function Foryou() {
  const theme = useColorScheme() ?? "light";
  return (
    // <SafeAreaView>
    //   <Link href={"/liked"}>
    //     <Text>Page 1</Text>
    //   </Link>
    //   <Link href={"/suggested"}>
    //     <Text>Page 2</Text>
    //   </Link>
    //   <Link href={"/library"}>
    //     <Text>Page 3</Text>
    //   </Link>
    //   <Text>for you</Text>
    // </SafeAreaView>

    <ThemedSafeAreView style={styles.container}>
      <Tab.Navigator
        style={{ flex: 1 }}
        screenOptions={{
          tabBarActiveTintColor: Colors[theme].tint,
          tabBarStyle: {
            backgroundColor: Colors[theme].background,
          },

          tabBarIndicatorStyle: {
            backgroundColor: Colors[theme].indicator,
            height: 5,
          },
        }}
      >
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Liked" component={LikedScreen} />
        <Tab.Screen name="Suggested" component={SuggestedScreen} />
      </Tab.Navigator>
    </ThemedSafeAreView>
  );
}

function LibraryScreen() {
  const wallpapers = useLibraryWallpapers();

  return (
    <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpapers} />
    </ThemedView>
  );
}
function LikedScreen() {
  const wallpapers = useLikedWallpapers();

  return (
    <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpapers} />
    </ThemedView>
  );
}
function SuggestedScreen() {
  const wallpapers = useSuggestedWallpapers();

  return (
    <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpapers} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//3.43
