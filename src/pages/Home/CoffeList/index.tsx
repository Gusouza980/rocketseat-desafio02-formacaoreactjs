import { CoffeListCard } from "./CoffeListCard";
import { CoffeListContainer, CoffeListSection } from "./style";
import { products } from "../../../data/products";
import { Product } from "../../../@types/product";
export function CoffeList() {

    const productList: Product[] = products;

    return (
        <CoffeListSection>
            <CoffeListContainer>
                <h2>Nossos Cafés</h2>
                <div>
                    {productList.map(product => (
                        <CoffeListCard key={product.id} product={product} />
                    ))}
                </div>
            </CoffeListContainer>
        </CoffeListSection>
    )
}