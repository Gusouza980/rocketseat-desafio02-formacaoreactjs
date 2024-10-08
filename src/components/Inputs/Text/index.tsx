import { InputHTMLAttributes, useState } from "react";
import { InputTextInput, InputTextContainer, OptionalText } from "./style";

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string
    width?: string
    maxWidth?: string
}

export function InpuText({ width, maxWidth, required, label, ...props }: InputTextProps) {

    const [focus, setFocus] = useState(false)

    function handleOnFocus() {
        setFocus(true)
    }

    function handleOnBlur() {
        setFocus(false)
    }

    return (
        <InputTextContainer width={width} maxWidth={maxWidth}>
            <InputTextInput type="text" placeholder={label} required={required} onFocus={handleOnFocus} onBlur={handleOnBlur} {...props} />
            {(!required && !focus) && <OptionalText>Opcional</OptionalText>}
        </InputTextContainer>
    )
}