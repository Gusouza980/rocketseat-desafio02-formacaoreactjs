import { ButtonHTMLAttributes } from "react";
import { SecondaryButtonContainer } from "./style";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function SecondaryButton({ ...props }: SecondaryButtonProps) {
    return (
        <SecondaryButtonContainer>
            <button {...props}>
                {props.children}
            </button>
        </SecondaryButtonContainer>
    )

}