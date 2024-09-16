import { HeroContainer, HeroContent, HeroImage, HeroSection, Icon, QualitiesContainer } from "./style";
import heroCoffee from "../../../assets/hero-coffe.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Hero() {
    return (
        <HeroSection>
            <HeroContainer>
                <HeroContent>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <QualitiesContainer>
                        <div>
                            <Icon bgcolor='yellow-dark'>
                                <ShoppingCart size={16} weight="fill" />
                            </Icon>
                            <span>Compra simples e segura</span>
                        </div>
                        <div>
                            <Icon bgcolor="base-text">
                                <Package size={16} weight="fill" />
                            </Icon>
                            <span>Embalagem mantém o café intacto</span>
                        </div>
                        <div>
                            <Icon bgcolor="yellow">
                                <Timer size={16} weight="fill" />
                            </Icon>
                            <span>Entrega rápida e rastreada</span>
                        </div>
                        <div>
                            <Icon bgcolor="purple">
                                <Coffee size={16} weight="fill" />
                            </Icon>
                            O <span>café chega fresquinho até você</span>
                        </div>
                    </QualitiesContainer>
                </HeroContent>
                <HeroImage src={heroCoffee} alt="Café sendo derramado em uma xícara" />
            </HeroContainer>
        </HeroSection>
    )
}