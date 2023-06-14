import { useState } from 'react';
import './index.css';

function App() {
  // Inicia as constantes
  const min = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const mai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const num = '0123456789'.split('');
  const special = ['!', '?', '/', ' ', '@', '#', '$', '%', '&', '*', '(', ')', '+', '=', ':', ';', '.', ',', '<', '>', 'ç', 'Ç', '^', '~', '[', ']', '{', '}', '-'];
  const [tiraMaiuscula, setTiraMaiuscula] = useState(false);
  const [tiraMinuscula, setTiraMinuscula] = useState(false);
  const [tiraLetras, setTiraLetras] = useState(false);
  const [tiraNumeros, setTiraNumeros] = useState(false);
  const [tiraEspecial, setTiraEspecial] = useState(false);
  
  const [comprimento, setcomprimento] = useState(10);
  const [generatedPassword, setGeneratedPassword] = useState('');
  
  // Honestamente não entendi direito como funciona, mas pelo que entendi muda o valor das variaveis
  const mudaMaiuscula = (event) => {
    setTiraMaiuscula(event.target.checked);
  };
  
  const mudaMinuscula = (event) => {
    setTiraMinuscula(event.target.checked);
  };
  
  const mudaLetras = (event) => {
    setTiraLetras(event.target.checked);
  };
  
  const mudaNumeros = (event) => {
    setTiraNumeros(event.target.checked);
  };
  
  const mudaEspecial = (event) => {
    setTiraEspecial(event.target.checked);
  };

  const mudaComprimento = (event) => {
    setcomprimento(event.target.value);
  };


  // Realiza o filtro pra gerar a senha 
  function gera_senha() {
    let senha = '';
    let maiusculaFiltrada = mai;
    let minusculaFiltrada = min;
    let numeroFiltrado = num;
    let specialFiltrado = special;

    if (tiraMaiuscula === true) {
      maiusculaFiltrada = [];
    }

    if (tiraMinuscula === true) {
      minusculaFiltrada = [];
    }

    if (tiraLetras === true) {
      maiusculaFiltrada = [];
      minusculaFiltrada = [];
    }

    if (tiraNumeros === true) {
      numeroFiltrado = [];
    }

    if (tiraEspecial === true) {
      specialFiltrado = [];
    }


    // Gera a senha aleatoria
    const allChars = [...minusculaFiltrada, ...maiusculaFiltrada, ...numeroFiltrado, ...specialFiltrado];
    for (let caracter = 0; caracter < comprimento; caracter++) {
      const aleatorio = Math.floor(Math.random() * allChars.length);
      senha += allChars[aleatorio];
    }

    setGeneratedPassword(senha);
  }


  return (
    <>
      <div className="text-center" style={{ marginTop: "15vh" }}>
        <h1 className="text-5xl font-extrabold text-gray-300">Gerador de senhas</h1>
      </div>

      {/* Configurações de senha */}
      <div className="border-4 border-gray-700 flex bg-[#606060] text-white p-4" style={{ marginLeft: '10%', marginRight: '10%', marginTop: "5vh" }}>
        {/* Metade esquerda */}
        <div className="w-1/2">
          <label>Configure sua senha:</label>
          <br></br>
          <input type="checkbox" value="maiuscula" checked={tiraMaiuscula} onChange={mudaMaiuscula} />
          <label htmlFor="maiuscula"> Remover maiusculas</label>
          <br></br>
          <input type="checkbox" value="minuscula" checked={tiraMinuscula} onChange={mudaMinuscula} />
          <label htmlFor="minuscula"> Remover minusculas</label>
          <br></br>
          <input type="checkbox" value="letra" checked={tiraLetras} onChange={mudaLetras} />
          <label htmlFor="letra"> Remover letras</label>
          <br></br>
          <input type="checkbox" value="numero" checked={tiraNumeros} onChange={mudaNumeros} />
          <label htmlFor="numero"> Remover numeros</label>
          <br></br>
          <input type="checkbox" value="especiais" checked={tiraEspecial} onChange={mudaEspecial} />
          <label htmlFor="especiais"> Remover Caracteres Especiais</label>
          <br></br>
        </div>

        {/* Metade direita */}
        <div className="w-1/2">
          <label>Numero de caracteres (10 inicialmente):</label>
          <br></br>
          <input type="number" className="text-black" value={comprimento} onChange={mudaComprimento} />
          <br></br><br></br>
          <button onClick={gera_senha} className="bg-gray-700 rounded-xl p-1">Gerar Senha:</button>
          <br></br>
          <label>Senha gerada: {generatedPassword}</label>
        </div>
      </div>
    </>
  );
}

export default App;
