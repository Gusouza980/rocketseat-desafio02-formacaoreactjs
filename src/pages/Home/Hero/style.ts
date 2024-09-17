import styled from "styled-components";
import { mixins } from "../../../styles/mixins";
import heroBackground from '../../../assets/hero-background.png'


export const HeroSection = styled.section`
    width: 100%;
    background-image: url(${heroBackground});
    padding: 6.25rem 0;
`

export const HeroContainer = styled.div`
    ${mixins.containers.content}
    display: flex;
    align-items: center;
    gap: 3.5rem;
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: start;
    
    h1{
        ${mixins.fonts.titleXL}
        color: ${props => props.theme.colors['base-title']};
    }

    p{
        ${mixins.fonts.textL}
        color: ${props => props.theme.colors['base-subtitle']};
        margin-top: 1rem;
    }
`

export const QualitiesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 4.375rem;
    grid-row-gap: 1.25rem;
    > div{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.5rem;

        span{
            ${mixins.fonts.textM}
            color: ${props => props.theme.colors['base-text']};
        }
    }
`

interface IconProps {
    bgcolor: 'yellow' | 'base-text' | 'yellow-dark' | 'purple';
}

export const Icon = styled.div<IconProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors[props.bgcolor] || props.theme.colors['purple']};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;

    svg{
        color: ${props => props.theme.colors['white']};
    }
`

export const HeroImage = styled.img`
    width: 100%;
    max-width: 29.75rem;
    height: 100%;
    max-width: 29.75rem;
    object-fit: cover;
    object-position: center;
`