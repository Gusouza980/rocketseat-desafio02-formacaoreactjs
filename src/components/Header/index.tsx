import { ButtonsContainer, CartButtonContainer, HeaderContainer, SelectedPlaceButtonContainer } from "./style";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <ButtonsContainer>
                <SelectedPlaceButtonContainer>
                    <MapPin size={20} />
                    <span>Serrania</span>
                </SelectedPlaceButtonContainer>
                <CartButtonContainer>
                    <ShoppingCart size={20} />
                </CartButtonContainer>
            </ButtonsContainer>
        </HeaderContainer>
    )
}