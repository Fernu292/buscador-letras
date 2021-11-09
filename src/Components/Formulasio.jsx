
import { useState } from "react";


const Formulario = ({setLetra}) => {

    const[busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    const [error, setError] = useState(false);

    //funcion a cada input
    const actualizarState = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    };

    const {artista, cancion} = busqueda;

    const buscarInformacion = (e)=>{
        e.preventDefault();

        if(artista.trim() === '' || cancion.trim() === ''){
            setError(true);
            return;
        }

        //Pasar al componente principal 
        setError(false);

        setLetra(busqueda);
        
    }

    return ( 
        <div className="bg-info">
            <div className="container">

                {error ? <p className='alert alert-danger text-center p-2'>Todos los campos son obligatorios </p> : null}
                <form 
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    onSubmit={buscarInformacion}
                >
                    <fieldset>
                        <legend className='text-center'>Buscador Letra Canciones</legend>

                        <div className="row">


                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name='artista'
                                        placeholder="Nombre Artista"
                                        onChange = {actualizarState}
                                        value = {artista}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Cancion</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name='cancion'
                                        placeholder="Nombre Cancion"
                                        onChange = {actualizarState}
                                        value = {cancion}
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
    );
}
 
export default Formulario;