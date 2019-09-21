import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");
  const [palpite, setPalpite] = useState(150);
  const [numeroPalpite, setNumeroPalpite] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const IniciarJogo = () => {
    setEstado("RODANDO");
    setPalpite(150);
    setMin(0);
    setMax(300);
    setNumeroPalpite(1);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  const menor = () => {
    setNumeroPalpite(numeroPalpite + 1);
    setMax(palpite);
    const proximoPalpite = parseInt((palpite - min) / 2 + min);
    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNumeroPalpite(numeroPalpite + 1);
    setMin(palpite);
    const proximoPalpite = parseInt((max - palpite) / 2 + palpite);
    setPalpite(proximoPalpite);
  };

  if (estado === "ENTRADA") {
    return <button onClick={IniciarJogo}>Começar o Jogo</button>;
  }

  if (estado === "FIM") {
    return (
      <div>
        <h1>
          Parabéns, acertou o número {palpite} com {numeroPalpite} chutes.
        </h1>
        <button onClick={IniciarJogo}>Iniciar jogo Novamente</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu palpite é {palpite}?</p>
      <p>
        <b>Minimo:</b> {min} / <b>Máximo:</b> {max}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
