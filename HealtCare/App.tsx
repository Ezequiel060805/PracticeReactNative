import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlimentacionScreen from "./screens/AlimentacionScreen";
import EjercicioScreen from "./screens/EjercicioScreen";
import MeditacionScreen from "./screens/MeditacionScreen";
import SuenoScreen from "./screens/SuenoScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Alimentacion">
        <Stack.Screen name="Alimentacion" component={AlimentacionScreen}/>
        <Stack.Screen name="Ejercicio" component={EjercicioScreen}/>
        <Stack.Screen name="Meditacion" component={MeditacionScreen}/>
        <Stack.Screen name="Sueno" component={SuenoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
