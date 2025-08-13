import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import inter1 from "./Screens/inter1";
import inter2 from "./Screens/inter2";
import inter3 from "./Screens/inter3";
import inter4 from "./Screens/inter4";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="interfaz1">
        <Stack.Screen name="interfaz1" component={inter1}/>
        <Stack.Screen name="interfaz2" component={inter2}/>
        <Stack.Screen name="interfaz3" component={inter3}/>
        <Stack.Screen name="interfaz4" component={inter4}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
