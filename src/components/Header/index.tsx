import { ButtonsContainer, CartButtonContainer, HeaderContainer, SelectedPlaceButtonContainer } from "./style";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {

    const { cart } = useCart();

    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} alt="" />
            </NavLink>
            <ButtonsContainer>
                <SelectedPlaceButtonContainer>
                    <MapPin size={20} />
                    <span>Serrania</span>
                </SelectedPlaceButtonContainer>
                <NavLink to="/checkout">
                    <CartButtonContainer>
                        <ShoppingCart size={20} />
                        <div>
                            { cart.items.length }
                        </div>
                    </CartButtonContainer>
                </NavLink>
            </ButtonsContainer>
        </HeaderContainer>
    )
}