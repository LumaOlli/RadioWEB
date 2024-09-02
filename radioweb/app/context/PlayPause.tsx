import React, { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayPause = () => {
  const { incremento, decremento, playing, togglePlaying } = useContext(HomeContext);

  return (
    <div style={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f0f0f0', // Alterado para um fundo cinza claro
      padding: '10px',
      borderRadius: '50px', // Bordas arredondadas
      gap: '20px', // Espaço entre os ícones
    }}>
      <button 
        onClick={decremento} 
        style={{
          backgroundColor: 'transparent', 
          border: 'none', 
          color: '#000', // Alterado para ícones em preto
          cursor: 'pointer',
        }}
      >
        <FontAwesomeIcon icon={faMinus} size="2x" />
      </button>

      <button 
        onClick={togglePlaying} 
        style={{
          backgroundColor: '#fff', 
          border: 'none', 
          borderRadius: '50%', 
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        <FontAwesomeIcon 
          icon={playing ? faPause : faPlay} 
          size="2x" 
          style={{ color: '#000' }} 
        />
      </button>

      <button 
        onClick={incremento} 
        style={{
          backgroundColor: 'transparent', 
          border: 'none', 
          color: '#000', // Alterado para ícones em preto
          cursor: 'pointer',
        }}
      >
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </button>
    </div>
  );
};

export default PlayPause;