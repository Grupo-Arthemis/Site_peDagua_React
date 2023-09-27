import styled from "styled-components";
import MapContainer from "./Map";
import React, { useState } from "react";
import ObterInfo from "./ObterInfo";

const ConsuSection01 = styled.div`
  padding: 5% 2%;
  width: 96%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  gap: 10vh;
`;

const ConsuSection01Texto = styled.div`
  gap: 2vw;
  display: flex;
  flex-direction: column;
`;

const ConsuSection01H1 = styled.h1`
  color: #5d5a88;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: DM Sans;
  font-size: clamp(2.188rem, 1.477rem + 1.894vw, 3.75rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ConsuSection01P = styled.p`
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

const ConsuSection02 = styled.div`
  padding: 5vh 2%;
  width: 96%;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  background-color: #fff;
  align-items: center;
  height: 80vh;
  gap: 2%;
  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.8fr 1.2fr;
    height: 100%;
  }
`;

const ConsuSection02InteractiveArea = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

function Consulta() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="Consulta">
      <ConsuSection01>
        <ConsuSection01Texto>
          <ConsuSection01H1>
            Previsão de clima e alertas de enchentes
          </ConsuSection01H1>
          <ConsuSection01P>
            Obtenha informações climáticas precisas para a sua localização e
            receba alertas de enchentes em nosso portal de consulta climática.
            Esteja preparado e mantenha-se seguro.
          </ConsuSection01P>
        </ConsuSection01Texto>
      </ConsuSection01>
      <ConsuSection02>
        <MapContainer
          styled={{ width: "500px" }}
          onLocationSelect={handleLocationSelect}
        />
          {selectedLocation && (
            <ConsuSection02InteractiveArea>
              <ObterInfo localizacao={selectedLocation} />
            </ConsuSection02InteractiveArea>
          )}
      </ConsuSection02>
    </div>
  );
}

export default Consulta;
