import { OrderSummaryContainer, ProductItem, ProductList, TotalContainer } from "./style";
import americano from '../../../assets/coffes/americano.png';
import { InputNumber } from "../../../components/Inputs/Number";
import { SecondaryButton } from "../../../components/Buttons/Secondary";
import { Trash } from "phosphor-react";
import { PrimaryButton } from "../../../components/Buttons/Primary";

export function OrderSummary() {
    return (
        <OrderSummaryContainer>
            <h2>Resumo do pedido</h2>
            <div>
                <ProductList>
                    <ProductItem>
                        <img src={americano} alt="" />
                        <div>
                            <span>
                                Café Americano
                            </span>
                            <div>
                                <InputNumber />
                                <SecondaryButton height="2.375rem">
                                    <Trash size={16} />
                                    REMOVER
                                </SecondaryButton>
                            </div>
                        </div>
                        <span>
                            R$ 9,90
                        </span>
                    </ProductItem>
                    <ProductItem>
                        <img src={americano} alt="" />
                        <div>
                            <span>
                                Café Americano
                            </span>
                            <div>
                                <InputNumber />
                                <SecondaryButton height="2.375rem">
                                    <Trash size={16} />
                                    REMOVER
                                </SecondaryButton>
                            </div>
                        </div>
                        <span>
                            R$ 9,90
                        </span>
                    </ProductItem>
                </ProductList>
                <TotalContainer>
                    <div>
                        <span>
                            Total de Itens
                        </span>
                        <span>
                            R$ 29,70
                        </span>
                    </div>
                    <div>
                        <span>
                            Entrega
                        </span>
                        <span>
                            R$ 3,50
                        </span>
                    </div>
                    <div className="total">
                        <span>
                            Total
                        </span>
                        <span>
                            R$ 33,20
                        </span>
                    </div>
                </TotalContainer>
                <PrimaryButton width="100%">
                    CONFIRMAR PEDIDO
                </PrimaryButton>
            </div>
        </OrderSummaryContainer>
    )
}