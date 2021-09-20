import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Emilly_avatar from './img/Emilly_avatar.jpeg';
import logo_usimequi from './img/logo_usimequi.png';
import logo_ifpe from './img/logo_ifpe.jfif';
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './img/email.png';
import adress from './img/adress.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={Emilly_avatar}
          nome="Emilly Santiago"
          descricao="Oi, eu sou a Emilly. Sou aluna da Labenu e estou em processo de transição de carreira. Minha formação acadêmica é em engenharia mecânica."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem={email}
          titulo="email"
          texto="emillysantiago89@gmail.com"
        />
        <CardPequeno
          imagem={adress}
          titulo="endereço"
          texto= "Av. Caxangá 521"
        />
      </div>
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={logo_usimequi}
          nome="Usimequi"
          descricao="Orçamentista Industrial"
        />

        <CardGrande
          imagem={logo_ifpe}
          nome="IFPE"
          descricao="Estagiário de Projetos"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
