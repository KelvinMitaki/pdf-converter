import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Tab = createMaterialBottomTabNavigator();

interface Props {
  initialRouteName: string;
  screens: {
    name: string;
    iconName: string;
    screen: React.ReactElement;
  }[];
}

export const TabNavigator: React.FC<Props> = ({
  initialRouteName,
  screens,
}) => {
  return (
    <Tab.Navigator initialRouteName={initialRouteName}>
      {screens.map(({ name, iconName, screen }) => (
        <Tab.Screen
          key={name}
          name={name}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name={iconName} color={color} size={26} />
            ),
          }}
        >
          {(props) => React.cloneElement(screen, props)}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};
