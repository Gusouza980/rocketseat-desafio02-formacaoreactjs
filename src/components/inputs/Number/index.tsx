import { InputHTMLAttributes, useState } from "react"
import { InputNumberContainer, InputNumberInput } from "./style"
import { Minus, Plus } from "phosphor-react"

type InputNumberProps = InputHTMLAttributes<HTMLInputElement> & {

}

export function InputNumber({ required, ...props }: InputNumberProps) {

    const [value, setValue] = useState('')

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value;
        const onlyNumbers = inputValue.replace(/\D/g, ''); // Remove caracteres não numéricos
        setValue(onlyNumbers);
    }

    return (
        <InputNumberContainer>
            <Minus size={14} />
            <InputNumberInput type="text" required={required} {...props} onChange={handleInputChange} value={value} />
            <Plus size={14} />
        </InputNumberContainer>
    )
}