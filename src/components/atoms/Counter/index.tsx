import { CounterComponent } from "../../../types";

import { buildMbxStandard } from "../../../tools/utils";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { extractAttribute } from "../../../tools/styles/core/theme";

const arrowProps: Record<
  "left" | "right",
  { text: string; callback: (value: number) => number }
> = {
  left: {
    text: "<",
    callback: (value) => value - 1,
  },
  right: {
    text: ">",
    callback: (value) => value + 1,
  },
};
/**
 * A flexible numeric input element
 *
 * @param {number} value numeric input value
 * @param {string} placeholder label showed when no value is set
 * @param {boolean} readOnly if true, component value can only be set with `value` parameter
 * @param {number} min min allowed value
 * @param {number} max max allowed value
 * @param {(newValue: number) => void} onChange Callback triggered when Counter component input value is changed by the user
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
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Counter
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 1.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
const Counter: CounterComponent = ({
  /* istanbul ignore next */
  onChange = () => {},
  value = 0,
  placeholder,
  readOnly,
  max,
  min,
  arrows = true,
  ...props
}) =>
  buildMbxStandard(props, (mbxProps) => {
    const Children = () => {
      const [val, setVal] = useState(Number.isFinite(value) ? value : 0);
      const color = extractAttribute("color", "count", mbxProps.dark);

      const Arrow = ({ direction }: { direction: "left" | "right" }) =>
        arrows && (
          <TouchableOpacity
            key={`arrow-${direction}`}
            onLongPress={() => {}}
            onPress={() => {
              const newVal = arrowProps[direction].callback(val);
              onChange(newVal);
              setVal(newVal);
            }}
            style={styles.arrow}
          >
            <Text style={[styles.arrowText, { color }]}>
              {arrowProps[direction].text}
            </Text>
          </TouchableOpacity>
        );

      return [
        <Arrow key="left" direction="left" />,
        <TextInput
          style={{
            color,
            textAlign: "center",
          }}
          key="number-input"
          value={String(val)}
          keyboardType="numeric"
          placeholder={placeholder}
          onChangeText={(text) => {
            if (!readOnly && !mbxProps.disabled) {
              try {
                const cleanedValue = text.replace(/[^0-9]/g, "");

                const numericValue = cleanedValue
                  ? parseInt(cleanedValue, 10)
                  : 0;

                setVal(numericValue);
                onChange(numericValue);
              } catch (e) {}
            }
          }}
        />,
        <Arrow key="right" direction="right" />,
        ,
      ];
    };

    return {
      name: "count",
      styles: {
        flexDirection: "row",
        borderRadius: arrows ? 30 : 3,
      },
      Component: <Children />,
      mbxProps,
    };
  });

const styles = StyleSheet.create({
  arrow: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowText: {
    fontSize: 18,
    color: "#333",
  },
});

export default Counter;
