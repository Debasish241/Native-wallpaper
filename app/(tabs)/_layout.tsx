// import { Link, Slot } from "expo-router";
// import { Button, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Layout() {
//   return (
//     <SafeAreaView>
//       <View style={{ height: "90%" }}>
//         <Slot />
//       </View>
//       <View style={{ backgroundColor: "red" }}>
//         <Link href={"/explore"}>
//           <Text>explore page</Text>
//         </Link>
//         <Link href={"/"}>
//           <Text>for you page</Text>
//         </Link>
//         <Link href={"/account"}>
//           <Text>account page</Text>
//         </Link>
//       </View>
//     </SafeAreaView>
//   );
// }

import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const theme = useColorScheme() ?? "light";
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].tint,
        headerShown: false,
        tabBarStyle: { backgroundColor: Colors[theme].background },
      }}
    >
      <Tabs.Screen
        name="foryou"
        options={{
          title: "For You",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="feed" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
