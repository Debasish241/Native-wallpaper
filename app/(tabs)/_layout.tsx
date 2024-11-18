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

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="foryou"
        options={{
          title: "For You",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
