import React from "react";
import Icone from "react-native-vector-icons/MaterialIcons";

interface PropsArrows {
  name: string;
  sizeArrow: number;
  color?: string;
}

export default function Arrows({ name, sizeArrow, color }: PropsArrows) {
  return <Icone name={name} size={sizeArrow} style={{ color: color }}></Icone>;
}
