import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Login from "../views/Login";
import Cadastro from "../views/Cadastro";
import EsqueceuASenha from "../views/EsqueceuASenha";
import Mensagem from "../views/Mensagem";
import SplashScreen from "../views/SpashScreen";

function Navegacao() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="SplashScreen">
        <Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
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
        <Screen
          name="EsqueceuASenha"
          component={EsqueceuASenha}
          options={{ headerShown: false }}
        />
        <Screen
          name="Mensagem"
          component={Mensagem}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default function Routes() {
  return <Navegacao />;
}
