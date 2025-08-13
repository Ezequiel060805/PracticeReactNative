import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LineData from "./Screens/LineData";
import PaiData from "./Screens/PaiData";
import ProgressData from "./Screens/ProgresData";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Data">
        <Stack.Screen name="Data" component={LineData}/>
        <Stack.Screen name="PaiData" component={PaiData}/>
        <Stack.Screen name="ProgressData" component={ProgressData}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
