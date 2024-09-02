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
      setContador((prev) => prev + 1);
    }
  };

  const decremento = () => {
    if (playing && contador > 0) {
      setContador((prev) => prev - 1);
    }
  };

  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <HomeContext.Provider value={{ contador, incremento, decremento, playing, togglePlaying }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;