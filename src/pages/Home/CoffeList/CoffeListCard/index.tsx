import { CoffeListCardContainer } from "./style";
import americano from "../../../../assets/coffes/americano.png";


export function CoffeListCard(){
    return (
        <CoffeListCardContainer>
            <img src={americano} alt="" />
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
        </CoffeListCardContainer>
    )
}