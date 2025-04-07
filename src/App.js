import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [number, setNumber] = useState(42); // Começando com o número 42
  const [fact, setFact] = useState('');
  const [mathFact, setMathFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(''); // Estado para armazenar a URL da imagem

  // Função para buscar o fato sobre o número
  const fetchNumberFact = async (num) => {
    setLoading(true);
    setError(null); // Resetando o erro antes da nova requisição
    try {
      console.log('Buscando fato sobre o número:', num);

      // Fato trivia
      const triviaResponse = await axios.get(`http://numbersapi.com/${num}?json&type=trivia`);
      console.log('Resposta Trivia:', triviaResponse.data);
      setFact(triviaResponse.data.text);

      // Fato matemático
      const mathResponse = await axios.get(`http://numbersapi.com/${num}?json&type=math`);
      console.log('Resposta Math:', mathResponse.data);
      setMathFact(mathResponse.data.text);

      // Agora, vamos buscar a imagem
      const image = await fetchImage(num);
      setImageUrl(image);

    } catch (err) {
      console.error('Erro ao buscar dados do NumbersAPI:', err);
      setError('Erro ao carregar o fato sobre o número!');
    }
    setLoading(false);
  };

  // Função para buscar a imagem gerada com o número
  const fetchImage = (num) => {
    try {
      console.log('Gerando imagem para o número:', num);
      // Gerando uma imagem simples com o número usando um serviço de imagem
      const imageUrl = `https://dummyimage.com/400x300/000/fff&text=${num}`;
      console.log('URL da imagem:', imageUrl);
      return imageUrl;
    } catch (err) {
      console.error('Erro ao gerar imagem para o número:', err);
      return ''; // Retorna uma string vazia se der erro
    }
  };

  // Função para gerar um número aleatório e buscar o fato correspondente
  const getRandomFact = () => {
    const randomNumber = Math.floor(Math.random() * 1000); // Gera um número aleatório entre 0 e 999
    setNumber(randomNumber);
    fetchNumberFact(randomNumber);
  };

  // Efetua a requisição inicial com o número 42
  useEffect(() => {
    fetchNumberFact(number); // Quando o componente é montado, busca o fato sobre o número 42
  }, []); // Apenas na primeira renderização

  return (
    <div className="App">
      <h1>Fatos sobre o Número</h1>

      {/* Exibe o fato ou uma mensagem de erro */}
      <div className="fact">
        {loading ? (
          <p>Carregando fatos...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <p>O número é: <strong>{number}</strong></p>
            <p><strong>Fato Trivia:</strong> {fact}</p>
            <p><strong>Fato Matemático:</strong> {mathFact}</p>
            {imageUrl ? (
              <img src={imageUrl} alt={`Imagem para o número ${number}`} className="image" />
            ) : (
              <p>Imagem não encontrada para esse número.</p>
            )}
          </>
        )}
      </div>

      {/* Botão para pegar um fato aleatório */}
      <button onClick={getRandomFact}>Pegar Fato Aleatório</button>
    </div>
  );
}

export default App;
