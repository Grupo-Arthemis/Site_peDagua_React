import styled, { keyframes } from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Estilos CSS
const LogCadUserSection = styled.div`
    height: max-content;
    padding: 3vw 12vw;
    display: flex;
    height: 160vh;
    justify-content: center;
    
    @media (max-width: 600px) {
        padding: 3vw 5vw;
    }
`;

const LogCadCard = styled.div`
    background-color: #444444;
    height: 36vw;
    width: 90%;
    border-radius: 2vw;
    position: relative;

    @media (max-width: 600px) {
        height: 70%;
        width: 100%;
    }
`;

const LogCadAreaTroca = styled.div`
    background-color: #4F7784;
    border-radius: 0 2vw 2vw 0;
    display: flex;
    padding: 0 10%;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    height: 100%;

    
    @media (max-width: 600px) {
        padding: 0 5%;
        border-radius: 0 0 2vw 2vw;
    }
`;

const LogCadAreaInfo = styled.div`
    background-color: #e8eae8;
    border-radius: 2vw 0 0 2vw;
    display: flex;
    padding: 0 10%;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    height: 100%;

    @media (max-width: 600px) {
        padding: 0 5%;
        border-radius: 2vw 2vw 0 0;
    }
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
    font-size: clamp(2.188rem, 1.477rem + 1.894vw, 3.75rem);
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

    &:focus {
        border-bottom: 3px solid #4F7784;
    }

    ::placeholder {
        color: #425466;
        font-family: DM Sans;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
    }
`;
const LogCadCardLogin = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    width: 100%;
    height: 100%;
    position: absolute;

    @media (max-width: 600px) {
        grid-template-columns: 100%;
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
    text-align: center;
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
    text-align: center;
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

// Componente LoginCard
function LoginCard() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msgError, setMsgError] = useState('');

    const handleLogin = () => {
        let listaUser = JSON.parse(localStorage.getItem("listaUser"));

        let usuarioValidado = {
            email: email,
            senhaInput: senha,
        };

        const msgErrorLogin = document.querySelector('#avisoLogin');

        try {
            listaUser.forEach((usuario) => {
                if (usuarioValidado.email === usuario.emailUsuario && usuarioValidado.senhaInput === usuario.senhaUsuario) {
                    usuarioValidado["nomeCompleto"] = usuario.nomeUsuario;
                    usuarioValidado["cpfCnpj"] = usuario.cpfCnpjUsuario;
                    throw "VALIDADO!";
                }
            });

            throw "Usuário ou senha inválidos!";
        } catch (msg) {
            if (msg === "VALIDADO!") {
                localStorage.setItem("usuario-validado", JSON.stringify(usuarioValidado));
                msgErrorLogin.innerHTML = '<strong>Bem Vindo!</strong>';
                msgErrorLogin.style.color = '#40933e';
                setTimeout(() => {
                    window.location.href = "../index.html";
                }, 3000);
            } else {
                msgErrorLogin.innerHTML = '<strong>Login ou Senha invalidos!</strong>';
                msgErrorLogin.style.color = '#b64646';
            }
        }
    };

    return (
        <LogCadUserSection>
            <LogCadCard>
                <LogCadCardLogin>
                    <LogCadAreaInfo>
                        <div>
                            <LogCadtitulo>Entrar</LogCadtitulo>
                            <LogCadparagrafo id="avisoLogin">Use seu e-mail e senha cadastrados</LogCadparagrafo>
                        </div>
                        <LogCadAreaInfoForm>
                            <LogCadInput
                                type="text"
                                placeholder="Digite seu e-mail"
                                className="icon-placeholder"
                                id="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <LogCadInput
                                type="password"
                                placeholder="Senha"
                                className="icon-placeholder"
                                id="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </LogCadAreaInfoForm>
                        <Cadastrar onClick={handleLogin}>Entrar</Cadastrar>
                    </LogCadAreaInfo>
                    <LogCadAreaTroca>
                        <div>
                            <LogCadtitulo style={{ color: "#fff" }}>Ainda não possui<br /> uma conta ?</LogCadtitulo>
                            <LogCadparagrafo style={{ color: "#fff" }}>Para ficar conectado conosco <br /> insira seus dados</LogCadparagrafo>
                        </div>
                        <Link to='/cadastro'><AlterarTela>Cadastre-se</AlterarTela></Link>
                    </LogCadAreaTroca>
                </LogCadCardLogin>
            </LogCadCard>
        </LogCadUserSection>
    );
}

export default LoginCard;
