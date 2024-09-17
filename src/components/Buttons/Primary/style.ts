import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

interface PrimaryButtonContainerProps {
    width?: string;
    maxWidth?: string;
}

export const PrimaryButtonContainer = styled.div<PrimaryButtonContainerProps>`
    button{
        background-color: ${props => props.theme.colors['yellow']};
        color: ${props => props.theme.colors['white']};
        padding: 1rem 0.75rem;
        border-radius: 6px;
        width: ${props => props.width || 'fit-content'};
        max-width: ${props => props.maxWidth || '100%'};
        cursor: pointer;
        ${mixins.fonts.buttonG}
        line-height: 1;
        transition: background-color 0.2s;

        &:hover {
            background-color: ${props => props.theme.colors['yellow-dark']};
        }
    }
`