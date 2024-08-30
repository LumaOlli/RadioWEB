// pages/index.js
'use client';

import { useContext } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import HomeContextProvider, { HomeContext } from './context/HomeContext';
import PlayPause from './context/PlayPause';

export default function Home() {
  return (
    <HomeContextProvider>
      <MainContent />
    </HomeContextProvider>
  );
}

const MainContent = () => {
  const { contador, incremento, decremento, playing } = useContext(HomeContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{contador}</h1>
      <div className="flex flex-row space-x-4">
        <button onClick={() => incremento()} disabled={!playing}>
          <FaPlusCircle className={`text-[50px] ${playing ? 'text-[tomato]' : 'text-gray-400'}`} />
        </button>
        <button onClick={() => decremento()} disabled={!playing}>
          <FaMinusCircle className={`text-[50px] ${playing ? 'text-[blue]' : 'text-gray-400'}`} />
        </button>
      </div>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Controle de Execução</h1>
        <PlayPause />
        <p>Contagem de cliques no play: {contador}</p>
      </div>
    </main>
  );
};
