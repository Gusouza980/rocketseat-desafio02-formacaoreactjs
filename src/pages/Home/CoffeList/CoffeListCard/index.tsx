import { CoffeListCardContainer, CoffeListCardFooter, TagContainer } from "./style";
import americano from "../../../../assets/coffes/americano.png";
import { InputNumber } from "../../../../components/Inputs/Number";
import { ShoppingCart } from "phosphor-react";


export function CoffeListCard() {
    return (
        <CoffeListCardContainer>
            <img src={americano} alt="" />
            <TagContainer>
                <span>TRADICIONAL</span>
            </TagContainer>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <CoffeListCardFooter>
                <div className="price-container">
                    <span className="prefix">R$</span>
                    <span className="price">9,90</span>
                </div>
                <div className="quantity-container">
                    <InputNumber />
                    <button>
                        <ShoppingCart size={24} color="#fff" weight="fill" />
                    </button>
                </div>
            </CoffeListCardFooter>
        </CoffeListCardContainer>
    )
}