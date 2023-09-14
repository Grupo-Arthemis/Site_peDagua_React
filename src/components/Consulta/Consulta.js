import styled from 'styled-components';
import mapaPlaceHolder from '../../assets/mapaFotoPlaceHolder.png';
import { Wrapper } from "@googlemaps/react-wrapper";

const PergSection01 = styled.div`
  padding: 5% 2%;
  width: 96%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  gap: 10vh;
`;

const PergSection01Texto = styled.div`
  gap: 2vw;
  display: flex;
  flex-direction: column;
`;

const PergSection01H1 = styled.h1`
  color: #5d5a88;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: clamp(2.188rem, 1.477rem + 1.894vw, 3.75rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const PergSection01P = styled.p`
  color: #9795b5;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: clamp(0.75rem, 0.381rem + 0.985vw, 1.563rem);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 70%;
  margin: 0 auto;
`;

const PergSection01Perguntas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;



const PergSection02 = styled.div`
  padding: 5vh 2%;
  width: 96%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  align-items: center;
  height: 75vh;
  gap: 2%;
`;

const PergSection02Mapa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const PergSection02InteractiveArea = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
`;

const PergSection02InteractiveAreaButton = styled.button`
    background-color: #5d5a88;
    color: #fff;
    border: none;
    border-radius: 20px;
    width: 97%;
    height: 5vh;
    font-size: clamp(0.75rem, 0.381rem + 0.985vw, 1.563rem);
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 2vh;
    margin-bottom: 2vh;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #9795b5;
    }
`;

const PergSection02CardContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
  "Card1 Card2"
  "Card1 Card3"; 
  width: 97%;
  height: 100%;
  gap: 2%;
`;

const PergSection02Card1 = styled.div`
  grid-area: Card1;
  background-color: #F7EDED;
  border-radius: 20px;
`;

const PergSection02Card2 = styled.div`
  grid-area: Card2;
  background-color: #EDF2F7;
  border-radius: 20px;
`;

const PergSection02Card3 = styled.div`
  grid-area: Card3;
  background-color: #EDF2F7;
  border-radius: 20px;
`;



function Consulta() {
 
    return (
        <div className="Perguntas">
            <PergSection01>
                <PergSection01Texto>
                    <PergSection01H1>Previsão de clima e alertas de enchentes</PergSection01H1> 
                    <PergSection01P>Obtenha informações climáticas precisas para a sua localização e receba alertas de enchentes em nosso portal de consulta climática. Esteja preparado e mantenha-se seguro.</PergSection01P>
                </PergSection01Texto>
                <PergSection01Perguntas>
                </PergSection01Perguntas>
            </PergSection01>
            <PergSection02>
                <PergSection02Mapa>
                    <img src={mapaPlaceHolder} alt="Mapa" width={"100%"} height={"100%"} style={{borderRadius: 10}}/>
                </PergSection02Mapa>

                <PergSection02InteractiveArea>
                    <div style={{width: "97%"}} >
                        <PergSection01P>CEP</PergSection01P>
                        <input type="text" placeholder="Digite seu CEP" style={{width: "97%", height: "5vh", borderRadius: 10, border: "1px solid #9795b5"}}/>
                        <PergSection01P>Usar localização Atual</PergSection01P>
                        <PergSection02InteractiveAreaButton>Consultar localização</PergSection02InteractiveAreaButton>
                    </div>
                    <PergSection02CardContainer>

                      <PergSection02Card1>

                      </PergSection02Card1>
                      <PergSection02Card2>

                      </PergSection02Card2>
                      <PergSection02Card3>

                      </PergSection02Card3>

                    </PergSection02CardContainer>
                </PergSection02InteractiveArea>
            </PergSection02>
        </div>
    );
}

export default Consulta;



