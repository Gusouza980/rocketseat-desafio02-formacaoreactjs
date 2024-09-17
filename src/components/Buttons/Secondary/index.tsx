import { ButtonHTMLAttributes } from "react";
import { SecondaryButtonContainer } from "./style";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    height?: string;
}

export function SecondaryButton({ height, ...props }: SecondaryButtonProps) {
    return (
        <SecondaryButtonContainer height={height}>
            <button {...props}>
                {props.children}
            </button>
        </SecondaryButtonContainer>
    )

}