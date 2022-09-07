import React from "react";

import {
  ContainerCards,
  CardsImage,
  CardsInfo,
  HamburguerType,
  HamburguerName,
  HamburguerPrice,
} from "../../global/styles-components/CardsCardapio/cardsCardapio";

export default function CardsCardapio({
  image,
  hamburguerType,
  hamburguerName,
  hamburguerPrice,
  funcao,
}: PropsCardsCardapio) {
  return (
    <ContainerCards onPress={funcao}>
      <CardsImage source={image} />
      <CardsInfo>
        <HamburguerType>{hamburguerType}</HamburguerType>
        <HamburguerName>{hamburguerName}</HamburguerName>
        <HamburguerPrice>{`R$ ${hamburguerPrice}`}</HamburguerPrice>
      </CardsInfo>
    </ContainerCards>
  );
}
