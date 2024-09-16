import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const CoffeListSection = styled.section`
    width: 100%;
    
`

export const CoffeListContainer = styled.div`
    ${mixins.containers.content}
    display: flex;
    flex-direction: column;
    padding: 1.875rem 0;
    gap: 3.375rem;

    h2{
        ${mixins.fonts.titleL}
        color: ${props => props.theme.colors['base-subtitle']};
    }

    > div{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        gap: 1.875rem;
    }
`