import styled from 'styled-components';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 390px;
    height: 450px;
    border-radius: 20px;
    border: 1px solid #D4D2E3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: space-evenly;
    padding: 3% 0 5% 0;


    @media (max-width: 600px) {
        width: 90%;
        height: 420px;
        margin-bottom: 7%;
    }
`

const CardNome = styled.h2`
    color: #5D5A88;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    font-family: DM Sans;
    font-size: clamp(1.25rem, 1.023rem + 0.606vw, 1.75rem);
    font-style: normal;
    font-weight: 700;
    line-height: normal; 
`

const CardIdade = styled.h3`
    color: #8D8BA7;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    font-family: DM Sans;
    font-size: clamp(0.875rem, 0.761rem + 0.303vw, 1.125rem);
    font-style: normal;
    font-weight: 700;
    line-height: 20px; 
    letter-spacing: 1.8px;
    text-transform: uppercase;
`

const CardDescricao = styled.p`
    color: #9795B5;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    font-family: DM Sans;
    font-size: clamp(0.875rem, 0.761rem + 0.303vw, 1.125rem);
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    width: 90%;
`

const CardRedesSociais = styled.ul`
display: flex;
width: 60%;
justify-content: space-evenly;
`


function GrupoCards({Foto, Nome, Idade, Descricao, Emoji, Facebook, Twitter, Instagram, Linkedin}) {
    return (
        <CardContainer>
            <img src={Foto} alt="Foto do grupo" />
            <CardNome>{Nome}</CardNome>
            <CardIdade>{Idade}</CardIdade>
            <CardDescricao>{Descricao}</CardDescricao>
            <CardDescricao>{Emoji}</CardDescricao>
            <CardRedesSociais>
                <li><a href={Facebook}><FacebookIcon sx={{ color: '#8D8BA7', backgroundColor: '#F2F1FA', borderRadius: '10%'}}/></a></li>
                <li><a href={Twitter}><TwitterIcon sx={{ color: '#8D8BA7', backgroundColor: '#F2F1FA', borderRadius: '10%'}}/></a></li>
                <li><a href={Instagram}><InstagramIcon sx={{ color: '#8D8BA7', backgroundColor: '#F2F1FA', borderRadius: '10%'}}/></a></li>
                <li><a href={Linkedin}><LinkedInIcon sx={{ color: '#8D8BA7', backgroundColor: '#F2F1FA', borderRadius: '10%'}}/></a></li>
            </CardRedesSociais>
        </CardContainer>
    );
}

export default GrupoCards;