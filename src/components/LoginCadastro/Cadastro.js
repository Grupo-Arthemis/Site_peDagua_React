import styled, { keyframes } from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogCadUserSection = styled.div`
    height: max-content;
    padding: 3vw 12vw;
    display: flex;
    height: 160vh;
    justify-content: center;
`;

const LogCadCard = styled.div`
    background-color: #444444;
    height: 36vw;
    width: 90%;
    border-radius: 2vw;
    position: relative;
`;

const LogCadAreaTroca = styled.div`
    background-color: #4F7784;
    border-radius: 2vw 0 0 2vw;
    display: flex;
    padding: 0 10%;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    height: 100%;
`;
const LogCadAreaInfo = styled.div`
    background-color: #e8eae8;
    border-radius: 0 2vw 2vw 0;
    display: flex;
    padding: 0 10%;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    height: 100%;
`;
const LogCadAreaInfoForm = styled.div`
    display: flex;
    flex-direction: column;    
`;

const LogCadtitulo = styled.h1`
    color: #555E61;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
`;

const LogCadparagrafo = styled.p`
    color: #425466;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: DM Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
`;

const LogCadInput = styled.input`
    background-color: #EDF2F7;
    border: none;
    border-bottom: 1px solid #425466;
    border-radius: 5px;
    font-family: DM Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    outline: none;
    padding: 0.5vw;
    width: 100%;
    margin: 1vw 0;
    color: #034C5C;
    font-family: DM Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    transition: 0.5s;
    
    &:focus{
        border-bottom: 3px solid #4F7784;
    }

    ::placeholder{
        color: #425466;
        font-family: DM Sans;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
    }
`;


const Cadastrar = styled.button`

  color: #fff;
  background-color: #403e61;
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
  border: 1px solid #d4d2e3;
  textalign: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
  

  &:hover {
    color: #5d5a88;
    background-color: #fff;
  }

  @media (max-width: 600px) {
    width: 90%; 
    padding: 5% 3%;
  }
`;

const Logar = styled.button`
    color: #fff;
    background-color: #403e61;
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
  border: 1px solid #d4d2e3;
  textalign: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    color: #5d5a88;
    background-color: #fff;
  }

  @media (max-width: 600px) {
    width: 90%; 
    padding: 5% 3%;
  }
`;

const AlterarTela = styled.button`
    color: #fff;    
    background-color: #403e61;
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
  border: none;
  textalign: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    color: #5d5a88;
    background-color: #fff;
  }

  @media (max-width: 600px) {
    width: 90%; 
    padding: 5% 3%;
  }
`;

// -------------------------------------
const LogCadCardCadastro = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    width: 100%;
    height: 100%;
    position: absolute;
