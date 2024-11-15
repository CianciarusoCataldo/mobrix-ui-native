import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react-native";

import Apple from "@atoms/Apple";
import { appleStages } from "@atoms/Apple/constants";

const TIMER_DURATION = 400;

describe("Apple Component", () => {
  let mockCallback: (stage: number) => void;

  beforeEach(() => {
    mockCallback = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });
  });

  test("renders correctly with default props", () => {
    const { getByTestId } = render(<Apple />);
    const appleImage = getByTestId("apple-component");
    expect(appleImage.props.source).toBe(appleStages[0]);
  });

  test("changes stage on press, with default props", async () => {
    const { getByTestId } = render(<Apple />);
    const appleImage = getByTestId("apple-component");

    await act(async () => {
      fireEvent.press(appleImage);
      jest.advanceTimersByTime(400);
    });

    await waitFor(() => {
      expect(appleImage.props.source).toBe(appleStages[1]);
    });
  });

  test("changes stage on press", async () => {
    const { getByTestId } = render(<Apple callback={mockCallback} />);
    const appleImage = getByTestId("apple-component");

    await act(async () => {
      fireEvent.press(appleImage);
      jest.advanceTimersByTime(400);
    });

    await waitFor(() => {
      expect(mockCallback).toHaveBeenCalledWith(1);
      expect(appleImage.props.source).toBe(appleStages[1]);
    });
  });

  test("cycles through stages on multiple presses", async () => {
    const { getByTestId } = render(<Apple callback={mockCallback} />);
    const appleImage = getByTestId("apple-component");

    for (let i = 1; i <= appleStages.length; i++) {
      await act(async () => {
        fireEvent.press(appleImage);
        jest.advanceTimersByTime(TIMER_DURATION);
      });

      const stage = i % appleStages.length;
      await waitFor(() => {
        expect(mockCallback).toHaveBeenCalledWith(stage);
        expect(appleImage.props.source).toBe(appleStages[stage]);
      });
    }
  });

  test("scales down and up on press", async () => {
    const { getByTestId } = render(<Apple callback={mockCallback} />);
    const appleImage = getByTestId("apple-component");

    await act(async () => {
      fireEvent.press(appleImage);
      jest.advanceTimersByTime(400);
    });

    await waitFor(() => {
      expect(appleImage.props.source).toBe(appleStages[1]);
    });
  });
});
