import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Login from "../views/Login";
import Cadastro from "../views/Cadastro";

function Navegacao() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default function Routes() {
  return <Navegacao />;
}
