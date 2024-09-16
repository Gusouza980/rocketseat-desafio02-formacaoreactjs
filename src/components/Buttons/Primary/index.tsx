import { ButtonHTMLAttributes } from "react";
import { PrimaryButtonContainer } from "./style";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function PrimaryButton({ ...props }: PrimaryButtonProps) {
    return (
        <PrimaryButtonContainer>
            <button {...props}>
                {props.children}
            </button>
        </PrimaryButtonContainer>
    )

}