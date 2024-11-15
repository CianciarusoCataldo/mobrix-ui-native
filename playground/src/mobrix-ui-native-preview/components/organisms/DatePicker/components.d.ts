import { BuilderComponent, CalendarDate, DatePickerProps, MbxUiComponent } from "../../../types";
declare const Component: MbxUiComponent<DatePickerProps & {
    today: CalendarDate & {
        dayOfTheMonth: number;
    };
}, BuilderComponent[]>;
export default Component;
