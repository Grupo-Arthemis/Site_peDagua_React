import React, { useState, useEffect } from "react";
import data from "./DispositivosGuardaChuva.json";
import styled from "styled-components";

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
  background-color: #f7eded;
  border-radius: 20px;
`;

const PergSection02Card2 = styled.div`
  grid-area: Card2;
  background-color: #edf2f7;
  border-radius: 20px;
`;

const PergSection02Card3 = styled.div`
  grid-area: Card3;
  background-color: #edf2f7;
  border-radius: 20px;
`;

function ObterInfo(props) {
  const { localizacao } = props;
  console.log("localizacao recebida:", localizacao);

  const [isLoading, setIsLoading] = useState(true);
  const [nivelDeChuva, setNivelDeChuva] = useState("");
  const [umidade, setUmidade] = useState("");
  const [temperatura, setTemperatura] = useState("");

  function pegaDados(GuardaChuvaId, localizacao) {
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

          var nivelDeChuva = data.result[0].value + data.result[0].unit;
          var umidade = data.result[1].value + data.result[1].unit;
          var temperatura = data.result[2].value + data.result[2].unit;

          console.log("Nivel de Chuva: ", nivelDeChuva);
          console.log("Umidade: ", umidade);
          console.log("Temperatura: ", temperatura);

          setNivelDeChuva(nivelDeChuva);
          setUmidade(umidade);
          setTemperatura(temperatura);
          setIsLoading(false);
        } else {
          console.error("API response is missing expected data.");
        }
      })
      .catch((error) => console.log("error", error));
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

  function VerificarAreas(localizacao) {
    for (let i = 0; i < data.length; i++) {
      var vertice_1 = data[i].GuardaChuvaArea.vertice_1;
      var vertice_2 = data[i].GuardaChuvaArea.vertice_2;
      var vertice_3 = data[i].GuardaChuvaArea.vertice_3;
      var vertice_4 = data[i].GuardaChuvaArea.vertice_4;
      var vertice_5 = data[i].GuardaChuvaArea.vertice_5;
      var vertice_6 = data[i].GuardaChuvaArea.vertice_6;

      const vertices = [
        vertice_1,
        vertice_2,
        vertice_3,
        vertice_4,
        vertice_5,
        vertice_6,
      ];

      var estaDentro = pontoDentroDoPoligono(localizacao, vertices);

      if (estaDentro) {
        console.log("Dentro");

        if (!data[i].pegaDadosCalled) {
          pegaDados(data[i].GuardaChuvaId, localizacao);
          data[i].pegaDadosCalled = true;
        }
      } else {
        data[i].pegaDadosCalled = false;
      }
    }
  }

  useEffect(() => {
    if (localizacao) {
      VerificarAreas(localizacao);
    } else {
      console.log("localizacao undefined");
    }
  }, [localizacao]);

  useEffect(() => {
    if (nivelDeChuva || umidade || temperatura) {
      setIsLoading(false);
    }
  }, [nivelDeChuva, umidade, temperatura]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PergSection02CardContainer>
          <PergSection02Card1>
            <div>
              <p>{nivelDeChuva}</p>
            </div>
          </PergSection02Card1>
          <PergSection02Card2>
            <div>
              <p>{umidade}</p>
            </div>
          </PergSection02Card2>
          <PergSection02Card3>
            <div>
              <p>{temperatura}</p>
            </div>
          </PergSection02Card3>
        </PergSection02CardContainer>
      )}
    </div>
  );
}

export default ObterInfo;