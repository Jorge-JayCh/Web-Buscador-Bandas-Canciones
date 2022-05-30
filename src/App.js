import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';

function App() {

  // definir state para la consulta
  const [ busquedaLetra, guardarBusquedaLetra ] = useState({});
  // definir state para la letra
  const [ letra, guardarLetra ] = useState('');

  // consulta a la API
  useEffect(()=>{
    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaLetra;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const resultado = await axios(url);
      guardarLetra(resultado.data.lyrics);
    }
    consultarApiLetra();
  }, [busquedaLetra]);

  return (
    <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
      />

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            1
          </div>
          <div className='col-md-6'>
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
