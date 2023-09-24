import data from "./DispositivosGuardaChuva.json";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

import EnchenteAlta from "../../assets/cardsConsultasIcons/enchente-icone-alto.svg";
import EnchenteMedio from "../../assets/cardsConsultasIcons/enchente-icone-medio.svg";
import EnchenteBaixo from "../../assets/cardsConsultasIcons/enchente-icone-baixo.svg";




const ConsuSection02CardContainer = styled.div`
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

const ConsuSection02Card1 = styled.div`
  grid-area: Card1;
  background-color: #f7eded;
  border-radius: 20px;
  display flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const ConsuSection02Card2 = styled.div`
  grid-area: Card2;
  background-color: #edf2f7;
  border-radius: 20px;
`;

const ConsuSection02Card3 = styled.div`
  grid-area: Card3;
  background-color: #edf2f7;
  border-radius: 20px;
`;



  const ConsuCardTitulo = styled.h1`
  color: #C8575E;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
`;

const ConsuCardDivisao = styled.div`
  background-color: #C8575E;
  margin: 8px auto;
  height: 2px;
  width: 80%;
`;

const ConsuCardSubTitulo = styled.h2`
  color: #000;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const ConsuCardSubInfo = styled.h2`
  color: #000;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

function VerificarAreas(localizacao, setNivelDeChuva, setUmidade, setTemperatura) {
  let guardaChuvaIdEncontrado = null;

  for (let i = 0; i < data.length; i++) {
    const GuardaChuva = data[i];
    var vertice_1 = GuardaChuva.GuardaChuvaArea.vertice_1;
    var vertice_2 = GuardaChuva.GuardaChuvaArea.vertice_2;
    var vertice_3 = GuardaChuva.GuardaChuvaArea.vertice_3;
    var vertice_4 = GuardaChuva.GuardaChuvaArea.vertice_4;
    var vertice_5 = GuardaChuva.GuardaChuvaArea.vertice_5;
    var vertice_6 = GuardaChuva.GuardaChuvaArea.vertice_6;

    const vertices = [
      vertice_1,
      vertice_2,
      vertice_3,
      vertice_4,
      vertice_5,
      vertice_6,
    ];

    console.log("---------------------------------------------------");
    console.log(GuardaChuva.GuardaChuvaId);

    var estaDentro = pontoDentroDoPoligono(localizacao, vertices);

    if (estaDentro) {
      console.log("Guarda Chuva encontrado");
      guardaChuvaIdEncontrado = GuardaChuva.GuardaChuvaId;
      pegaDados(guardaChuvaIdEncontrado, setNivelDeChuva, setUmidade, setTemperatura);
      break;
    } else {
      setNivelDeChuva("Não encontrado");
      setUmidade("Não encontrado ");
      setTemperatura("Não encontrado ");
      estaDentro = false;
    }
  }

  if (guardaChuvaIdEncontrado) {
    return guardaChuvaIdEncontrado;
  } else {
    return "Nenhum Guarda Chuva encontrado";
  }
}

function pontoDentroDoPoligono(ponto, vertices) {
  let dentro = false;

  for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
    const vertice1 = vertices[i];
    const vertice2 = vertices[j];

    const intersecta =
      vertice1.lng > ponto.lng !== vertice2.lng > ponto.lng &&
      ponto.lat <
        ((vertice2.lat - vertice1.lat) * (ponto.lng - vertice1.lng)) /
          (vertice2.lng - vertice1.lng) +
          vertice1.lat;

    if (intersecta) {
      dentro = true;
    }
  }

  return dentro;
}

function pegaDados(GuardaChuvaId, setNivelDeChuva, setUmidade, setTemperatura) {
  var myHeaders = new Headers();
  myHeaders.append("device-token", GuardaChuvaId);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  var apiUrl = `https://api.tago.io/data?`;

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      if (result.result && result.result.length > 0) {
        var data = result;

        setNivelDeChuva(data.result[0].value + data.result[0].unit);
        setUmidade(data.result[1].value + data.result[1].unit);
        setTemperatura(data.result[2].value + data.result[2].unit);

        console.log("Nivel de Chuva: ", data.result[0].value + data.result[0].unit);
        console.log("Umidade: ", data.result[1].value + data.result[1].unit);
        console.log("Temperatura: ", data.result[2].value + data.result[2].unit);
      } else {
        console.error("API response is missing expected data.");
      }
    })
    .catch((error) => console.log("error", error));
}

function ObterInfo(props) {
  const { localizacao } = props;
  const [nivelDeChuva, setNivelDeChuva] = useState("");
  const [umidade, setUmidade] = useState("");
  const [temperatura, setTemperatura] = useState("");

  useEffect(() => {
    if (localizacao != null) {
      console.log("localizacao recebida:", localizacao);
      VerificarAreas(localizacao, setNivelDeChuva, setUmidade, setTemperatura);
    }
  }, [localizacao]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {nivelDeChuva !== "" && umidade !== "" && temperatura !== "" ? (
        <ConsuSection02CardContainer>
          <ConsuSection02Card1>
            <img src={EnchenteAlta} alt="Enchente Alta" />
             <ConsuCardTitulo>Alto risco de alagamento!</ConsuCardTitulo>
              <ConsuCardDivisao></ConsuCardDivisao>
              <ConsuCardSubTitulo>Esteja preparado para uma possivel enchente</ConsuCardSubTitulo>
              <ConsuCardSubInfo>Caso seja necessario, entre em contato com  as autoridades mais proximas</ConsuCardSubInfo>
            <p>Nível de Chuva: {nivelDeChuva}</p>
          </ConsuSection02Card1>
          <ConsuSection02Card2>
            <p>Umidade: {umidade}</p>
          </ConsuSection02Card2>
          <ConsuSection02Card3>
            <p>Temperatura: {temperatura}</p>
          </ConsuSection02Card3>
        </ConsuSection02CardContainer>
      ) : (
        <p>Nenhum Guarda Chuva encontrado.</p>
      )}
    </div>
  );
}

export default ObterInfo;