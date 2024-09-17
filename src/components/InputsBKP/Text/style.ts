import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

interface InputTextContainerProps {
    width?: string;
    maxWidth?: string;
}

export const InputTextContainer = styled.div<InputTextContainerProps>`
    position: relative;
    width: ${props => props.width || '100%'};
    max-width: ${props => props.maxWidth || '100%'};
`

export const InputTextInput = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid ${props => props.theme.colors['base-button']};
    border-radius: 4px;
    color: ${props => props.theme.colors['base-text']};
    background-color: ${props => props.theme.colors['base-input']};
    transition: all 0.2s;
    ${mixins.fonts.textS}
    &:focus {
        border-color: ${props => props.theme.colors['yellow-dark']};
    }

    &::placeholder {
        color: ${props => props.theme.colors['base-label']};
        ${mixins.fonts.textS}
    }
`

export const OptionalText = styled.span`
    font-size: 0.75rem;
    color: ${props => props.theme.colors['base-label']};
    position: absolute;
    top: calc(50% - 0.375rem);
    right: 0.75rem;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    line-height: 1;
`