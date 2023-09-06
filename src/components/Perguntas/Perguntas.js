import styled from 'styled-components';
import Card from "./Perguntas-Card"

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
  text-align: justify;
`;

const PergSection01Perguntas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;



function Perguntas() {
        const perguntas = [
          {
            Titulo: 'Como receber alertas em tempo real?',
            SubTitulo: 'Como os alertas são recebidos:',
            Conteudo: 'Para receber alertas em tempo real, você pode se inscrever em nossa plataforma e configurar suas preferências de notificação. Garantimos que você seja informado sempre que houver mudanças significativas nas condições das enchentes.'
          },
          {
            Titulo: 'As informações fornecidas são confiáveis?',
            SubTitulo: 'Esta é a resposta para a pergunta 2.',
            Conteudo: 'Esta é a resposta para a pergunta 2.'
          }
        ];

    return (
        <div className="Perguntas">
            <PergSection01>
                <PergSection01Texto>
                    <PergSection01H1>Duvidas frequentes</PergSection01H1> 
                    <PergSection01P>Aqui você encontrará respostas para algumas das perguntas mais comuns sobre nossos serviços. <br></br> <br></br>Se você não encontrar a resposta que procura, sinta-se à vontade para entrar em contato conosco diretamente.</PergSection01P>
                </PergSection01Texto>
                <PergSection01Perguntas>
                    {perguntas.map((pergunta, index) => (
                        <Card key={index} Titulo={pergunta.Titulo} SubTitulo={pergunta.SubTitulo} Conteudo={pergunta.Conteudo}/>
                    ))}
                </PergSection01Perguntas>
            </PergSection01>
        </div>
    );
}

export default Perguntas;



