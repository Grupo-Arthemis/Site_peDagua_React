import styled from 'styled-components';
import React, { useRef } from 'react';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const ContSection01 = styled.div`
  padding: 5% 2%;
  width: 96%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  align-items: center;
  gap: 2vw;
  

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 20vw;
  }
`;

const ContSection01Texto = styled.div`
  gap: 2vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media (max-width: 600px) {
    align-items: center;
    gap: 12vw;
  }

`;

const ContSection01SubTitulo = styled.h2`
  color: #5d5a88;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: clamp(1.563rem, 1.136rem + 1.136vw, 2.5rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ContSection01P = styled.p`
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
    width: 90%; 
  }
`;

const ContSection01Form = styled.form`
  background-color: #F2F1FA;
  gap: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  height: 640px;
  border-radius: 25px;
  margin: 0 auto;

  @media (max-width: 600px) {
    height: 500px; 
  }

`;

const ContSection01FormInput = styled.input`
    width: 90%;
    height: 10%;
    border-radius: 50px;
    background: #FFF;
    border: none;
    margin: 0 auto;

    font-family: DM Sans;
    font-size: clamp(0.75rem, 0.381rem + 0.985vw, 1.563rem);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    color: #5D5A88;
    padding-left: 20px;

    ::placeholder {
        font-family: DM Sans;
        font-size: clamp(0.75rem, 0.381rem + 0.985vw, 1.563rem);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: left;
        color: #8D8BA7;
        padding-left: 20px;
    }
    

    @media (max-width: 600px) {
      width: 80%; 
      height: 8%;
    }
`;

const ContSection01FormTextArea = styled.textarea`
    width: 90%;
    height: 140px;
    border-radius: 15px;
    background: #FFF;
    border: none;
    margin: 0 auto;

    font-family: DM Sans;
    font-size: clamp(0.75rem, 0.381rem + 0.985vw, 1.563rem);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    color: #5D5A88;
    padding-left: 20px;
    padding-top: 20px;
    resize: none;

    ::placeholder {
        font-family: DM Sans;
        font-size: clamp(0.75rem, 0.381rem + 0.985vw, 1.563rem);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: left;
        color: #8D8BA7;
        padding-left: 20px;
    }

    @media (max-width: 600px) {
      width: 80%; 
    }
`;

const EnviarMensagem = styled.button`
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
  textalign: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #403e61;
  }

  @media (max-width: 600px) {
    width: 90%; 
    padding: 5% 3%;
  }
`;


function Contatos() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formInputs = event.target.elements;
    let isFormValid = true;

    for (let i = 0; i < formInputs.length - 1; i++) {
      if (!formInputs[i].value) {
        isFormValid = false;
        break;
      }
    }

    if (isFormValid) {
      window.alert('Mensagem enviada com sucesso!');
      nameInputRef.current.value = '';
      emailInputRef.current.value = '';
      phoneInputRef.current.value = '';
      messageInputRef.current.value = '';
    } else {
      window.alert('Por favor preencha todos os campos!');
    }
  };

    return (
        <div className="Contatos">
            <ContSection01>
                <ContSection01Texto>
                  <ContSection01SubTitulo>ENTRE EM CONTATO CONOSCO</ContSection01SubTitulo>
                  <ContSection01P>
                  Estamos ansiosos para ouvir de você! Se você tiver alguma dúvida, sugestão, ou simplesmente queira compartilhar suas ideias conosco, não hesite em entrar em contato. Sua opinião é muito importante para nós.
                  </ContSection01P>
                  <ContSection01P>
                    <EmailOutlinedIcon />  pedagua@gmail.com <br/><br/>
                    <ContactSupportOutlinedIcon />  (11) 9 9999-9999 <br/><br/>
                    <FmdGoodOutlinedIcon />  Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP 
                  </ContSection01P>
                </ContSection01Texto>
                <ContSection01Form onSubmit={handleSubmit}>
                    <ContSection01FormInput type="text" placeholder="Digite seu nome" ref={nameInputRef} />
                    <ContSection01FormInput type="text" placeholder="Digite seu e-mail" ref={emailInputRef} />
                    <ContSection01FormInput type="number" placeholder="Digite seu telefone" ref={phoneInputRef} />
                    <ContSection01FormTextArea type="text"  placeholder="Deixe seu recado ou sugestão para nós" ref={messageInputRef} />
                    <EnviarMensagem type='submit'>Enviar Mensagem <i className="fas fa-arrow-right"></i></EnviarMensagem>
                </ContSection01Form>
            </ContSection01>
        </div>
    );
}

export default Contatos;



