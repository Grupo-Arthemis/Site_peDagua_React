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


// ---------------------------------------------------------------------------------------

function VerificarAreas(localizacao) {
  let guardaChuvaIdEncontrado = null;

  data.forEach((GuardaChuva) => {
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
      pegaDados(guardaChuvaIdEncontrado);
    } else{
      console.log("Guarda Chuva não encontrado");
      estaDentro = false;
    }
  });

  if (guardaChuvaIdEncontrado) {
    return guardaChuvaIdEncontrado;
  } else {
    return "Nenhum Guarda Chuva encontrado";
  }
}

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

function pegaDados(GuardaChuvaId) {
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

      } else {
        console.error("API response is missing expected data.");
      }
    })
    .catch((error) => console.log("error", error));
}

// ---------------------------------------------------------------------------------------

function ObterInfo(props) {
  const { localizacao } = props;

  if (localizacao != null) {
    console.log("localizacao recebida:", localizacao);
    VerificarAreas(localizacao);
    console.log("-------------------------------------------------");



    console.log("---------------------fim-------------------------");
  }


  return (
    <div style={{ width: "100%", height: "100%" }}>
      <PergSection02CardContainer>
        <PergSection02Card1>
          <p>Card1</p>

        </PergSection02Card1>
        <PergSection02Card2>
          <p>Card2</p>

        </PergSection02Card2>
        <PergSection02Card3>
          <p>Card3</p>

        </PergSection02Card3>
      </PergSection02CardContainer>

    </div>
  );
}

export default ObterInfo;