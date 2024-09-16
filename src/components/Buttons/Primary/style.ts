import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const PrimaryButtonContainer = styled.div`
    button{
        background-color: ${props => props.theme.colors['yellow']};
        color: ${props => props.theme.colors['white']};
        padding: 0.5rem 0.75rem;
        border-radius: 6px;
        cursor: pointer;
        ${mixins.fonts.buttonG}
        transition: background-color 0.2s;

        &:hover {
            background-color: ${props => props.theme.colors['yellow-dark']};
        }
    }
`