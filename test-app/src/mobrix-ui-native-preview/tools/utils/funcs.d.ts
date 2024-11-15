import React from "react";
import { BuilderProps, BuilderPropsReactive, MbxSharedProps } from "../../types/global";
import { Theme } from "../../types/global/global";
export declare const extractStyles: ({ dark: darkTheme, light, common }: Theme, dark: boolean) => {
    [x: string]: any;
};
export declare const parseProps: (props: MbxSharedProps) => MbxSharedProps;
export declare const buildMbxStandard: (props: Record<string, any>, callback: (props: MbxSharedProps) => BuilderProps) => React.JSX.Element;
export declare const buildMbxReactive: <T = any>(props: Record<string, any>, callback: (props: MbxSharedProps) => BuilderPropsReactive<T>) => React.JSX.Element;
