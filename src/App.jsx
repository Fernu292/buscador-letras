import { Fragment, useEffect, useState } from "react";
import Formulario from "./Components/Formulasio";
import axios from "axios";
import Letra from "./Components/Letra";
import Artista from "./Components/Artista";

const App = () => {

    const[busquedaLetra, setLetra] = useState({});
    const [lyrics, setLyrics] = useState('');
    const[artista, setArtista] = useState();


    useEffect( ()=>{
        if(Object.keys(busquedaLetra).length === 0) return;

        const consultarApiLetra = async ()=>{
            const { artista, cancion } = busquedaLetra;
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

            const respuesta = await axios.get(url);
            const {data} = respuesta;

            setLyrics(data.lyrics);

        };

        const consultarApiArtista = async ()=>{
            const { artista } = busquedaLetra;

            const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

            const respuesta  = await axios.get(url);
            const data = respuesta.data.artists[0];

            setArtista(data);
        };

        consultarApiArtista();
        consultarApiLetra();
    }, [busquedaLetra]);


    return ( 
        <Fragment>
            <Formulario setLetra = {setLetra}/>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {
                            artista
                            ?
                            <Artista artista = {artista} />
                            : null
                        }
                    </div>
                    
                    <div className="col-md-6">
                        {lyrics? 
                             <Letra lyrics = {lyrics} /> :null
                        }
                    </div>
                </div>
            </div>
            
        </Fragment>
     );
}
 
export default App;
