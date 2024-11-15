import React from "react";
declare const AnimatedMbxView: ({ internalOnPress, Children, settings, }: {
    internalOnPress: () => void;
    settings: {
        fadeIn?: boolean;
        scale?: boolean;
        pressable?: boolean;
    };
    Children: ({ internalOnPress, }: {
        internalOnPress?: () => void;
    }) => JSX.Element;
}) => React.JSX.Element;
export default AnimatedMbxView;
