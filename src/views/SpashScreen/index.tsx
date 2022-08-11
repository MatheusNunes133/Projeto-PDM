import React from "react";
import LottieView from "lottie-react-native";

import {
  Container,
  ContainerAnimation,
} from "../../global/styles/SplashScreen/splash";
import { StatusBar } from "../../global/styles/Login/login";

import Logo from "../../components/Logo";

export default function SplashScreen({ navigation }) {
  return (
    <Container>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <ContainerAnimation>
        <Logo />
        <LottieView
          source={require("../../../assets/images/loading.json")}
          autoPlay
          loop={false}
          onAnimationFinish={() => {
            navigation.navigate("Login");
          }}
        />
      </ContainerAnimation>
    </Container>
  );
}
