import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const PaymentInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    h2{
        ${mixins.fonts.titleXS}
        color: ${props => props.theme.colors['base-subtitle']};
    }
`

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 2.5rem;
    background-color: ${props => props.theme.colors['base-card']};
    border-radius: 6px;

    > div.title{
        display: flex;
        align-items: start;
        width: 100%;
        gap: 0.5rem;
        svg{
            color: ${props => props.theme.colors['yellow-dark']};
        }

        > div{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            h3{
                ${mixins.fonts.textM}
                color: ${props => props.theme.colors['base-subtitle']};
            }
            p{
                ${mixins.fonts.textS}
                color: ${props => props.theme.colors['base-text']};
            }
        }
    }

    > div.form{
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        gap: 1rem;
        > div{
            width: 100%;
            display: flex;
            gap: 1rem;
        }
    }
`

export const PaymentMethodsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 2.5rem;
    background-color: ${props => props.theme.colors['base-card']};
    border-radius: 6px;

    > div.title{
        display: flex;
        align-items: start;
        width: 100%;
        gap: 0.5rem;
        svg{
            color: ${props => props.theme.colors['purple']};
        }

        > div{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            h3{
                ${mixins.fonts.textM}
                color: ${props => props.theme.colors['base-subtitle']};
            }
            p{
                ${mixins.fonts.textS}
                color: ${props => props.theme.colors['base-text']};
            }
        }
    }

    > div.selectPaymentMethod{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;

        > div{
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 0.5rem;
            padding: 1rem;
            border-radius: 6px;
            background-color: ${props => props.theme.colors['base-button']};
            cursor: pointer;
            transition: all 0.2s;
            margin-top: 2rem;

            svg{
                color: ${props => props.theme.colors['purple']};
            }

            span{
                ${mixins.fonts.buttonM}
                line-height: 1;
                color: ${props => props.theme.colors['base-text']};
            }

            &:hover{
                background-color: ${props => props.theme.colors['base-hover']};
            }
        }
    }
`