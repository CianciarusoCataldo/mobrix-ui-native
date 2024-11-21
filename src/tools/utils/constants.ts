import { MbxSharedProps, Wrappers } from "../../types";
import {
  Button,
  Pressable,
  TouchableOpacity,
  View,
  Text,
  TextInput,
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
  a11y: true,
};

export const nativeWrappers: Record<Wrappers, any> = {
  Button,
  TouchableOpacity,
  Pressable,
  Text,
  View,
  TextInput,
};
