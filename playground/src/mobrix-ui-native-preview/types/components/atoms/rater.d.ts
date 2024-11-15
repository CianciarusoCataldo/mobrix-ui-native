import { ComponentWithCallback, ComponentWithValue, MbxUiComponent } from "../../global";
/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Rater component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Rater
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type RaterProps = ComponentWithValue<number> & ComponentWithCallback<number> & {
    /** if true, rate icons will be showed vertically (default `false` - `horizontal`) */
    vertical?: boolean;
    /** max vote (max number of icons showed) */
    max?: number;
    /** if true, the rate can't be changed by clicking on the icons */
    readonly?: boolean;
    /** Empty rate icon, used to render the rate value. If not set, a standard unfilled star icon is used */
    emptyIcon?: React.JSX.Element;
    /** Full rate icon, used to render the rate value. If not set, a standard filled star icon is used */
    fullIcon?: React.JSX.Element;
};
/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Rater component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Rater
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type RaterComponent = MbxUiComponent<RaterProps>;
