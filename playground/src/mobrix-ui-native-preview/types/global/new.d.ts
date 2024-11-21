import { MutableRefObject } from "react";
import { BuilderComponent } from "./global";
export type MoBrixAnimation = "fade-in" | "fade-out" | "slide-in-left" | "slide-in-right" | "slide-in-top" | "slide-in-bottom" | "slide-out-left" | "slide-out-right" | "slide-out-top" | "slide-out-bottom" | "shake" | "scale";
export type MbxUiNativeAnimatedViewProps = {
    children: ({ animate, }: {
        animate: BuilderComponentProps["funcs"]["animate"];
    }) => JSX.Element;
    animation?: MoBrixAnimation;
    style?: Record<string, any>;
};
export type MbxAttributes = {
    /** Enable/disable dark mode (default `false`) */
    dark?: boolean;
    /** Enable/disable shadow behind component (default `true`) */
    shadow?: boolean;
    /** Enable/disable component animations (default `true`) */
    animated?: boolean;
    /** Hide/show component (default `false`) */
    hide?: boolean;
    /** If false, disable component background */
    background?: boolean;
    active?: boolean;
    /** If true, disable the component. The effect may vary depending on the component type */
    disabled?: boolean;
    /** If `true`, the component is selectable by navigating with tab key (default `true`) */
    a11y?: boolean;
    /** If `false`, disable component hover standard styles (default `true`) */
    hover?: boolean;
};
/**
 * Props shared between all {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} components
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=components-building-process
 * */
export type MbxSharedProps = MbxAttributes & {
    /** React key, the standard {@link https://reactjs.org/docs/lists-and-keys.html key parameter} */
    key?: string;
    /** custom className applied on main container */
    className?: string;
    /** {@link https://www.w3schools.com/html/html_id.asp id parameter} (for styling/testing purpose, to easily find the component into the DOM) */
    id?: string;
    /** Css inline properties applied on main container */
    style?: Record<string, any>;
    /** If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons) (default `false`) */
    unstyled?: boolean;
    /** If `animated`=`true`, this parameter specifies which animation is used when component is rendered */
    animation?: MoBrixAnimation;
    /** Custom additional properties, applied to the component */
    props?: Record<string, any>;
    /** if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label aria-label} ARIA parameter */
    a11yLabel?: string;
    /**   /** if the `a11y` parameter is `true`, this parameter is used as {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex tabindex} parameter **/
    tabIndex?: number | string;
    /** callback called when component is focused */
    onFocus?: () => void;
    /** callback called when component focus is lost */
    onFocusLost?: () => void;
    /** callback called when a key is pressed when inside the component */
    onKeyDown?: (keyEvent: any) => void;
};
/** Supported components wrappers */
export type Wrappers = "TouchableOpacity" | "Pressable" | "Button" | "View" | "Text" | "TextInput";
/** web types */
export type BuilderComponentProps = {
    funcs: {
        animate: (animation: MoBrixAnimation) => void;
    };
};
/**
 * {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} components builder props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type BuilderProps<T = BuilderComponent | BuilderComponent[], Ref = any> = {
    /** Component name, required */
    name: string;
    /** Component to render */
    Component?: T;
    /** Shared {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/?id=ui-properties MoBrix-ui properties} */
    mbxProps?: MbxSharedProps;
    /** Component wrapper (default `div`) */
    wrapper?: Wrappers;
    /** Component extra css styles */
    styles?: Record<string, any>;
    /** Custom additional properties, applied to the component */
    addProps?: Record<string, any>;
    parseProps?: (props: BuilderComponentProps) => Record<string, any>;
    ref?: MutableRefObject<Ref>;
};
export type MbxUiNativeAnimationAttributes = {
    opacity: number;
    translate: {
        x: number;
        y: number;
    };
    scale: number;
};
