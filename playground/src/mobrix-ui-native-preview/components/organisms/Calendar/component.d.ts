import { CalendarDate, CalendarProps, DeepPartial, MbxUiReactiveComponent } from "../../../types";
declare const Component: MbxUiReactiveComponent<DeepPartial<CalendarDate>, CalendarProps & {
    today: CalendarDate & {
        dayOfTheMonth: number;
    };
}>;
export default Component;
