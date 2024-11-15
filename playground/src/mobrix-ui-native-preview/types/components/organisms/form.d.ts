import { ComponentWithChildren, MbxUiComponent } from "../../global";
import { FormFieldProps } from "../molecules/form-field";
/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Form component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Form
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type FormProps = ComponentWithChildren<JSX.Element> & {
    /** Form title */
    title?: string;
    /** Form fields object. Every key is the field unique ID, and will be used on submit when returning their values */
    fields?: Record<string, FormFieldProps & {
        /** Custom component rendered instead of the standard field (if `override` is set, all other parameters are not used) */
        override?: JSX.Element;
        /** Custom className applied on the field component */
        className?: string;
    }>;
    /** Custom submit button content */
    submitContent?: JSX.Element | string;
    /** Custom className applied on every single field component */
    fieldClassName?: string;
    /** Custom validation callback. Must return an object with every field associated with a boolean value (if `false`, the field will be in error state) */
    validate?: (fieldValues: Record<string, any>) => Record<string, boolean>;
    /** Custom callback, called on submit */
    onSubmit?: (values: Record<string, any>) => void;
};
/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Form component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Form
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
export type FormComponent = MbxUiComponent<FormProps>;
