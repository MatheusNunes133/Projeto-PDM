import React from "react";

import {
  ContainerButton,
  TextButton,
} from "../../global/styles-components/Button/button";

interface PropsButton {
  color: string;
  textColor: string;
  text: string;
  funcao?: Function;
}

export default function Button({
  color,
  textColor,
  text,
  funcao,
}: PropsButton) {
  return (
    <ContainerButton colorButton={color} onPress={funcao}>
      <TextButton textColor={textColor}>{text}</TextButton>
    </ContainerButton>
  );
}
