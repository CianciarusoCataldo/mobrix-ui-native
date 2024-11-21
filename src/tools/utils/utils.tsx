import { MbxSharedProps } from "../../types";
import { Theme } from "../../types/global/global";
import { D_PROPS } from "./constants";



export const capitalize = (inp: string) =>
  inp.replace(/\b\w/g, (l) => l.toUpperCase());

export const parseProps = (props: MbxSharedProps): MbxSharedProps => ({
  ...D_PROPS,
  ...props,
  ...(props.unstyled && {
    shadow: false,
    background: false,
    animated: false,
    hover: false,
  }),
  ...(props.disabled && {
    animated: false,
    hover: false,
    a11y: false,
    active: false,
  }),
  ...(!props.animated && {
    animation: undefined,
  }),
});
