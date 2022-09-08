import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icone from "react-native-vector-icons/MaterialCommunityIcons";
import IconeTwo from "react-native-vector-icons/SimpleLineIcons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Login from "../views/Login";
import Cadastro from "../views/Cadastro";
import EsqueceuASenha from "../views/EsqueceuASenha";
import Mensagem from "../views/Mensagem";
import SplashScreen from "../views/SpashScreen";
import Cardapio from "../views/Cardapio";
import CustomDrawer from "../components/CustomDrawer";
import Inicio from "../views/Inicio";
import Mapas from "../views/Mapa";
import Sacola from "../views/Sacola";

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      initialRouteName="Inicio"
      drawerContent={(props) => {
        return <CustomDrawer {...props} />;
      }}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "rgba(226, 226, 226, 0.7)",
        drawerActiveTintColor: "#6A7D8B",
        drawerInactiveBackgroundColor: "#fff",
        drawerInactiveTintColor: "#6A7D8B",
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={Inicio}
        options={{
          drawerIcon: () => {
            return (
              <Icone name="home" size={15} color="#6A7D8B" />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Sacola"
        component={Sacola}
        options={{
          drawerIcon: () => {
            return <Icone name="shopping" size={15} color="#6A7D8B" />;
          },
        }}
      />
      <Drawer.Screen
        name="Mapa"
        component={Mapas}
        options={{
          drawerIcon: () => {
            return <Icone name="map" size={15} color="#6A7D8B" />;
          },
        }}
      />
      <Drawer.Screen
        name="Cardapio"
        component={Cardapio}
        options={{
          drawerIcon: () => {
            return <Icone name="silverware-fork-knife" size={15} color="#6A7D8B" />;
          },
        }}
      />
      <Drawer.Screen
        name="Favoritos"
        component={Cardapio}
        options={{
          drawerIcon: () => {
            return (
              <Icone name="cards-heart-outline" size={15} color="#6A7D8B" />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Meus Pedidos"
        component={Cardapio}
        options={{
          drawerIcon: () => {
            return <Icone name="playlist-edit" size={15} color="#6A7D8B" />;
          },
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={Cardapio}
        options={{
          drawerIcon: () => {
            return <IconeTwo name="settings" size={15} color="#6A7D8B" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="Cardapio"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EsqueceuASenha"
          component={EsqueceuASenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mensagem"
          component={Mensagem}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function Routes() {
  return <Navegacao />;
}
