import React from "react";
import { render } from "@testing-library/react-native";

import Home from "@screens/index";

jest.mock("react-native", () => {
  const RN = jest.requireActual("react-native");
  RN.Animated.timing = jest.fn().mockReturnValue({
    start: jest.fn(),
    stop: jest.fn(),
  });
  return RN;
});

describe("App Component", () => {
  test("renders correctly", () => {
    const {} = render(<Home />);
  });
});
