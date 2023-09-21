import styled from "styled-components";
import MapContainer from "./Map";
import React, { useState } from "react";
import ObterInfo from "./ObterInfo";

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
  font-feature-settings: "clig" off, "liga" off;
  font-family: DM Sans;
  font-size: clamp(2.188rem, 1.477rem + 1.894vw, 3.75rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const PergSection01P = styled.p`
  color: #9795b5;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
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
  position: relative;
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

function Consulta() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="Perguntas">
      <PergSection01>
        <PergSection01Texto>
          <PergSection01H1>
            Previsão de clima e alertas de enchentes
          </PergSection01H1>
          <PergSection01P>
            Obtenha informações climáticas precisas para a sua localização e
            receba alertas de enchentes em nosso portal de consulta climática.
            Esteja preparado e mantenha-se seguro.
          </PergSection01P>
          <PergSection01P>
            Essa pagina está sob manutenção, sua atividade será normalizada a
            partir do dia 26/09/2023, por enquanto somente a pesquisa de
            endereço está disponivel!
          </PergSection01P>
        </PergSection01Texto>
      </PergSection01>
      <PergSection02>
        <MapContainer
          styled={{ width: "500px" }}
          onLocationSelect={handleLocationSelect}
        />
        <PergSection02InteractiveArea>
          {selectedLocation && (
            <PergSection02InteractiveArea>
              <ObterInfo localizacao={selectedLocation} />
            </PergSection02InteractiveArea>
          )}
        </PergSection02InteractiveArea>
      </PergSection02>
    </div>
  );
}

export default Consulta;
