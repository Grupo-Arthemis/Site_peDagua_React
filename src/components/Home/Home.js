import styled from 'styled-components';
import imagemDeFundo01 from '../../assets/fundo/fundo-section-1.jpg';
import HomeCard from './Home-Card';

const HomeSection01 = styled.section`
    padding: 10% 2%;
    width: 96%;
    height: 70vh;
    display: grid;
    grid-template-columns: 60% 40%;
    background-image: url(${imagemDeFundo01});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    height: 70vh;
    padding: 10vw 6vw;
    width: 88vw;
  }
`;

const HomeSection01Conteudo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`;

const HomeSection01ConteudoTitulo = styled.h1`
color: #fff;
font-feature-settings: 'clig' off, 'liga' off;
font-family: DM Sans;
font-style: normal;
line-height: 1.2;
font-size: clamp(2.5rem, 1.648rem + 2.273vw, 4.375rem);
font-weight: 700;
`;

const HomeSection01ConteudoSubTitulo = styled.h2`
color: #fff;
font-feature-settings: 'clig' off, 'liga' off;
font-family: DM Sans;
font-style: normal;
line-height: 1.2;
font-size: clamp(1.5rem, 0.761rem + 1.97vw, 3.125rem);
font-weight: 400;
`;

const HomeSection01ConteudoBotoesContainer = styled.h2`
display: flex;
width: 100%;
gap: 1vw;
`;

const ConsultButton = styled.button`
  color: #fff;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: clamp(0.813rem, 0.731rem + 0.432vw, 1.25rem);
  font-style: normal;
  font-weight: 700;
  border-radius: 40px;
  display: flex;
  padding: 2% 3%;
  align-items: center;
  gap: 8px;
  background-color: #238ca4;
  border: none;

  &:hover {
    color: #fff;
    background-color: #403e61;
  }
`;

const LearnMoreButton = styled.button`
  color: #5d5a88;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: clamp(0.813rem, 0.731rem + 0.432vw, 1.25rem);
  font-style: normal;
  font-weight: 700;
  border-radius: 40px;
  display: flex;
  padding: 2% 3%;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  border: 1px solid #d4d2e3;

  &:hover {
    color: #fff;
    background-color: #403e61;
  }
`;



const HomeSection02 = styled.section`
    padding: 5% 2% 4% 2%;
    width: 96%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
        padding: 10% 2% 10% 2%;
    }
`;

const Section02VideoPitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;

    @media only screen and (max-width: 600px) {
        gap: 10vw;
    }
`;

const HomeSection02Titulo = styled.section`
    color: #5D5A88;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: clamp(1.25rem, 0.852rem + 1.061vw, 2.125rem);
    font-style: normal;
    font-weight: 700;
  }
`;

const HomeSection02SubTitulo = styled.section`
    color: #5D5A88;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: clamp(1rem, 0.659rem + 0.909vw, 1.75rem);
    font-style: normal;
    font-weight: 500;
  }
`;

const Section02Video = styled.div`
  background: #eae8f0;
  border-radius: 20px;
  height: 25vw;
  width: 50vw;
  margin: auto;

    @media only screen and (max-width: 600px) {

        height: 50vw;
        width: 90vw;
    }

`;



const HomeSection03 = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 96%;
    height: 93%;
    gap: 2vw;
    padding: 4% 2% 5% 2%;
    margin-bottom: 5%;

    @media only screen and (max-width: 600px) {
        gap: 10vw;
        padding: 10% 2% 10% 2%;
    }
  }
`;

const HomeSection03CardContainer = styled.section`
    align-items: center;
    display: flex;
    gap: 5vw;
    height: 50%;
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width: 600px) {

        flex-direction: column;
        height: 100%;
        gap: 10vw;
    }
  }
`;

const HomeSection03Titulo = styled.section`
    color: #5D5A88;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    font-family: DM Sans;
    font-size: clamp(1.25rem, 0.852rem + 1.061vw, 2.125rem);
    font-style: normal;
    font-weight: 700;
  }
`;




function Home() {
    const cardData = [
        {
            Titulo: 'Milhares de vidas salvas',
            Conteudo: "Nosso sistema 'Pé D'Água' já contribuiu para salvar milhares de vidas, tornando nossa cidade mais segura a cada dia.",
        },
        {
            Titulo: 'Novas tecnologias',
            Conteudo: 'Estamos sempre em busca de novas tecnologias para melhorar nossos serviços e garantir a segurança da população.',
        },
        {
            Titulo: 'Atendimento 24 horas',
            Conteudo: 'Nossa equipe está disponível 24 horas por dia para atender emergências e garantir a segurança da população.',
        },
      ];

    return (
        <div className="Home">
            <HomeSection01>
                <HomeSection01Conteudo>
                    <HomeSection01ConteudoTitulo>Um sistema de alerta e monitoramento de enchentes</HomeSection01ConteudoTitulo>
                    <HomeSection01ConteudoSubTitulo>Mantenha-se seguro das águas. Sua fonte confiável para informações precisas e atualizadas sobre condições climáticas e níveis de água, ajudando você a tomar decisões bem-informadas.</HomeSection01ConteudoSubTitulo>
                    <HomeSection01ConteudoBotoesContainer>
                        <ConsultButton>Consulte a sua localização  <i className="fas fa-arrow-right"></i></ConsultButton>
                        <LearnMoreButton>Saiba mais  <i className="fas fa-arrow-right"></i></LearnMoreButton>
                    </HomeSection01ConteudoBotoesContainer>
                </HomeSection01Conteudo>
            </HomeSection01>

            <HomeSection02>
                <Section02VideoPitchContainer>
                    <HomeSection02Titulo>Vivencie e encontre.</HomeSection02Titulo>
                    <HomeSection02SubTitulo>Motivos pelos quais você pode confiar em nós.</HomeSection02SubTitulo>
                    <Section02Video></Section02Video>
                </Section02VideoPitchContainer>
            </HomeSection02>

            <HomeSection03>
                    <HomeSection03Titulo>Nossos resultados</HomeSection03Titulo>
                    <HomeSection03CardContainer>
                    {cardData.map((card, index) => (
                        <HomeCard key={index} Titulo={card.Titulo} Conteudo={card.Conteudo}/>
                    ))}
                    </HomeSection03CardContainer>
            </HomeSection03>
        </div>
    );
}

export default Home;
