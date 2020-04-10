import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// Components
import BurgerList from "../BurgerList";
import BurgerDetail from "../BurgerDetail";

const { Navigator, Screen } = createStackNavigator();

export default function RootNavigator() {
  return (
    <Navigator initialRouteName="">
      <Screen
        name="BurgerList"
        component={BurgerList}
        options={() => ({
          title: "Hero List",
          headerStyle: {
            backgroundColor: "rgb(20,90,100)",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "white",
        })}
      />
      <Screen
        name="BurgerDetail"
        component={BurgerDetail}
        options={({ route }) => {
          const { burger } = route.params;
          return {
            title: burger.name,
            headerStyle: {
              backgroundColor: "rgb(20,90,100)",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },

            headerTintColor: "white",
          };
        }}
      />
    </Navigator>
  );
}
