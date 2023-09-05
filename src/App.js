import "./components/Padrao/padrao.css";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="Home">
      <Header />

        <main>
          <section className="section__01">
              <div className="section__01__conteudo">
                  <h1>Um sistema de alerta e monitoramento de enchentes</h1>
                  <h2>Mantenha-se seguro das águas. Sua fonte confiável para informações precisas e atualizadas sobre condições climáticas e níveis de água, ajudando você a tomar decisões bem-informadas.</h2>
                  <div className="section__01__conteudo__botoes">
                      <button className='section__01__conteudo__botoes__consulta'>Consulte a sua localização  <i className="fas fa-arrow-right"></i></button>
                      <button className='section__01__conteudo__botoes__saibaMais'>Saiba mais  <i className="fas fa-arrow-right"></i></button>
                  </div>
              </div>
          </section>
          <section className="section__02">
              <div className="section__02__videoPitch">
                  <h2>Vivencie e encontre.</h2>
                  <h1>Motivos pelos quais você pode confiar em nós.</h1>
                  <div className="section__02__videoPitch__video"></div>
              </div>
              <div className="section__02__nossosResultados">
                  <h1>Nossos resultados</h1>
                  <div className="section__02__nossosResultados__cards">
                      <div className="card">
                          <h1>Milhares de vidas salvas</h1>
                          <h3>Nosso sistema 'Pé D'Água' já contribuiu para salvar milhares de vidas, tornando nossa cidade mais segura a cada dia.</h3>
                      </div>
                      <div className="card">
                          <h1>Redução de danos materiais</h1>
                          <h3>Conseguimos reduzir significativamente os danos materiais causados por enchentes, protegendo nossas casas e propriedades.</h3>
                      </div>
                      <div className="card">
                          <h1>Uma cidade mais sustentável</h1>
                          <h3>Estamos desempenhando um papel vital na construção de uma cidade mais sustentável e preparada para enfrentar os desafios da natureza.</h3>
                      </div>
                    </div>
              </div>
          </section>
      </main>

      <Footer />
    </div>
    
  );
}

export default App;
