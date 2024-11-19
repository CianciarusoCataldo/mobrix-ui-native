import { Theme } from "../../../types/global/global";
declare let theme: Record<"main" | "shadow" | "button" | "check", Theme>;
export declare const setTheme: (newTheme: typeof theme) => void;
export declare const setComponentTheme: (component: keyof typeof theme, newTheme: {
    light?: Record<string, any>;
    dark?: Record<string, any>;
}) => void;
export declare const getTheme: () => Record<"main" | "shadow" | "button" | "check", Theme>;
export {};
