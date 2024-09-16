import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const InputNumberContainer = styled.div`
    background-color: ${props => props.theme.colors['base-input']};
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 6px;
    gap: 0.5rem;
    color: ${props => props.theme.colors['base-title']};
    ${mixins.fonts.textM}

    svg {
        cursor: pointer;
        color: ${props => props.theme.colors['purple']};

        &:hover {
            color: ${props => props.theme.colors['purple-dark']};
        }
    }
`

export const InputNumberInput = styled.input`
    background-color: transparent;
    border: 0;
    width: 2rem;
    text-align: center;
`