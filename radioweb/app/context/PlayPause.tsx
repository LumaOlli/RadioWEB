// components/PlayPause.js
'use client';
import { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';

const PlayPause = () => {
  const { playing, togglePlaying } = useContext(HomeContext);

  return (
    <div onClick={togglePlaying} style={{ cursor: 'pointer', textAlign: 'center', fontSize: '24px' }}>
      {playing ? (
        <>
          <div>⏸️</div>
          <div>Executando</div>
        </>
      ) : (
        <>
          <div>▶️</div>
          <div>Pausado</div>
        </>
      )}
    </div>
  );
};

export default PlayPause;
