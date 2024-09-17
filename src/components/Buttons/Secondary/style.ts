import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

interface SecondaryButtonContainerProps {
    height?: string;
}

export const SecondaryButtonContainer = styled.div<SecondaryButtonContainerProps>`
    button{
        background-color: ${props => props.theme.colors['base-button']};
        color: ${props => props.theme.colors['base-text']};
        padding: 0.25rem 0.5rem;
        height: ${props => props.height || 'auto'};
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        cursor: pointer;
        ${mixins.fonts.buttonM}
        transition: background-color 0.2s;

        &:hover {
            background-color: ${props => props.theme.colors['base-hover']};
        }
    }
`