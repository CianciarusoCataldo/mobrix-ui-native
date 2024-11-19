import React, { useRef, useEffect } from 'react';
import { Button as Button$1, TouchableOpacity, Pressable, Text, View, Dimensions, Animated, StyleSheet, Image, Clipboard } from 'react-native';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var D_PROPS = {
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
var nativeWrappers = {
    Button: Button$1,
    TouchableOpacity: TouchableOpacity,
    Pressable: Pressable,
    Text: Text,
    View: View,
};

var extractStyles = function (_a, dark) {
    var _b = _a.dark, darkTheme = _b === void 0 ? {} : _b, _c = _a.light, light = _c === void 0 ? {} : _c, _d = _a.common, common = _d === void 0 ? {} : _d;
    return (dark ? __assign(__assign({}, common), darkTheme) : __assign(__assign({}, common), light));
};
var parseProps = function (props) { return (__assign(__assign(__assign(__assign(__assign({}, D_PROPS), props), (props.unstyled && {
    shadow: false,
    background: false,
    animated: false,
    hover: false,
})), (props.disabled && {
    animated: false,
    hover: false,
    a11y: false,
    active: false,
})), (!props.animated && {
    animation: undefined,
}))); };

var theme = {
    main: {
        light: {
            backgroundColor: "#e9e9e9",
            color: "#1b1b1b",
        },
        dark: {
            backgroundColor: "#1d232e",
            color: "#ffffff",
        },
    },
    shadow: {
        common: {
            shadowOpacity: 0.8,
            elevation: 15,
        },
        light: {
            shadowColor: "#000",
        },
        dark: {
            shadowColor: "#000",
        },
    },
    button: {},
    check: {},
    code: {},
};
var setTheme = function (newTheme) {
    theme = newTheme;
};
var setComponentTheme = function (component, newTheme) {
    theme[component] = newTheme;
};
var getTheme = function () { return theme; };

var _a = Dimensions.get("window"), width = _a.width, height = _a.height;
var defaultAnimationValues = {
    opacity: 1,
    translate: { x: 0, y: 0 },
    scale: 1,
};
var animationsMap = {
    "fade-in": {
        initial: __assign(__assign({}, defaultAnimationValues), { opacity: 0 }),
        steps: [{ toValue: 1 }],
        duration: 200,
    },
    "fade-out": {
        initial: defaultAnimationValues,
        steps: [{ toValue: 0 }],
        duration: 200,
    },
    "slide-in-bottom": {
        initial: __assign(__assign({}, defaultAnimationValues), { translate: { x: 0, y: height } }),
        steps: [{ toValue: defaultAnimationValues.translate }],
    },
    "slide-in-left": {
        initial: __assign(__assign({}, defaultAnimationValues), { translate: { x: -width, y: 0 } }),
        steps: [{ toValue: defaultAnimationValues.translate }],
    },
    "slide-in-right": {
        initial: __assign(__assign({}, defaultAnimationValues), { translate: { x: width, y: 0 } }),
        steps: [{ toValue: defaultAnimationValues.translate }],
    },
    "slide-in-top": {
        initial: __assign(__assign({}, defaultAnimationValues), { translate: { x: 0, y: -height } }),
        steps: [{ toValue: defaultAnimationValues.translate }],
    },
    "slide-out-bottom": {
        initial: defaultAnimationValues,
        steps: [{ toValue: { x: 0, y: height } }],
    },
    "slide-out-left": {
        initial: defaultAnimationValues,
        steps: [{ toValue: { x: -width, y: 0 } }],
    },
    "slide-out-right": {
        initial: defaultAnimationValues,
        steps: [{ toValue: { x: width, y: 0 } }],
    },
    "slide-out-top": {
        initial: defaultAnimationValues,
        steps: [{ toValue: { y: -height, x: 0 } }],
    },
    scale: {
        initial: defaultAnimationValues,
        steps: [
            {
                toValue: 0.95,
            },
            {
                toValue: 1,
            },
        ],
    },
    shake: {
        initial: defaultAnimationValues,
        steps: [
            {
                toValue: { x: -10, y: -5 },
            },
            {
                toValue: { x: 10, y: 5 },
            },
            {
                toValue: { x: -10, y: 5 },
            },
            {
                toValue: { x: 10, y: -5 },
            },
            {
                toValue: { x: 0, y: 0 }, // Torna al centro
            },
        ],
        duration: 50,
    },
};

var getAnimatedSequence = function (value, animation) {
    return Animated.sequence(animationsMap[animation].steps.map(function (step) {
        return Animated.timing(value, {
            useNativeDriver: true,
            duration: step.duration || animationsMap[animation].duration || 200,
            toValue: step.toValue,
        });
    }));
};
var AnimatedMbxView = function (_a) {
    var Children = _a.children, animation = _a.animation, style = _a.style;
    var initialValues = animation
        ? animationsMap[animation].initial
        : defaultAnimationValues;
    var scale = useRef(new Animated.Value(initialValues.scale)).current;
    var opacity = useRef(new Animated.Value(initialValues.opacity)).current;
    var translatexy = useRef(new Animated.ValueXY(initialValues.translate)).current;
    var animations = {
        "fade-in": opacity,
        "fade-out": opacity,
        shake: translatexy,
        scale: scale,
        "slide-in-left": translatexy,
        "slide-in-right": translatexy,
        "slide-in-top": translatexy,
        "slide-in-bottom": translatexy,
        "slide-out-left": translatexy,
        "slide-out-right": translatexy,
        "slide-out-top": translatexy,
        "slide-out-bottom": translatexy,
    };
    useEffect(function () {
        if (animation) {
            opacity.setValue(animationsMap[animation].initial.opacity);
            scale.setValue(animationsMap[animation].initial.scale);
            translatexy.setValue(animationsMap[animation].initial.translate);
            getAnimatedSequence(animations[animation], animation).start();
        }
    }, [animation]);
    var styles = StyleSheet.create({
        main: {
            transform: [
                { scale: scale },
                { translateX: translatexy.x },
                { translateY: translatexy.y },
            ],
            opacity: opacity,
        },
    });
    return (React.createElement(Animated.View, { style: [styles.main, style] },
        React.createElement(Children, { animate: function (anim) { return getAnimatedSequence(animations[anim], anim).start(); } })));
};

// import "../styles/core/index.css";
var buildMbxStandardComponent = function (_a) {
    var name = _a.name, Component = _a.Component, 
    /* istanbul ignore next */
    _b = _a.mbxProps, 
    /* istanbul ignore next */
    cprops = _b === void 0 ? {} : _b, _c = _a.wrapper, wrapper = _c === void 0 ? "View" : _c, _d = _a.styles, styles = _d === void 0 ? [] : _d, _e = _a.addProps, addProps = _e === void 0 ? {} : _e, _f = _a.parseProps, parseProps = _f === void 0 ? function () { return ({}); } : _f;
    var theme = getTheme();
    var baseTheme = extractStyles(theme.main, cprops.dark);
    var activeTheme = extractStyles(theme[name] || {}, cprops.dark);
    var standardStyles = StyleSheet.create({
        main: activeTheme,
        extra: styles,
        custom: cprops.style,
        base: baseTheme,
        shadow: cprops.shadow ? extractStyles(theme.shadow, cprops.dark) : {},
        text: {
            color: (activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.color) || baseTheme.color,
        },
        background: cprops.background ? {} : { backgroundColor: "transparent" },
    });
    var NativeWrapper = nativeWrappers[wrapper];
    var Children = function (_a) {
        var animate = _a.animate;
        var parsedProps = parseProps({
            funcs: { animate: animate },
        });
        var props = __assign(__assign(__assign({}, cprops.props), addProps), parsedProps);
        var a11yProps = cprops.a11y
            ? {}
            : {
                importantForAccessibility: "no",
                accessible: false,
            };
        return (React.createElement(NativeWrapper, __assign({}, (cprops.animated && {
            activeOpacity: 0.6,
        }), props, (Component && {
            children: typeof Component === "string" ? (React.createElement(Text, __assign({}, a11yProps, { style: standardStyles.text }), Component)) : (Component),
        }), { style: [
                standardStyles.base,
                standardStyles.shadow,
                standardStyles.main,
                standardStyles.extra,
                standardStyles.custom,
                standardStyles.background,
            ], key: cprops.key, focusable: cprops.a11y }, a11yProps)));
    };
    return (React.createElement(AnimatedMbxView, { animation: cprops.animation }, Children));
};
// prettier-ignore
var getMbxUiReactive = function (_a) {
    var defV = _a.defV, inpV = _a.inpV, props = _a.props, Component = _a.Component, bprops = __rest(_a, ["defV", "inpV", "props", "Component"]);
    var _b = React.useState(inpV || defV), value = _b[0], setValue = _b[1];
    var parsed = props ? props(value, setValue) : {};
    /* istanbul ignore next */
    React.useEffect(function () {
        if (inpV !== undefined &&
            inpV !== null &&
            value !== inpV) {
            setValue(inpV);
        }
    }, [JSON.stringify(inpV)]);
    return buildMbxStandardComponent(__assign(__assign({ Component: Component && Component({ value: value, setValue: setValue }) }, bprops), parsed));
};
var parse = function (
/* istanbul ignore next */
props, callback) {
    var input = parseProps(props);
    var bProps = callback(input);
    return __assign({ mbxProps: input }, bProps);
};
var buildMbxStandard = function (
/* istanbul ignore next */
props, callback) { return buildMbxStandardComponent(parse(props, callback)); };
// prettier-ignore
var buildMbxReactive = function (props, callback) { return getMbxUiReactive(parse(props, callback)); };

/**
 * A tiny and smart button component.
 *
 * @param {() => void} onMouseEnter This callback is triggered everytime the cursor enter the button area
 * @param {() => void} onMouseLeave This callback is triggered everytime the cursor exit the button area
 * @param {() => void} onClick Callback triggered when Button component is clicked
 * @param {JSX.Element | string} children Button content
 * @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
 * @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
 * @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
 * @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
 * @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
 * @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
 * @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
 * @param {'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-top' | 'shake'} animation - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `animated`=`true`, this parameter specifies which animation is used when component is rendered
 * @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
 * @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
 * @param {boolean} active - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component click standard styles
 * @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
 * @param {(keyEvent : any) => void} onKeyDown - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when a key is pressed while using the component (for example, when writing text inside an `Input` component).
 * @param {() => void} onFocus - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when the component get the focus (for example, through tab key)
 * @param {() => void} onFocusLost - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when the component lose the focus (for example, when user clicks outside it)
 * @param {Record<string, any>} props - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
 *
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 1.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
var Button = function (_a) {
    var children = _a.children, _b = _a.onClick, onClick = _b === void 0 ? function () { } : _b; _a.onMouseEnter; _a.onMouseLeave; var props = __rest(_a, ["children", "onClick", "onMouseEnter", "onMouseLeave"]);
    return buildMbxStandard(props, function (mbxProps) { return ({
        name: "button",
        Component: children,
        wrapper: mbxProps.animated ? "TouchableOpacity" : "Pressable",
        styles: buttonStyles,
        mbxProps: mbxProps,
        parseProps: function (_a) {
            var animate = _a.funcs.animate;
            return ({
                onPress: function () {
                    mbxProps.animated && animate("scale");
                    onClick();
                },
            });
        },
    }); });
};
var buttonStyles = {
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    fontWeight: "800",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    fontSize: 14,
    lineHeight: 20,
};

var tickIcon = require("./imgs/tick.png");
var copyIcon = require("./imgs/copy.png");

/**
 * A checkbox element, totally customizable.
 *
 * @param {boolean} value Checkbox initial value (checked / unchecked)
 * @param {JSX.Element} icon custom tick icon (if not set, the default one will be used)
 * @param {(newValue: boolean) => void} onChange Callback triggered when CheckBox component input value is changed by the user
 * @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
 * @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
 * @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
 * @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
 * @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
 * @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
 * @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
 * @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
 * @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
 * @param {'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-top' | 'shake'} animation - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `animated`=`true`, this parameter specifies which animation is used when component is rendered
 * @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
 * @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
 * @param {boolean} active - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component click standard styles
 * @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
 * @param {(keyEvent : any) => void} onKeyDown - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when a key is pressed while using the component (for example, when writing text inside an `Input` component).
 * @param {() => void} onFocus - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when the component get the focus (for example, through tab key)
 * @param {() => void} onFocusLost - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when the component lose the focus (for example, when user clicks outside it)
 * @param {Record<string, any>} props - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
 * @param {boolean} a11y - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable accessibility features
 * @param {string} a11yLabel - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `a11y` = `true`, is used as [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) accessibility parameter
 * @param {number | string} tabIndex - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Regular [tabIndex a11y parameter](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex). If `a11y` = `true`, this parameter is passed as `tabIndex` prop to the component (if not set, its value will be `0`). If `a11y` = `false`, it is set to `-1` (so the component is not focusable through `tab` key`)
 *
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CheckBox
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 1.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
var Checkbox = function (_a) {
    var value = _a.value, _b = _a.onChange, onChange = _b === void 0 ? function () { } : _b, icon = _a.icon, props = __rest(_a, ["value", "onChange", "icon"]);
    return buildMbxReactive(props, function (mbxProps) {
        var theme = getTheme();
        var baseStyles = extractStyles(theme.main, mbxProps.dark);
        var styles = extractStyles(theme["check"], mbxProps.dark);
        return {
            name: "check",
            wrapper: mbxProps.animated ? "TouchableOpacity" : "Pressable",
            Component: function (_a) {
                var value = _a.value;
                return value
                    ? icon || (React.createElement(Image, { source: tickIcon, style: {
                            width: 30,
                            height: 30,
                            tintColor: styles.color || baseStyles.color,
                        } }))
                    : "";
            },
            styles: {
                width: 35,
                height: 35,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
            },
            props: function (val, setVal) { return ({
                addProps: !mbxProps.disabled && {
                    onPress: function () {
                        onChange(!val);
                        setVal(!val);
                    },
                },
                mbxProps: mbxProps,
            }); },
            inpV: value,
            defV: false,
        };
    });
};

var cColor = ["#d81313", "#f6713c", "#3b82f6", "#2432f5", "#5b9306"];
var C_LANGS = {
    common: {
        STRING: 1,
    },
    javascript: {
        import: 0,
        from: 0,
        function: 0,
        if: 0,
        else: 0,
        try: 0,
        catch: 0,
        while: 0,
        export: 0,
        default: 2,
        const: 3,
        for: 0,
        forEach: 0,
    },
    python: {
        pip: 4,
        def: 4,
        __main__: 4,
    },
    terminal: {
        "#!/bin/bash": 4,
        "#!/bin/sh": 4,
        sh: 4,
        npm: 4,
        npx: 4,
        node: 4,
        git: 4,
        "gh-pages": 0,
        docker: 0,
        ls: 0,
        cd: 0,
        jq: 0,
        cat: 0,
        curl: 0,
        "apt-get": 0,
        apt: 0,
        wget: 0,
        aws: 0,
        cp: 0,
        rm: 0,
    },
};

var getCode = function (code, env) {
    var parts = [];
    var strCol = cColor[C_LANGS.common.STRING];
    code.split(/(\".+?\")/g).forEach(function (codeBlock, index) {
        if (index % 2 !== 0) {
            parts.push({ code: codeBlock, color: strCol });
        }
        else {
            codeBlock.split(/(\'.+?\')/g).forEach(function (inBlock, secIndex) {
                if (secIndex % 2 !== 0) {
                    parts.push({
                        code: inBlock,
                        color: strCol,
                    });
                }
                else {
                    inBlock.split(" ").forEach(function (part, piInd) {
                        parts.push({
                            code: part,
                            color: cColor[C_LANGS[env][part]],
                        });
                        parts.push({
                            code: " ",
                        });
                    });
                }
            });
        }
    });
    if (parts[parts.length - 1].code === " ") {
        parts.pop();
    }
    return parts;
};

/**
 * An empty button, without additional styles, to make an icon clickable
 *
 * @param {JSX.Element | string} children Button content - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button Button}
 * @param {() => void} onMouseEnter This callback is triggered everytime the cursor enter the button area - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button Button}
 * @param {() => void} onMouseLeave This callback is triggered everytime the cursor exit the button area - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button Button}
 * @param {() => void} onClick Callback triggered when Button component is clicked - extended from {@link https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Button Button}
 * @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
 * @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
 * @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
 * @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
 * @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
 * @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
 * @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
 * @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
 * @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
 * @param {'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-top' | 'shake'} animation - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `animated`=`true`, this parameter specifies which animation is used when component is rendered
 * @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
 * @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
 * @param {boolean} active - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component click standard styles
 * @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
 * @param {(keyEvent : any) => void} onKeyDown - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when a key is pressed while using the component (for example, when writing text inside an `Input` component).
 * @param {() => void} onFocus - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when the component get the focus (for example, through tab key)
 * @param {() => void} onFocusLost - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when the component lose the focus (for example, when user clicks outside it)
 * @param {Record<string, any>} props - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
 * @param {boolean} a11y - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable accessibility features
 * @param {string} a11yLabel - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `a11y` = `true`, is used as [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) accessibility parameter
 * @param {number | string} tabIndex - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Regular [tabIndex a11y parameter](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex). If `a11y` = `true`, this parameter is passed as `tabIndex` prop to the component (if not set, its value will be `0`). If `a11y` = `false`, it is set to `-1` (so the component is not focusable through `tab` key`)
 *
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/IconButton
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 3.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
var IconButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, _b = _a.active, active = _b === void 0 ? true : _b, props = __rest(_a, ["children", "onClick", "active"]);
    return buildMbxStandard(__assign(__assign({}, props), { active: active }), function (sProps) { return ({
        name: "icb",
        wrapper: sProps.animated ? "TouchableOpacity" : "Pressable",
        Component: children,
        styles: {
            alignItems: "center",
            border: 0,
        },
        addProps: __assign({}, (!sProps.disabled && {
            onPress: onClick,
        })),
        mbxProps: __assign(__assign({}, sProps), { active: sProps.active && onClick !== undefined, shadow: false, background: false }),
    }); });
};

var cdbComponent = function (_a) {
    var _b = _a.value, value = _b === void 0 ? "" : _b, _c = _a.environment, environment = _c === void 0 ? "terminal" : _c, _d = _a.copyButton, copyButton = _d === void 0 ? true : _d, disabled = _a.disabled; _a.hover; var active = _a.active, a11y = _a.a11y;
    var parse = value.length > 0 ? getCode : function (inp, e) { return [{ value: inp }]; };
    return [
        React.createElement(IconButton, { a11y: a11y, key: "cd_cp", onClick: function () { return value && Clipboard.setString(value); }, hide: !copyButton, disabled: disabled, active: active, style: { width: 25, height: 25, marginLeft: "auto" } },
            React.createElement(Image, { source: copyIcon, style: { width: 25, height: 25 } })),
        React.createElement(View, { key: "cd_cd", style: { padding: 10 } }, value.split("\n").map(function (codl, lIndex) { return (React.createElement(Text, { style: { margin: 0 }, key: "cd_l_".concat(lIndex) }, parse(codl, environment).map(function (cBlock, bIndex) {
            return cBlock.code === " " ? (" ") : (React.createElement(Text, { key: "cdb_bl_".concat(bIndex), style: { color: cBlock.color || "inherit" } }, cBlock.code));
        }))); })),
    ];
};

/**
 * A smart code box, to display code text as a compiler. Supports code highlight, with a selectable environment, and multiline strings
 *
 * @param {string} value code to display - multiline string is supported
 * @param {'javascript' | 'python' | 'terminal' | 'common'} environment environment for text highlight feature, default to 'terminal' (only enabled when 'highlight' is true)
 * @param {boolean} copyButton Enable/disable the copy button
 * @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
 * @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
 * @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
 * @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
 * @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
 * @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
 * @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
 * @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
 * @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
 * @param {'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-top' | 'shake'} animation - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `animated`=`true`, this parameter specifies which animation is used when component is rendered
 * @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
 * @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
 * @param {boolean} active - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component click standard styles
 * @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
 * @param {(keyEvent : any) => void} onKeyDown - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when a key is pressed while using the component (for example, when writing text inside an `Input` component).
 * @param {() => void} onFocus - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when the component get the focus (for example, through tab key)
 * @param {() => void} onFocusLost - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom callback triggered when the component lose the focus (for example, when user clicks outside it)
 * @param {Record<string, any>} props - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
 * @param {boolean} a11y - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable accessibility features
 * @param {string} a11yLabel - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `a11y` = `true`, is used as [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) accessibility parameter
 * @param {number | string} tabIndex - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Regular [tabIndex a11y parameter](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex). If `a11y` = `true`, this parameter is passed as `tabIndex` prop to the component (if not set, its value will be `0`). If `a11y` = `false`, it is set to `-1` (so the component is not focusable through `tab` key`)
 *
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/CodeBox
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 1.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
var CodeBox = function (_a) {
    var active = _a.active, props = __rest(_a, ["active"]);
    return buildMbxStandard(props, function (mbxProps) { return ({
        name: "code",
        mbxProps: mbxProps,
        styles: {
            padding: 1,
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
        },
        Component: cdbComponent(__assign(__assign(__assign({}, props), mbxProps), { active: active })),
    }); });
};

export { Button, Checkbox as CheckBox, CodeBox, IconButton, setComponentTheme, setTheme };
