import { InputHTMLAttributes, useState } from "react"
import { InputNumberContainer, InputNumberInput } from "./style"
import { Minus, Plus } from "phosphor-react"

type InputNumberProps = InputHTMLAttributes<HTMLInputElement> & {

}

export function InputNumber({ required, ...props }: InputNumberProps) {

    const [value, setValue] = useState(1)

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value;
        const onlyNumbers = parseInt(inputValue.replace(/\D/g, '')); // Remove caracteres não numéricos
        setValue(onlyNumbers);
    }

    function handleIncrement() {
        if (value >= 9) return;
        setValue(value + 1);
    }

    function handleDecrement() {
        if (value > 1) {
            setValue(value - 1);
        }
    }

    return (
        <InputNumberContainer>
            <button>
                <Minus size={14} onClick={handleDecrement} />
            </button>
            <InputNumberInput type="text" required={required} {...props} onChange={handleInputChange} value={value} />
            <button>
                <Plus size={14} onClick={handleIncrement} />
            </button>
        </InputNumberContainer>
    )
}