import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #034C5C;

  display: flex;
  flex-direction: column;

  padding: 2vw 0 0 0;
  flex-direction: column;
  align-items: center;
  color: aliceblue;
  gap: 2vw;

`;

const FooterTextos = styled.div`
display: flex;
padding: 0 2vw;
align-items: flex-start;
justify-content: space-between;
align-self: stretch;
gap: 6vw;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 10vw;
    padding: 0 6vw;
  }
`;

const FooterTextosColuna = styled.ul`
display: flex;
height: 100%;
width: 100%;
flex-direction: column;
align-items: flex-start;
  }
`;

const FooterTextosTitulo = styled.h1`
color: #FFF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Megrim;
font-size: clamp(2.5rem, 2.384rem + 0.617vw, 3.125rem);
font-style: normal;
font-weight: 500;
line-height: normal; 
  }
`;

const FooterTextosSubTitulo = styled.h1`
color: #FFF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: DM Sans;
font-size: clamp(0.938rem, 0.822rem + 0.617vw, 1.563rem);
font-style: normal;
font-weight: 400;
line-height: normal; 
  }
`;

const FooterTextosIcones = styled.a`
  margin-right: 1vw;
  font-size: clamp(1.25rem, 1.134rem + 0.617vw, 1.875rem);
  }
`;

const FooterTextosTopicos = styled.li`
  color: #FFF;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Text single/200/Regular */
  font-family: DM Sans;
  font-size: clamp(0.938rem, 0.903rem + 0.185vw, 1.125rem);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1.2vw;
  cursor: pointer;
  }
`;

const FooterTextosTopicosTitulo = styled.h3`
  color: #FFF;
  font-feature-settings: 'clig' off, 'liga' off;

  font-family: DM Sans;
  font-size: clamp(0.938rem, 0.88rem + 0.309vw, 1.25rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
`;

const FooterBottom = styled.div`
border-top: 1px solid #F7F6FF;
width: 100%;
 }
`;

const FooterBottomCopyright = styled.div`
color: #F7F6FF;
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;

font-family: DM Sans;
font-size: clamp(0.938rem, 0.88rem + 0.309vw, 1.25rem);
font-style: normal;
font-weight: 400;
line-height: normal;
width: 100%;
padding: 2vw 0;
 }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTextos>
        <FooterTextosColuna>
          <li>
            <FooterTextosTitulo>pé d’água</FooterTextosTitulo>
          </li>
          <li>
            <FooterTextosSubTitulo>Um sistema de alerta e monitoramento de enchentes</FooterTextosSubTitulo>
          </li>
          <li>
            <div>
              <FooterTextosIcones href="#"><i className="fab fa-facebook"></i></FooterTextosIcones>
              <FooterTextosIcones href="#"><i className="fab fa-twitter"></i></FooterTextosIcones>
              <FooterTextosIcones href="#"><i className="fab fa-youtube"></i></FooterTextosIcones>
              <FooterTextosIcones href="#"><i className="fab fa-instagram"></i></FooterTextosIcones>
            </div>
          </li>
        </FooterTextosColuna>
        <FooterTextosColuna>
          <FooterTextosTopicos><FooterTextosTopicosTitulo>Sobre</FooterTextosTopicosTitulo></FooterTextosTopicos>
          <FooterTextosTopicos><a href="#">Sobre o projeto</a></FooterTextosTopicos>
          <FooterTextosTopicos><a href="#">Sobre nós</a></FooterTextosTopicos>
          <FooterTextosTopicos><a href="#">Perguntas frequentes</a></FooterTextosTopicos>
          <FooterTextosTopicos><a href="#">Galeria</a></FooterTextosTopicos>
        </FooterTextosColuna>
        <FooterTextosColuna>
          <FooterTextosTopicos><FooterTextosTopicosTitulo>Sobre</FooterTextosTopicosTitulo></FooterTextosTopicos>
          <FooterTextosTopicos><a href="#">Sobre o projeto</a></FooterTextosTopicos>
          <FooterTextosTopicos><a href="#">Sobre nós</a></FooterTextosTopicos>
          <FooterTextosTopicos><a href="#">Perguntas frequentes</a></FooterTextosTopicos>
          <FooterTextosTopicos><a href="#">Galeria</a></FooterTextosTopicos>
        </FooterTextosColuna>
        <FooterTextosColuna>
          <FooterTextosTopicos><FooterTextosTopicosTitulo>Sobre</FooterTextosTopicosTitulo></FooterTextosTopicos>
          <FooterTextosTopicos><a href="#">Sobre o projeto</a></FooterTextosTopicos>
          <FooterTextosTopicos><a href="#">Sobre nós</a></FooterTextosTopicos>
          <FooterTextosTopicos><a href="#">Perguntas frequentes</a></FooterTextosTopicos>
          <FooterTextosTopicos><a href="#">Galeria</a></FooterTextosTopicos>
        </FooterTextosColuna>
      </FooterTextos>
      <FooterBottom>
        <FooterBottomCopyright>
          Copyright © 2023 Pé d´água | All Rights Reserved | Terms and
          Conditions | Privacy Policy
        </FooterBottomCopyright>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;