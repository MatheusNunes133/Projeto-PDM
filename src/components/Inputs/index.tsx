import React from "react";

import { Input } from "../../global/styles-components/Inputs/inputs";

interface PropsInputs {
  placeholder: string;
  secure?: boolean;
}

export default function Inputs({ placeholder, secure }: PropsInputs) {
  return <Input placeholder={placeholder} secureTextEntry={secure} />;
}
