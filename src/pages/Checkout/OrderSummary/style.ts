import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const OrderSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 28.125rem;
    width: 100%;
    h2{
        ${mixins.fonts.titleXS}
        color: ${props => props.theme.colors['base-subtitle']};
    }
    > div{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
        padding: 2.5rem;
        background-color: ${props => props.theme.colors['base-card']};
        border-top-right-radius: 30px;
        border-bottom-left-radius: 30px;
    }
`

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProductItem = styled.div`
    display: flex;
    gap: 1rem;
    align-items: start;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme.colors['base-button']};
    margin-bottom: 1.5rem;
    > img{
        width: 4rem;
        height: 4rem;
        object-fit: cover;
    }

    > div{
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 0.5rem;
        
        > span{
            ${mixins.fonts.textM}
            color: ${props => props.theme.colors['base-subtitle']};
        }

        > div{
            display: flex;
            gap: 0.5rem;

            svg{
                color: ${props => props.theme.colors['purple']};
            }
        }
    }

    > span{
        ${mixins.fonts.titleS}
        color: ${props => props.theme.colors['base-text']};
    }
`

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1rem;
    ${mixins.fonts.textS}
    color: ${props => props.theme.colors['base-text']};

    > div{
        display: flex;
        justify-content: space-between;
    }

    >div.total{
        ${mixins.fonts.titleS}
        color: ${props => props.theme.colors['base-subtitle']};
        line-height: 1;
    }
`