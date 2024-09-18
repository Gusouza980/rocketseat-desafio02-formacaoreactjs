import { CoffeListCardContainer, CoffeListCardFooter, TagContainer } from "./style";
import americano from "../../../../assets/coffes/americano.png";
import { InputNumber } from "../../../../components/Inputs/Number";
import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Product } from "../../../../@types/product";
import { useCart } from "../../../../hooks/useCart";

interface CoffeListCardProps {
    product: Product;
}

export function CoffeListCard({ product }: CoffeListCardProps) {
    const [quantity, setQuantity] = useState(1);
    const {addItem} = useCart();

    function incrementQuantity() {
        if (quantity >= 9) return;
        setQuantity(quantity + 1);
    }

    function decrementQuantity() {
        if (quantity == 1) return;
        setQuantity(quantity - 1);
    }

    function handleAddToCart() {
        addItem(product, quantity);
    }

    return (
        <CoffeListCardContainer>
            <img src={product.image} alt="" />
            <TagContainer >
                {product.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </TagContainer>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <CoffeListCardFooter>
                <div className="price-container">
                    <span className="prefix">R$</span>
                    <span className="price">{product.price}</span>
                </div>
                <div className="quantity-container">
                    <InputNumber quantity={quantity} increment={incrementQuantity} decrement={decrementQuantity} />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart size={24} color="#fff" weight="fill" />
                    </button>
                </div>
            </CoffeListCardFooter>
        </CoffeListCardContainer>
    )
}