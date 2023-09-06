import styled from 'styled-components';
import React from 'react';

const Card = styled.div`
    align-items: start;
    background: #FFF;
    border: 1px solid #D4D2E3;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 2vw;
    height: 100%;
    justify-content: space-around;
    padding: 2% 3%;
    width: 30%;

    @media(max-width: 600px){
        width: 90%;
        padding: 10% 3%;
    }
`;

const CardTitulo = styled.h1`
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    color: #5D5A88;
    font-size: clamp(1.563rem, 1.136rem + 1.136vw, 2.5rem);
    font-weight: 700;
    text-align: left;
`;

const CardConteudo = styled.h3`
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    color: #9795B5;
    font-size: clamp(1.125rem, 0.784rem + 0.909vw, 1.875rem);
    font-weight: 500;
    text-align: left;
`;

function HomeCards({Titulo, Conteudo}){
    return(
        <Card>
            <CardTitulo>{Titulo}</CardTitulo>
            <CardConteudo>{Conteudo}</CardConteudo>
        </Card>
    );
}

export default HomeCards;