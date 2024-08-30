// context/HomeContext.tsx
'use client';
import { createContext, ReactNode, useState } from 'react';

type HomeContextData = {
  contador: number;
  incremento: () => void;
  decremento: () => void;
  playing: boolean;
  togglePlaying: () => void;
};

export const HomeContext = createContext<HomeContextData>({} as HomeContextData);

type ProviderProps = {
  children: ReactNode;
};

const HomeContextProvider = ({ children }: ProviderProps) => {
  const [contador, setContador] = useState(0);
  const [playing, setPlaying] = useState(false);

  const incremento = () => {
    if (playing) {
      setContador(contador + 1);
    }
  };

  const decremento = () => {
    if (playing && contador > 0) { // Verifica se o contador é maior que zero
      setContador(contador - 1);
    }
  };

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  return (
    <HomeContext.Provider value={{ contador, incremento, decremento, playing, togglePlaying }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;