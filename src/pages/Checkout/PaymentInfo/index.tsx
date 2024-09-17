import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { InpuText } from "../../../components/Inputs/Text";
import { AddressContainer, PaymentInfoContainer, PaymentMethodsContainer } from "./style";

export function PaymentInfo() {
    return (
        <PaymentInfoContainer>
            <h2>Complete seu pedido</h2>
            <AddressContainer>
                <div className="title">
                    <MapPinLine size={20} />
                    <div>
                        <h3>Endereço de entrega</h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </div>
                <div className="form">
                    <div>
                        <InpuText width="fit-content" label="CEP" required />
                    </div>
                    <div>
                        <InpuText label="Rua" required />
                    </div>
                    <div>
                        <InpuText width="100%" maxWidth="12.5rem" label="Número" required />
                        <InpuText label="Complemento" required />
                    </div>
                    <div>
                        <InpuText width="100%" maxWidth="12.5rem" label="Bairro" required />
                        <InpuText label="Cidade" required />
                        <InpuText width="5.75rem" label="UF" required />
                    </div>
                </div>
            </AddressContainer>
            <PaymentMethodsContainer>
                <div className="title">
                    <CurrencyDollar size={20} />
                    <div>
                        <h3>Pagamento</h3>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </div>
                <div className="selectPaymentMethod">
                    <div>
                        <CreditCard size={20} />
                        <span>
                            CARTÃO DE CRÉDITO
                        </span>
                    </div>
                    <div>
                        <Bank size={20} />
                        <span>
                            CARTÃO DE DÉBITO
                        </span>
                    </div>
                    <div>
                        <Money size={20} />
                        <span>
                            DINHEIRO
                        </span>
                    </div>
                </div>
            </PaymentMethodsContainer>
        </PaymentInfoContainer>
    )
}