import React from "react";
import { BuilderComponentProps } from "../../types/global";
declare const AnimatedMbxView: ({ Children, settings, }: {
    settings: {
        fadeIn?: boolean;
        scale?: boolean;
        pressable?: boolean;
    };
    Children: ({ animations }: BuilderComponentProps) => JSX.Element;
}) => React.JSX.Element;
export default AnimatedMbxView;
