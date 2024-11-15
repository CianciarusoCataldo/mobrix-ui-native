/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResizableComponent, UiComponent } from "@type-defs/global";

export type AppleProps = {
  callback?: (stage: number) => void;
  start?: number;
  max?: number;
} & UiComponent &
  ResizableComponent;

export type AppleComponent = (props: AppleProps) => React.JSX.Element;
