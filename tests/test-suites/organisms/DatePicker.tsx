import React from "react";
import { mount } from "enzyme";
import { DatePicker } from "../../../src";
import {
  defaultDays,
  defaultMonths,
} from "../../../src/components/organisms/Calendar/constants";

const datePickerTest = () => {
  describe("DatePicker", () => {
    test("Rendering test", () => {
      let wrapper = mount(<DatePicker />);
      expect(wrapper);
      wrapper = mount(<DatePicker months={defaultMonths} days={defaultDays} />);
      expect(wrapper.props().months).toBe(defaultMonths);
      wrapper = mount(<DatePicker value={{ month: -1, year: -1, day: -1 }} />);
      expect(wrapper.props().value.day).toBe(-1);
    });

    test("Selecting a day trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(
        <DatePicker
          calendarProps={{}}
          onChange={onChangeStub}
          fromToday={false}
        />
      );

      wrapper.find('[data-mbx-id="icb"]').at(0).simulate("click");
      wrapper
        .find('[data-mbx-id="cal"]')
        .find("td:not([data-mbx-dsb])")
        .at(3)
        .simulate("click");

      expect(onChangeStub).toBeCalled;
    });

    test("Closing the modal triggers the onClose callback", () => {
      const onCloseStub = jest.fn();
      let wrapper = mount(
        <DatePicker onClose={onCloseStub} fromToday={false} />
      );

      wrapper.find('[data-mbx-id="icb"]').at(0).simulate("click");

      wrapper.find("[data-mbx-dchead]").simulate("click");

      expect(onCloseStub).toBeCalled;
    });
  });
};

export default datePickerTest;
