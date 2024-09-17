import { ButtonHTMLAttributes } from "react";
import { PrimaryButtonContainer } from "./style";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    width?: string;
    maxWidth?: string;
}

export function PrimaryButton({ width, maxWidth, ...props }: PrimaryButtonProps) {
    return (
        <PrimaryButtonContainer width={width} maxWidth={maxWidth}>
            <button {...props}>
                {props.children}
            </button>
        </PrimaryButtonContainer>
    )

}