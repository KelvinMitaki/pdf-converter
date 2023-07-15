import React from "react";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { PDFScreen } from "./src/screens/PDFScreen";
import { ConvertScreen } from "./src/screens/ConvertScreen";
import { TabNavigator } from "./src/components/TabNavigator";

export default function App() {
  const [uri, setURI] = React.useState<string | null>(null);

  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar style="auto" />
        <TabNavigator
          initialRouteName="Home"
          screens={[
            {
              name: "Home",
              iconName: "home",
              screen: <HomeScreen uri={uri} setURI={setURI} />,
            },
            {
              name: "Convert",
              iconName: "autorenew",
              screen: <ConvertScreen />,
            },
            {
              name: "PDF",
              iconName: "file-pdf-box",
              screen: <PDFScreen uri={uri} />,
            },
          ]}
        />
      </PaperProvider>
    </NavigationContainer>
  );
}
