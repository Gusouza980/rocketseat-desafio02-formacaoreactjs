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
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    /* box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1); */

    > img{
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -3.75rem;
    }

    > h3{
        ${mixins.fonts.titleS}
        color: ${props => props.theme.colors['base-subtitle']};
    }

    > p{
        ${mixins.fonts.textS}
        color: ${props => props.theme.colors['base-label']};
        text-align: center;
    }
`

export const TagContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    span{
        ${mixins.fonts.tag}
        color: ${props => props.theme.colors['yellow-dark']};
        background-color: ${props => props.theme.colors['yellow-light']};
        padding: 0.3125rem 0.625rem;
        border-radius: 100px;
    }
`

export const CoffeListCardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > div.price-container{
        > span.prefix{
            ${mixins.fonts.textS}
            color: ${props => props.theme.colors['base-text']};
        }
        >span.price{
            ${mixins.fonts.titleM}
            color: ${props => props.theme.colors['base-text']};
            margin-left: 0.2rem;
        }
    }

    > div.quantity-container{
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: end;

        button{
            background-color: ${props => props.theme.colors['purple']};
            border: none;
            border-radius: 6px;
            width: 2.375rem;
            height: 2.375rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            color: white;
            transition: all 0.2s;

            &:hover{
                background-color: ${props => props.theme.colors['purple-dark']};
            }
        }
    }
    
`