import { DownloadPicture } from "@/components/BottomSheet";
import { useWallpapers } from "@/hooks/useWallpapers";
import { Slot, Stack } from "expo-router";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const wallpapers = useWallpapers();
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen
          name="accountinfo"
          options={{
            headerShown: true,
            headerTitle: "Account info",
            headerBackTitle: "Go Back",
          }}
        /> */}
      </Stack>
      {/* <View style={{ position: "static", height: "100%", width: "100%" }}>
        <DownloadPicture wallpaper={wallpapers[0]} onClose={() => {}} />
      </View> */}
    </GestureHandlerRootView>
  );
}
