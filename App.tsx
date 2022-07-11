import React, { useCallback, useMemo } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import CardTimeContext, { CardTime } from "./app/models/CardTime";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreens';
import colors from "./app/styles/colors";
import Main from "./app/screens/MainScreen";

const { useRealm, useQuery, RealmProvider } = CardTimeContext;
const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

function AppWrapper() {
  if (!RealmProvider) {
    return null;
  }
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
}

export default AppWrapper;
