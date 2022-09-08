import React, { useState } from "react";
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import Arrows from "../../components/Arrows";

import Button from "../../components/Button";

import {
  Container,
  Header,
  ArrowBack,
  TitlePage,
  ContainerButton,

} from "../../global/styles/Mapa/mapa";

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default function Mapa({ navigation }: PropsNavigation) {
  const [region, setRegion] = useState({
    latitude: -6.891596184623672,
    longitude: -38.5627557247244,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <Container>
      <Header>
        <ArrowBack onPress={() => navigation.goBack()}>
          <Arrows name="arrow-back" sizeArrow={30} color="#FB9400" />
        </ArrowBack>
        <TitlePage>Novo Endereço</TitlePage>
      </Header>
 
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: -6.891596184623672,
          longitude: -38.5627557247244,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={function (e) {
          // alert("teste");
          let regiao = {
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009
          }
          setRegion(regiao);
        }}
      >
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>

      <ContainerButton>
        <Button
          text="Adicionar localização"
          color="#FB9400"
          textColor="#fff"
          strokeColor
          funcao={() => navigation.navigate("Login")}
        />
      </ContainerButton>
    </Container>

  );
}
