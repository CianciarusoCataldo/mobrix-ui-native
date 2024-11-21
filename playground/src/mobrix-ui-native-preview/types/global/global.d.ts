import { BuilderProps, MbxSharedProps } from "./new";
/**
 * A MoBrix-ui component driven by an input value
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export interface ComponentWithValue<T = any> {
    /** Actual component value */
    value?: T;
}
/**
 * A {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component with a custom icon
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export interface ComponentWithIcon<T = JSX.Element> {
    /** Icon showed inside the component */
    icon?: T;
}
/**
 * A generic {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} input component, to handle various input content type (like strings or numbers)
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export interface GenericInputComponent {
    /** if true, the input content won't be editable */
    readOnly?: boolean;
    /** A label showed when no input is given */
    placeholder?: string;
}
export interface AutoResizableComponent {
    autoresizable?: boolean;
}
/**
 * A numeric {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} input component, to handle numbers
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type NumericInputComponent = GenericInputComponent & {
    min?: number;
    max?: number;
};
/**
 * A {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component that provide a callback to handle its content changes
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 *
 */
export interface ComponentWithCallback<T = string> {
    /** Callback triggered when input content changes */
    onChange?: (newValue: T) => void;
}
/**
 * A {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component that provide a callback to handle its click event
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 *
 */
export interface ClickableComponent<T = () => void> {
    /** Callback triggered when component is clicked */
    onClick?: T;
}
/**
 * A {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component with children element
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export interface ComponentWithChildren<T = JSX.Element | JSX.Element[] | undefined> {
    /** Component children */
    children?: T;
}
/**
 * A {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component with onClose callback
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export interface ClosableComponent {
    /** Callback called when component is closed */
    onClose?: () => void;
}
/**
 *  Allowed {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component type for component builder
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type BuilderComponent = JSX.Element | string;
/**
 * A standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type MbxUiComponent<T = any, K = JSX.Element> = (props: MbxUiProps<T> & {
    [key: `data-${string}`]: unknown;
}) => K;
/**
 * Standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type MbxUiProps<T = any> = T & MbxSharedProps;
/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} reactive component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type MbxUiReactiveComponentProps<T = any, K = any> = {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
} & K;
/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} reactive component builder
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type MbxUiReactiveComponentBuilder<T = any, K = any> = MbxUiComponent<MbxUiReactiveComponentProps<T, K>, Omit<BuilderProps, "name">>;
/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} reactive component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type MbxUiReactiveComponent<T = any, K = any, ReturnType = BuilderComponent | BuilderComponent[]> = MbxUiComponent<MbxUiReactiveComponentProps<T, K>, ReturnType>;
export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
export type BuilderPropsReactive<T = BuilderComponent | BuilderComponent[]> = BuilderProps<(props: {
    value: T;
    setValue: (newValue: T) => void;
}) => BuilderProps["Component"]> & {
    inpV?: T;
    defV: T;
    render?: (value: T, setValue: React.Dispatch<React.SetStateAction<T>>) => BuilderProps["Component"];
    props?: (value: T, setValue: React.Dispatch<React.SetStateAction<T>>) => Omit<BuilderProps, "name">;
};
export type MbxBuildReactiveProps<T = any> = BuilderProps<(props: {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
}) => BuilderProps["Component"]> & {
    inpV?: T;
    defV: T;
    props?: (value: T, setValue: React.Dispatch<React.SetStateAction<T>>) => Omit<BuilderProps, "name">;
};
export type MbxIconProps = Omit<MbxSharedProps, "tabIndex"> & {
    fill?: string;
    reverseX?: boolean;
    width?: string;
    height?: string;
    style?: Record<string, any>;
};
export type MbxIcon<T = any> = (props: MbxIconProps & T) => React.JSX.Element;
/** React native styles */
export type Theme = {
    light?: Record<string, any>;
    dark?: Record<string, any>;
    common?: Record<string, any>;
};
