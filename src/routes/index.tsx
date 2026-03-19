import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tabs.routes";
import { RootStack } from "./RootStack";
import { ScreenContainer } from "react-native-screens";
import { WelCome } from "../screens/WellCome/WellCome";
import React, { useState } from 'react';

export function Routes() {
    
    const [hasFinishedIntro, setHasFinishedIntro] = useState(false);

  return (
    <NavigationContainer>
      {hasFinishedIntro ? (
        // Se já terminou a introdução, renderiza as TABS
        <TabRoutes />
      ) : (
        // Se não, renderiza a STACK de introdução
        <RootStack />
      )}
    </NavigationContainer>
  );

}