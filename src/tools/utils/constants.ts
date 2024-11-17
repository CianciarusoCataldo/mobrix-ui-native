import { MbxSharedProps, Wrappers } from "../../types";
import {
  Button,
  Pressable,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

export const D_PROPS: MbxSharedProps = {
  background: true,
  disabled: false,
  dark: false,
  animated: true,
  shadow: true,
  props: {},
  unstyled: false,
  active: false,
  style: [],
};

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

export const nativeWrappers: Record<Wrappers, any> = {
  Button,
  TouchableOpacity,
  Pressable,
  Text,
  View,
};