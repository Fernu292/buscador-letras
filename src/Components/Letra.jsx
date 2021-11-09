import { Fragment } from "react";


const Letra = ({lyrics}) => {
    return ( 
        <Fragment>
            <h2>Letra Cancion</h2>
            <p className='letra'>{lyrics}</p>

        </Fragment>
     );
}
 
export default Letra;