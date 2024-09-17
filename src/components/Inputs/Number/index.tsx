import { InputHTMLAttributes } from "react"
import { InputNumberContainer, InputNumberInput } from "./style"
import { Minus, Plus } from "phosphor-react"

type InputNumberProps = InputHTMLAttributes<HTMLInputElement> & {
    quantity: number;
    increment: () => void;
    decrement: () => void;
}

export function InputNumber({ quantity, increment, decrement, required, ...props }: InputNumberProps) {

    function handleIncrement() {
        increment();
    }

    function handleDecrement() {
        decrement();
    }

    return (
        <InputNumberContainer>
            <button>
                <Minus size={14} onClick={handleDecrement} />
            </button>
            <InputNumberInput type="text" required={required} readOnly={true} {...props} value={quantity} />
            <button>
                <Plus size={14} onClick={handleIncrement} />
            </button>
        </InputNumberContainer>
    )
}