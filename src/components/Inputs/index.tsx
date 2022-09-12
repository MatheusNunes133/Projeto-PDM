import React from "react";

import { Input } from "../../global/styles-components/Inputs/inputs";

export default function Inputs({ placeholder, secure,onChangeText,maxLength, type }: PropsInputs) {
  return <Input placeholder={placeholder} secureTextEntry={secure} onChangeText={onChangeText} maxLength={maxLength} keyboardType={type}/>;
}
