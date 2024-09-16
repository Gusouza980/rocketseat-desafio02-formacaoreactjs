import { CoffeListCard } from "./CoffeListCard";
import { CoffeListContainer, CoffeListSection } from "./style";

export function CoffeList() {
    return (
        <CoffeListSection>
            <CoffeListContainer>
                <h2>Nossos Cafés</h2>
                <div>
                    <CoffeListCard />
                </div>
            </CoffeListContainer>
        </CoffeListSection>
    )
}