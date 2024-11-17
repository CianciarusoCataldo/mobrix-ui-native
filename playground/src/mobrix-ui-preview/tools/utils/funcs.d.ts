import React from "react";
import { BuilderProps, BuilderPropsReactive, MbxSharedProps } from "../../types/global";
export declare const buildMbxStandardComponent: ({ name, Component, mbxProps: cprops, wrapper, styles, addProps, animate, parseProps, }: BuilderProps) => React.JSX.Element;
export declare const getMbxUiReactive: <T = any>({ defV, inpV, props, Component, ...bprops }: BuilderPropsReactive<T>) => React.JSX.Element;
export declare const buildMbxStandard: (props: Record<string, any>, callback: (props: MbxSharedProps) => BuilderProps) => React.JSX.Element;
export declare const buildMbxReactive: <T = any>(props: Record<string, any>, callback: (props: MbxSharedProps) => BuilderPropsReactive<T>) => React.JSX.Element;
