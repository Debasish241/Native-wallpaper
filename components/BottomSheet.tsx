import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  useColorScheme,
  Pressable,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders

  const theme = useColorScheme() ?? "light";
  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["95%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <ThemedView style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={{
              uri: wallpaper.url,
            }}
          />
          <View style={styles.topbar}>
            <Ionicons
              name={"close"}
              size={24}
              color={theme == "light" ? Colors.light.icon : Colors.dark.text}
            />
            <View style={styles.topbarInner}>
              <Ionicons
                name={"heart"}
                size={24}
                color={theme == "light" ? Colors.light.icon : Colors.dark.text}
                style={{ paddingRight: 4 }}
              />
              <Ionicons
                name={"share"}
                size={24}
                color={theme == "light" ? Colors.light.icon : Colors.dark.text}
              />
            </View>
          </View>
          <ThemedView style={styles.textConatiner}>
            <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
          </ThemedView>
          <DownloadButton />
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton() {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={{
        backgroundColor: "black",
        padding: 10,
        marginHorizontal: 40,
        marginVertical: 20,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        borderColor: theme === "light" ? Colors.light.icon : Colors.dark.icon,
        borderWidth: 1,
      }}
    >
      <Ionicons
        name={"download"}
        size={24}
        color={theme == "light" ? Colors.light.icon : Colors.dark.icon}
        style={{ paddingRight: 4 }}
      />
      <Text
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "600",
        }}
      >
        Download
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "70%",
    borderRadius: 15,
  },
  topbar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  topbarInner: {
    display: "flex",
    flexDirection: "row",
  },
  textConatiner: {
    width: "100%",
  },
  text: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
  },
});
