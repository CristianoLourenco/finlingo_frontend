import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WelCome } from "./src/screens/WellCome/WellCome";
import { Cadastro } from "./src/screens/Cadastro/Cadastro";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation, NavigationContainer } from "@react-navigation/native";



const Stack = createNativeStackNavigator()


export default function App() {
    return(
        <View style={styles.container}>
            <NavigationContainer >
                <Stack.Navigator 
                    initialRouteName="Welcome"
                    screenOptions={{
                        headerStyle: {
                    backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelCome} 
          options={{ title: 'Bem-vindo' }}
        />
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={{ title: 'Criar Conta' }}
        />
      </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto"/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C2E7FA"
    }
})