import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CoffeListCardContainer = styled.div`
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1.25rem;
    padding: 1.25rem;
    background-color: ${props => props.theme.colors['base-card']};
    border-radius: 0.625rem;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

    img{
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -3.75rem;
    }

    h3{
        ${mixins.fonts.titleS}
        color: ${props => props.theme.colors['base-subtitle']};
    }

    p{
        ${mixins.fonts.textS}
        color: ${props => props.theme.colors['base-label']};
        text-align: center;
    }
`