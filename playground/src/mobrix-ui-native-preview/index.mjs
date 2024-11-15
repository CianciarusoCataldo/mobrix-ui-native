import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Text, Button as Button$1, TouchableOpacity, Pressable, View } from 'react-native';

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
    hover: true,
    disabled: false,
    dark: false,
    animated: true,
    shadow: true,
    props: {},
    a11y: true,
    unstyled: false,
    features: {},
    active: false,
    style: [],
};
var properties = {
    Text: { pressable: false },
    Pressable: { pressable: true },
    TouchableOpacity: { pressable: true },
    View: { pressable: false },
    Button: { pressable: true },
};

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
            shadowOffset: { width: 0, height: 4 }, // offset dell'ombra
            shadowOpacity: 0.5, // opacità dell'ombra
            shadowRadius: 2, // raggio dell'ombra
            // Ombra per Android
            elevation: 25, // elevate per Android
        },
        light: {
            shadowColor: "#000", // colore dell'ombra
        },
        dark: {
            shadowColor: "#000", // colore dell'ombra
        },
    },
    button: {},
};
var setTheme = function (newTheme) {
    theme = newTheme;
};
var setComponentTheme = function (component, newTheme) {
    theme[component] = newTheme;
};
var getTheme = function () { return theme; };

var AnimatedMbxView = function (_a) {
    var internalOnPress = _a.internalOnPress, Children = _a.Children, settings = _a.settings;
    var scale = useRef(new Animated.Value(1)).current;
    var opacity = useRef(new Animated.Value(0)).current;
    useEffect(function () {
        Animated.timing(opacity, {
            toValue: 1, // Opacità finale
            duration: 300, // Durata in millisecondi
            useNativeDriver: true, // Usa il driver nativo per migliori performance
        }).start();
    }, [opacity]);
    var startAnimation = function () {
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 0.95,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
    };
    var onPress = function () {
        startAnimation();
        internalOnPress();
    };
    return (React.createElement(Animated.View, { style: __assign(__assign({}, __assign({}, (settings.scale && { transform: [{ scale: scale }] }))), __assign({}, (settings.fadeIn && { opacity: opacity }))) },
        React.createElement(Children, { internalOnPress: onPress })));
};

// import "../styles/core/index.css";
var wrappers = {
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
var getMbxUiStandard = function (_a) {
    var name = _a.name, Component = _a.Component, 
    /* istanbul ignore next */
    _b = _a.mbxProps, 
    /* istanbul ignore next */
    cprops = _b === void 0 ? {} : _b, _c = _a.wrapper, wrapper = _c === void 0 ? "View" : _c, _d = _a.styles, styles = _d === void 0 ? [] : _d, _e = _a.addProps, addProps = _e === void 0 ? {} : _e, _f = _a.animate, animate = _f === void 0 ? "none" : _f, _g = _a.onPress, pressCallback = _g === void 0 ? function () { } : _g;
    var Wrapper = wrapper;
    var props = __assign(__assign({}, cprops.props), addProps);
    var scale = useRef(new Animated.Value(1)).current;
    var settings = properties[wrapper];
    var startAnimation = function () {
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 0.95,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
    };
    var onPress = function () {
        startAnimation();
        pressCallback();
    };
    var theme = getTheme();
    var baseTheme = extractStyles(theme.main, cprops.dark);
    var activeTheme = extractStyles(theme[name], cprops.dark);
    var standardStyles = StyleSheet.create({
        main: activeTheme,
        extra: styles,
        custom: cprops.style,
        base: baseTheme,
        shadow: cprops.shadow ? extractStyles(theme.shadow, cprops.shadow) : {},
        text: {
            color: (activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme.color) || baseTheme.color,
        },
    });
    var NativeWrapper = wrappers[Wrapper];
    var FinalComponent = function (_a) {
        var _b = _a.internalOnPress, internalOnPress = _b === void 0 ? function () { } : _b;
        return (React.createElement(NativeWrapper
        // @ts-ignore
        , __assign({}, props, (Component && {
            children: typeof Component === "string" ? (React.createElement(Text, { style: standardStyles.text }, Component)) : (Component),
        }), { style: [
                standardStyles.base,
                standardStyles.shadow,
                standardStyles.main,
                standardStyles.extra,
                standardStyles.custom,
            ], key: cprops.key }, (settings.pressable && {
            onPress: function () {
                internalOnPress();
                onPress();
            },
            activeOpacity: 0.8,
        }))));
    };
    return cprops.animated ? (React.createElement(AnimatedMbxView, { settings: {
            fadeIn: cprops.animation === "fade-in",
            scale: animate === "scale",
        }, internalOnPress: onPress, Children: FinalComponent })) : (React.createElement(FinalComponent, null));
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
props, callback) { return getMbxUiStandard(parse(props, callback)); };

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
        animate: "scale",
        onPress: function () {
            onClick();
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
    borderRadius: 4,
    fontSize: 14,
    lineHeight: 20,
};

export { Button, setComponentTheme, setTheme };
