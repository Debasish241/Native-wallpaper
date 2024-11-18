import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
const Tab = createMaterialTopTabNavigator();
export default function Foryou() {
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

    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: {
          backgroundColor: "blue",
        },
      }}
    >
      <Tab.Screen
        name="Library"
        component={HomeScreen}
        options={{ tabBarLabel: "Library" }}
      />
      <Tab.Screen
        name="Liked"
        component={SettingScreen}
        options={{ tabBarLabel: "Liked" }}
      />
      <Tab.Screen
        name="Suggested"
        component={SettingScreen}
        options={{ tabBarLabel: "Suggested" }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
function SettingScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}
