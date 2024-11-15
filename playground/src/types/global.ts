import { CSSProperties } from "react";

export type ResizableComponent = {
  height?: number;
  width?: number;
};

export type Style = Record<keyof CSSProperties, never>;

export type UiComponent = {
  style?: Style | Style[];
};
