import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
  return (
    <SafeAreaView>
      <Text>explore</Text>
      <Link href={"/accountinfo"}>
        <Text>Accountinfo</Text>
      </Link>
    </SafeAreaView>
  );
}