`;

function CadastroCard() {
  var listaUser = JSON.parse(localStorage.getItem("listaUser"));
  if (listaUser == null) {
      console.log("Lista de usuários não encontrada, criando lista...");
      let listaDeUsuarios = [
          {
              nomeUsuario : "Admin",
              sobrenomeUsuario : "Admin",
              emailUsuario : "Admin",
              senhaUsuario: "123456",            
          },
      ];
      localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));
      var listaUser = JSON.parse(localStorage.getItem("listaUser"));

      // cadastro de usuário -------------------------------------------------------------------------------------------------------

//Verificando se a lista de usuários existe no localStorage
var listaUser = JSON.parse(localStorage.getItem("listaUser"));
if (listaUser == null) {
    console.log("Lista de usuários não encontrada, criando lista...");
    let listaDeUsuarios = [
        {
            nomeUsuario : "Admin",
            sobrenomeUsuario : "Admin",
            emailUsuario : "Admin",
            senhaUsuario: "123456",            
        },
    ];
    localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));
    var listaUser = JSON.parse(localStorage.getItem("listaUser"));
};

var nome = document.getElementById("Nome");
var email = document.getElementById("Email");
var sobrenome = document.getElementById("Sobrenome");
var senha = document.getElementById("Senha");
var confirma = document.getElementById("Senha_Confirm");

// funcao para limpar os campos depois de cadastrar
function limparCampos() {
    nome.value = '';
    email.value = '';
    sobrenome.value = '';
    senha.value = '';
    confirma.value = '';
};

// Ver e desver a senha
const SenhaIcon = document.querySelector("#SenhaIcon");
const SenhaConfirmaIcon = document.querySelector("#SenhaConfirmaIcon");

SenhaIcon.addEventListener("click", ()=>{
    SenhaIcon.classList.toggle("fa-lock");
    SenhaIcon.classList.toggle("fa-lock-open");
    if (SenhaIcon.classList.contains("fa-lock-open")){
        senha.setAttribute("type","text");
    }else{
        senha.setAttribute("type","password");
    }

});

SenhaConfirmaIcon.addEventListener("click", ()=>{
    SenhaConfirmaIcon.classList.toggle("fa-lock");
    SenhaConfirmaIcon.classList.toggle("fa-lock-open");

    if (SenhaConfirmaIcon.classList.contains("fa-lock-open")){
        confirma.setAttribute("type","text");
    }else{
        confirma.setAttribute("type","password");
    }

});


// verificar se os campos estao vazios, ver se o email é realmente um email, ver se o nome, e email tem mais de 5 digitos
// ver se a senha tem entre 6 e 8 digitos, verificar se a senha esta igual na confirmacao
// e por ultimo limpar os campos se tudo for feito corretamente
var emailRegExp = /\S+@\S+\.\S{3,}/;

function validarFormulario() {
    
    // Verificando se os campos estão preenchidos e corretos
    if (nome.value === "" | sobrenome.value ==="" | email.value === "" || senha.value === "" || confirma.value === "") {
        alert("Por favor, preencha todos os campos (nome, Telefone, email, senha e confirmação).");
        return false;
    } else if (!emailRegExp.test(email.value)) {
        alert("Por favor, informe um e-mail válido.");
        return false;
    } else if (nome.value.length < 2 || nome.value.length > 30) {
        alert("O campo nome não atingiu o número mínimo de caracteres.");
        return false;
    } else if (sobrenome.value.length < 2 || sobrenome.value.length > 30) {
        alert("O campo nome não atingiu o número mínimo de caracteres.");
        return false;
    } else if (senha.value.length < 6 || senha.value.length > 8) {
        alert("A senha deve ter no minimo 6 digitos e no maximo 8 digitos.")   
        return false;
    } else if (senha.value !== confirma.value) {
        alert("A senha e a confirmação devem ser iguais.");
        return false;
    } else {
        return true;
    }
};
// Verifica se o nome atende aos requisitos----------------------
nome.addEventListener("focus", ()=>{
    if (nome.value.length < 2){
        nome.setAttribute("style","outline-color:#b64646;")}
});

nome.addEventListener("keyup", ()=>{
    if(nome.value.length < 2 || nome.value.length > 50){
        nome.setAttribute("style","outline-color:#b64646;")
        
    }else{
        nome.setAttribute("style","outline-color:#40933e;")
    }
});
// ---------------------------------------------------------------

// Verifica se o sobrenome atende aos requisitos----------------------
sobrenome.addEventListener("focus", ()=>{
    if (sobrenome.value.length < 2){
        sobrenome.setAttribute("style","outline-color:#b64646;")}
});

sobrenome.addEventListener("keyup", ()=>{
    if(sobrenome.value.length < 2 || nome.value.length > 50){
        sobrenome.setAttribute("style","outline-color:#b64646;")
        
    }else{
        sobrenome.setAttribute("style","outline-color:#40933e;")
    }
});
// ---------------------------------------------------------------

// Verifica se o email atende aos requisitos----------------------

email.addEventListener("focus", ()=>{
    if (email.value.length < 5){
        email.setAttribute("style","outline-color:#b64646;")}
});

email.addEventListener("keyup", ()=>{
    if((email.value.length < 5)||(!emailRegExp.test(email.value))) {
        email.setAttribute("style","outline-color:#b64646;")
        
    }else{
        email.setAttribute("style","outline-color:#40933e;")
    }
});
// ---------------------------------------------------------------

// Verifica se o senha atende aos requisitos----------------------

senha.addEventListener("focus", ()=>{
    if (senha.value.length < 5){
        senha.setAttribute("style","outline-color:#b64646;")}
});

senha.addEventListener("keyup", ()=>{
    if((senha.value.length < 6)||(senha.value.length > 8)) {
        senha.setAttribute("style","outline-color:#b64646;")

    }else{
        senha.setAttribute("style","outline-color:#40933e;")
    }
    
});
// ---------------------------------------------------------------
// Verifica se o senha foi confirmada-----------------------------

confirma.addEventListener("focus", ()=>{
    if((confirma.value != senha.value)||(confirma.value.length < 6)){
        confirma.setAttribute("style","outline-color:#b64646;")}
});

confirma.addEventListener("keyup", ()=>{
    if((confirma.value != senha.value)) {
        confirma.setAttribute("style","outline-color:#b64646;")

    }else{
        confirma.setAttribute("style","outline-color:#40933e;")
    }
    
});
// ---------------------------------------------------------------


//clique do botao onde faz a verificação, pergunta se deseja salvar e limpa os campos
const msgErrorCadastro = document.querySelector("#avisoCadastro");
document.getElementById("BotaoCadastro").addEventListener("click", function(event) {
    
    event.preventDefault();
    if (validarFormulario()) {
        var confirmacao = window.confirm("Está certo das suas informações?");
        if (confirmacao) {
            console.log("Nome: "           + nome.value);
            console.log("Sobrenome: "      + sobrenome.value);
            console.log("Email: "          + email.value);
            console.log("Senha: "          + senha.value);
            console.log("-----------------------");

            var listaUser = JSON.parse(localStorage.getItem("listaUser"));
            var newUser = {
                nomeUsuario : nome.value,
                sobrenomeUsuario : sobrenome.value,
                emailUsuario : email.value,
                senhaUsuario : senha.value,
            };

            try{
                listaUser.forEach((usuario) => {
                    console.log(usuario.emailUsuario);
                    console.log(usuario.emailUsuario, newUser.emailUsuario);
                    if (usuario.emailUsuario == newUser.emailUsuario) {
                        msgErrorCadastro.innerHTML = "<strong>Esse email já existe</strong>";
                        msgErrorCadastro.setAttribute("style","color:#b64646;");
                        console.log("Esse email já existe");
                        throw "Esse email já existe!!!";
                    }
                });
                console.log("Novo usuario!!!");
                throw "Novo usuario!!!";
                

            }catch(error){
                if (error == "Novo usuario!!!"){
                    listaUser.push(newUser);
                    console.log(listaUser);
                    localStorage.setItem("listaUser", JSON.stringify(listaUser));
                    
                    msgErrorCadastro.innerHTML = "<strong>Usuário Cadastrado!</strong>"
                    msgErrorCadastro.setAttribute("style","color:#40933e;")

                    setTimeout(function () {
                      msgErrorCadastro.innerHTML = "Use seu e-mail para cadastrar-se"
                      msgErrorCadastro.setAttribute("style","color:#444444;")
                    }, 3000 );
                }
            }
        } 
    }
});







  };
    return (
      <LogCadUserSection>
        <LogCadCard>
              <LogCadCardCadastro>
                  <LogCadAreaTroca>
                      <div>
                          <LogCadtitulo style={{color:"#fff"}}>Bem Vindo <br/> De Volta!</LogCadtitulo>
                          <LogCadparagrafo style={{color:"#fff"}}>Para ficar conectado conosco <br/> insira seus dados</LogCadparagrafo>
                      </div>
                      <Link to='/login'><AlterarTela>Entrar</AlterarTela></Link>
                  </LogCadAreaTroca>
                  <LogCadAreaInfo>
                      <div>
                          <LogCadtitulo>Criar uma conta</LogCadtitulo>
                          <LogCadparagrafo id="avisoCadastro">Use seu e-mail para cadastrar-se</LogCadparagrafo>
                      </div>
                      <LogCadAreaInfoForm>
                          <LogCadInput type="text" placeholder="Nome" className="icon-placeholder" id="Nome" />
                          
                          <LogCadInput type="text" placeholder="Sobrenome" className="icon-placeholder" id="Sobrenome" />
                          
                          <LogCadInput type="text" placeholder="Digite seu e-mail" className="icon-placeholder" id="Email" style={{backgroundImage:"url(${FaEnvelope})"}}/>
                          
                          <LogCadInput type="password" placeholder="Senha" className="icon-placeholder" id="Senha" />
                          
                          <LogCadInput type="password" placeholder="Confirmar Senha" className="icon-placeholder" id="Senha_Confirm" />
                      </LogCadAreaInfoForm>
                      <Cadastrar id="BotaoCadastro">Cadastrar</Cadastrar>            
                  </LogCadAreaInfo>
              </LogCadCardCadastro>
          </LogCadCard>
        </LogCadUserSection>
    );
}

export default CadastroCard;



