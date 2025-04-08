import React, { useState } from 'react';
import { cifrar, descifrar } from '../cipher/cifrado';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormularioCifrado = () => {
  const [texto, setTexto] = useState('');
  const [textoCifrado, setTextoCifrado] = useState('');
  const [textoDescifrado, setTextoDescifrado] = useState('');

  const handleCifrar = () => {
    const cifrado = cifrar(texto);
    setTextoCifrado(cifrado);
  };

  const handleDescifrar = () => {
    const descifrado = descifrar(textoCifrado);
    setTextoDescifrado(descifrado);
  };

  return (
    <div className="min-vh-100 bg-dark text-light d-flex justify-content-center align-items-center">
      <div
        className="card p-5 rounded-4 shadow-lg bg-secondary bg-opacity-10 border border-light w-100"
        style={{ maxWidth: '600px', backdropFilter: 'blur(10px)' }}
      >
        <h2 className="text-center mb-4 fw-bold text-info">Cifrado UltraSeguro</h2>

        <div className="mb-4">
          <label htmlFor="texto" className="form-label text-light">Texto a procesar</label>
          <input
            type="text"
            className="form-control bg-dark text-white border-info"
            id="texto"
            placeholder="Escribe tu mensaje aquí..."
            style={{ color: '#fff', backgroundColor: '#1e1e1e' }}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </div>

        <div className="d-flex gap-3 mb-4">
          <button className="btn btn-outline-info w-50 fw-semibold" onClick={handleCifrar}>
            Cifrar
          </button>
          <button className="btn btn-outline-light w-50 fw-semibold" onClick={handleDescifrar}>
            Descifrar
          </button>
        </div>

        {textoCifrado && (
          <div className="mt-3">
            <h5 className="text-info">🔐 Texto Cifrado:</h5>
            <p className="bg-black border border-info rounded p-2 text-light" style={{ wordWrap: 'break-word' }}>
              {textoCifrado}
            </p>
          </div>
        )}

        {textoDescifrado && (
          <div className="mt-3">
            <h5 className="text-success">🔓 Texto Descifrado:</h5>
            <p className="bg-black border border-success rounded p-2 text-light" style={{ wordWrap: 'break-word' }}>
              {textoDescifrado}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormularioCifrado;