import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
    ${mixins.containers.content}
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap:0.5rem;
    align-items: center;
    justify-content: end;
`

export const SelectedPlaceButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0 1rem;
    height: 2.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors["purple-light"]};
    color: ${(props) => props.theme.colors["purple"]};
    ${mixins.fonts.textM}
    span{
        line-height: 1;
    }
`

export const CartButtonContainer = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors["yellow-light"]};
    color: ${(props) => props.theme.colors["yellow-dark"]};
    transition: all 0.1s;
    cursor: pointer;
    ${mixins.fonts.textM}

    &:hover{
        background-color: ${(props) => props.theme.colors["yellow-dark"]};
        color: ${(props) => props.theme.colors["yellow-light"]};
        transform: scale(1.1);
    }   
`