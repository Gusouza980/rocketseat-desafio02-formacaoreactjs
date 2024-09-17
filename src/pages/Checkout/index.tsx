import { OrderSummary } from "./OrderSummary";
import { PaymentInfo } from "./PaymentInfo";
import { CheckoutSection } from "./style";

export function Checkout() {
    return (
        <CheckoutSection>
            <PaymentInfo />
            <OrderSummary />
        </CheckoutSection>
    )
}