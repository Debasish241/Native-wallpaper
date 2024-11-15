import { DownloadPicture } from "@/components/BottomSheet";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
  const [pictureopen, setPictureopen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>account</Text>
        <Button
          title="Open Bottom Sheet"
          onPress={() => {
            setPictureopen(true);
          }}
        ></Button>
        {pictureopen && (
          <DownloadPicture onClose={() => setPictureopen(false)} />
        )}
      </View>
    </SafeAreaView>
  );
}
