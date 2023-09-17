import styled from 'styled-components';
import React from "react";

import ProjetoFotoSala from '../../assets/Projeto-FotoSala.png';
import ProjetoAreaAlagada from '../../assets/Projeto-AreaAlagada.png';

import ProjetoRatingCards from './Projeto-RatingCards';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const ProjSection01 = styled.div`
  padding: 5% 2%;
  width: 96%;
  display: grid;
  grid-template-columns: 4fr 6fr;
  background-color: #fff;
  align-items: center;
  gap: 2vw;
  

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const ProjSection02 = styled.div`
  padding: 5% 2%;
  width: 96%;
  display: grid;
  grid-template-columns: 6fr 4fr;
  background-color: #fff;
  align-items: center;
  gap: 2vw;
  

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const ProjSection01Texto = styled.div`
  gap: 2vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media (max-width: 600px) {
    align-items: center;
  }

`;

const ProjSection01H1 = styled.h1`
  color: #5d5a88;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: clamp(2.188rem, 1.477rem + 1.894vw, 3.75rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 3vw;
`;

const ProjSection01SubTitulo = styled.h2`
  color: #5d5a88;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: clamp(1.563rem, 1.136rem + 1.136vw, 2.5rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: justify;
`;

const ProjSection01P = styled.p`
  color: #3D6CA2;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: clamp(0.75rem, 0.381rem + 0.985vw, 1.563rem);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: justify;
  width: 90%;

  @media (max-width: 600px) {
    width: 70%; 
  }
`;


const ProjImagem = styled.img`

width: 100%;
height: 100%;

`;

const ProjSection03 = styled.div`
  padding: 5% 2%;
  width: 96%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5%;
  margin-bottom: 2vw;
`;

const ProjSection01Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 95%;
  gap: 2vw;
  height: 1100%;
`;


function Projeto() {
  const avaliacoes = [
    {
      Rating: 5,
      Comentario: 'Adorei o site, muito intuitivo e fácil de usar!',
      Nome: 'Luciano Gimenos',
      Localizacao: 'Osasco - SP'
    },
    {
      Rating: 4,
      Comentario: '',
      Nome: 'Fernando Gimenos',
      Localizacao: 'Osasco - SP'
    },
    {
      Rating: 3,
      Comentario: '',
      Nome: 'Maria Gimenos',
      Localizacao: 'Osasco - SP'
    },
    {
      Rating: 5,
      Comentario: '',
      Nome: 'Carlos Gimenos',
      Localizacao: 'Osasco - SP'
    },
    {
      Rating: 4,
      Comentario: '',
      Nome: 'Fernando Gimenos',
      Localizacao: 'Osasco - SP'
    },
    {
      Rating: 3,
      Comentario: '',
      Nome: 'Maria Gimenos',
      Localizacao: 'Osasco - SP'
    },
    {
      Rating: 5,
      Comentario: '',
      Nome: 'Carlos Gimenos',
      Localizacao: 'Osasco - SP'
    },
  ];
    
    return (
        <div className="Perguntas">
            <ProjSection01H1>Sobre o Projeto</ProjSection01H1> 
            <ProjSection01 style={{backgroundColor: "#E8EFF7"}}>
                <ProjImagem src={ProjetoFotoSala} alt="Foto da sala de aula" />
                <ProjSection01Texto>
                  <ProjSection01SubTitulo>Como tudo começou</ProjSection01SubTitulo>
                  <ProjSection01P>
                    Movidos pela visão da IBM de criar cidades mais inteligentes e sustentáveis, encontramos inspiração para nosso projeto na faculdade FIAP. Ao aceitarmos o desafio, decidimos unir nossos talentos e paixões para criar algo duradouro. Com a iniciativa da IBM como nosso farol, começamos a trabalhar com determinação, moldando um projeto que não apenas reflete nossa ambição, mas também nosso compromisso com o futuro da nossa cidade.
                  </ProjSection01P>
                </ProjSection01Texto>
            </ProjSection01>

            <ProjSection02 style={{backgroundColor: "#789CBC4D"}}>
                <ProjSection01Texto>
                  <ProjSection01SubTitulo>Nossa missão</ProjSection01SubTitulo>
                  <ProjSection01P>
                  Nosso compromisso é transformar nossa cidade em um ambiente mais inteligente e sustentável por meio de nosso projeto. Através da aplicação inovadora de tecnologia e ideias, estamos determinados a criar soluções tangíveis que melhorem a qualidade de vida dos cidadãos. Valorizamos a colaboração, a criatividade e a dedicação à causa. Nossa missão é pavimentar um caminho para um futuro mais promissor, onde cada passo conta na construção de uma comunidade mais eficiente e consciente do meio ambiente. Juntos, estamos impulsionando o progresso e o impacto positivo em nossa cidade.
                  </ProjSection01P>
                </ProjSection01Texto>
                <ProjImagem src={ProjetoAreaAlagada} alt="Foto da sala de aula" />
            </ProjSection02>

            <ProjSection03>
            <ProjSection01H1>Avaliações do site!</ProjSection01H1> 
              <ProjSection01Cards>
                <Slider dots infinite autoplay slidesToShow={4} centerMode={true} autoplaySpeed={5000} style={{width:"100%"}}
                responsive={[
                  {
                    breakpoint: 1640,
                    settings: {
                      slidesToShow: 3,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 1300,
                    settings: {
                      fade: false,
                      slidesToShow: 2,
                      initialSlide: 2
                    }
                  },
                  {
                    breakpoint: 850,
                    settings: {
                      fade: false,
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]}
                >
                  {avaliacoes.map((avaliacao, index) => (
                    <ProjetoRatingCards 
                    key={index} 
                    Rating={avaliacao.Rating} 
                    Comentario={avaliacao.Comentario} 
                    Nome={avaliacao.Nome} 
                    Localizacao={avaliacao.Localizacao}
                    />
                  ))}
                </Slider>
              </ProjSection01Cards>
            </ProjSection03>


        </div>
    );
}

export default Projeto;



