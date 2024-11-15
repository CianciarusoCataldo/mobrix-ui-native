import { CalendarDate } from "../../../types";
export declare const leapYear: (year: number) => boolean;
export declare const today: () => {
    year: number;
    month: number;
    dayOfTheMonth: number;
    day: number;
};
export declare const durations: (year: number) => number[];
export declare const dMatrix: (onScreenDate: CalendarDate, months: number[]) => number[][];
