import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNav from "./src/AppNav";
import { AuthProvider } from "./context/authContext";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNav />
      </NavigationContainer>
    </AuthProvider>
  );
}
