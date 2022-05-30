import React, { useState } from 'react';

const Formulario = ({guardarBusquedaLetra}) => {

    // definir state de busqueda
    const [ busqueda, guardarBusqueda ] = useState({
        artista: '',
        cancion: ''
    });

    const { artista, cancion } = busqueda;
    // funcion para leer el contenido de cada input
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    // definir state para el error
    const [ error, guardarError ] = useState(false);

    // consultar las APIS
    const buscarInformacion = e => {
        e.preventDefault();
        if ( artista.trim() === '' || cancion.trim() === '' ) {
            guardarError(true);
            return;
        }
        guardarError(false);
        // Validado, pasar al componente principal
        guardarBusquedaLetra(busqueda);
    }

    return ( 
        <div className='bg-info'>
            <div className='container'>

                <div className='row'>

                    <form
                        onSubmit={buscarInformacion}
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                    >
                        <fieldset>
                            <legend 
                                className='text-center'
                            >Buscador Letras Canciones</legend>
                            { error 
                                ? <p
                                    className='alert alert-danger text-center p-2'
                                    >Todos los campos son obligatorios</p>
                                : null
                            }
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artista</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='artista'
                                            placeholder='Nombre Artista'
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Canción</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='cancion'
                                            placeholder='Nombre Canción'
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;