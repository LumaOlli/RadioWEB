'use client';

import { useContext } from 'react';
import HomeContextProvider, { HomeContext } from './context/HomeContext';
import PlayPause from './context/PlayPause'; // Certifique-se de que o caminho esteja correto

export default function Home() {
  return (
    <HomeContextProvider>
      <MainContent />
    </HomeContextProvider>
  );
}

const MainContent = () => {
  const { contador, playing } = useContext(HomeContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{contador}</h1>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        {/* Texto fora do contêiner de ícones */}
        <div style={{ marginBottom: '20px' }}>
          <span style={{ color: '#28a745', fontSize: '18px' }}>
            {playing ? 'Executando' : 'Pausado'}
          </span>
        </div>

        <PlayPause />

        <p>Contagem de cliques no play: {contador}</p>
      </div>
    </main>
  );
};
