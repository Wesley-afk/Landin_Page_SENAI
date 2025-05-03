import React, { useState } from 'react';
import Cadastro from './Cadastro/Cadastro';

function ComponentePai() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrarCadastro(true)}>Abrir Cadastro</button>

      {mostrarCadastro && (
        <Cadastro setMostrarCadastro={setMostrarCadastro} />
      )}
    </div>
  );
}

export default ComponentePai;