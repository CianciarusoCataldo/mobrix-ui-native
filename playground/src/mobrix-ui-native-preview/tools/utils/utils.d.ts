import { MbxSharedProps } from "../../types";
import { Theme } from "../../types/global/global";
export declare const extractStyles: ({ dark: darkTheme, light, common }: Theme, dark: boolean) => {
    [x: string]: any;
};
export declare const capitalize: (inp: string) => string;
export declare const parseProps: (props: MbxSharedProps) => MbxSharedProps;
