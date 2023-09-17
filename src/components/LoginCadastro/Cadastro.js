import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';

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

const LogCadAreaInfo = styled.div`
    background-color: #e8eae8;
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
    font-family: DM Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    outline: none;
    padding: 0.5vw;
    width: 100%;
    margin: 1vw 0;
    color: #034C5C;
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

const LogCadCardCadastro = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    width: 100%;
    height: 100%;
    position: absolute;

    @media (max-width: 600px) {
        grid-template-columns: 100%;
    }
`;

function CadastroCard() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [senha, setSenha] = useState('');
    const [confirma, setConfirma] = useState('');

    const emailRegExp = /\S+@\S+\.\S{3,}/;

    const handleNomeChange = (e) => {
        setNome(e.target.value);
    };

    const handleSobrenomeChange = (e) => {
        setSobrenome(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    };

    const handleConfirmaChange = (e) => {
        setConfirma(e.target.value);
    };

    const validarFormulario = () => {
        if (
            nome === '' ||
            sobrenome === '' ||
            email === '' ||
            senha === '' ||
            confirma === ''
        ) {
            alert('Por favor, preencha todos os campos (nome, sobrenome, email, senha e confirmação).');
            return false;
        } else if (!emailRegExp.test(email)) {
            alert('Por favor, informe um e-mail válido.');
            return false;
        } else if (nome.length < 2 || nome.length > 30) {
            alert('O campo nome não atingiu o número mínimo de caracteres.');
            return false;
        } else if (sobrenome.length < 2 || sobrenome.length > 30) {
            alert('O campo sobrenome não atingiu o número mínimo de caracteres.');
            return false;
        } else if (senha.length < 6) {
            alert('A senha deve ter no mínimo 6 digitos.');
            return false;
        } else if (senha !== confirma) {
            alert('A senha e a confirmação devem ser iguais.');
            return false;
        } else {
            return true;
        }
    };

    const msgErrorCadastro = document.querySelector('#avisoCadastro');

    const cadastrarUsuario = () => {
        if (validarFormulario()) {
            const confirmacao = window.confirm('Está certo das suas informações?');
            if (confirmacao) {
                console.log('Nome: ' + nome);
                console.log('Sobrenome: ' + sobrenome);
                console.log('Email: ' + email);
                console.log('Senha: ' + senha);
                console.log('-----------------------');

                const listaUser = JSON.parse(localStorage.getItem('listaUser'));
                const newUser = {
                    nomeUsuario: nome,
                    sobrenomeUsuario: sobrenome,
                    emailUsuario: email,
                    senhaUsuario: senha,
                };

                try {
                    listaUser.forEach((usuario) => {
                        console.log(usuario.emailUsuario);
                        console.log(usuario.emailUsuario, newUser.emailUsuario);
                        if (usuario.emailUsuario === newUser.emailUsuario) {
                            msgErrorCadastro.innerHTML = '<strong>Esse email já existe</strong>';
                            msgErrorCadastro.style.color = '#b64646';
                            console.log('Esse email já existe');
                            throw 'Esse email já existe!!!';
                        }
                    });
                    console.log('Novo usuario!!!');
                    throw 'Novo usuario!!!';
                } catch (error) {
                    if (error === 'Novo usuario!!!') {
                        listaUser.push(newUser);
                        console.log(listaUser);
                        localStorage.setItem('listaUser', JSON.stringify(listaUser));

                        msgErrorCadastro.innerHTML = '<strong>Usuário Cadastrado!</strong>';
                        msgErrorCadastro.style.color = '#40933e';

                        setTimeout(function () {
                            msgErrorCadastro.innerHTML = 'Use seu e-mail para cadastrar-se';
                            msgErrorCadastro.style.color = '#444444';
                        }, 3000);
                    }
                }
            }
        }
    };

    return (
        <LogCadUserSection>
            <LogCadCard>
                <LogCadCardCadastro>
                    <LogCadAreaTroca>
                        <div>
                            <LogCadtitulo style={{ color: '#fff' }}>Bem Vindo <br /> De Volta!</LogCadtitulo>
                            <LogCadparagrafo style={{ color: '#fff' }}>Para ficar conectado conosco <br /> insira seus dados</LogCadparagrafo>
                        </div>
                        <Link to='/login'><AlterarTela>Entrar</AlterarTela></Link>
                    </LogCadAreaTroca>
                    <LogCadAreaInfo>
                        <div>
                            <LogCadtitulo>Criar uma conta</LogCadtitulo>
                            <LogCadparagrafo id="avisoCadastro">Use seu e-mail para cadastrar-se</LogCadparagrafo>
                        </div>
                        <LogCadAreaInfoForm>
                            <LogCadInput
                                type="text"
                                placeholder="Nome"
                                className="icon-placeholder"
                                id="Nome"
                                value={nome}
                                onChange={handleNomeChange}
                            />
                            <LogCadInput
                                type="text"
                                placeholder="Sobrenome"
                                className="icon-placeholder"
                                id="Sobrenome"
                                value={sobrenome}
                                onChange={handleSobrenomeChange}
                            />
                            <LogCadInput
                                type="text"
                                placeholder="Digite seu e-mail"
                                className="icon-placeholder"
                                id="Email"
                                style={{ backgroundImage: 'url(${FaEnvelope})' }}
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <LogCadInput
                                type="password"
                                placeholder="Senha"
                                className="icon-placeholder"
                                id="Senha"
                                value={senha}
                                onChange={handleSenhaChange}
                            />
                            <LogCadInput
                                type="password"
                                placeholder="Confirmar Senha"
                                className="icon-placeholder"
                                id="Senha_Confirm"
                                value={confirma}
                                onChange={handleConfirmaChange}
                            />
                        </LogCadAreaInfoForm>
                        <Cadastrar id="BotaoCadastro" onClick={cadastrarUsuario}>
                            Cadastrar
                        </Cadastrar>
                    </LogCadAreaInfo>
                </LogCadCardCadastro>
            </LogCadCard>
        </LogCadUserSection>
    );
}

export default CadastroCard;
