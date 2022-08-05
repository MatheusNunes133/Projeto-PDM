import React from "react";

import {
  ContainerLinhas,
  LinhaLaranja,
  LinhaCinza,
} from "../../global/styles-components/Linhas/linhas";

export default function Linhas() {
  return (
    <ContainerLinhas>
      <LinhaCinza></LinhaCinza>
      <LinhaLaranja></LinhaLaranja>
    </ContainerLinhas>
  );
}
