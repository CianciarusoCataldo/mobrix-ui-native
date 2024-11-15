import { MbxSharedProps, Wrappers } from "../../types";

export const D_PROPS: MbxSharedProps = {
  background: true,
  hover: true,
  disabled: false,
  dark: false,
  animated: true,
  shadow: true,
  props: {},
  a11y: true,
  unstyled: false,
  features: {},
  active: false,
  style: [],
};

export const restricted = [
  "dk",
  "cfc",
  "hv",
  "wbc",
  "wb",
  "wc",
  "wch",
  "wall",
  "wallc",
];

export const properties: Record<
  Wrappers,
  {
    pressable: boolean;
  }
> = {
  Text: { pressable: false },
  Pressable: { pressable: true },
  TouchableOpacity: { pressable: true },
  View: { pressable: false },
  Button: { pressable: true },
};
