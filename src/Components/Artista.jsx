import { Fragment } from "react";
import { BsTwitter, BsFacebook } from 'react-icons/bs';
import styled from "styled-components";

const BannerArtist = styled.img`
    height: 15rem;
    object-fit: cover;
`;

const SocialMedia = styled.div`
    display: flex;
    font-size: 2.2rem;
    gap: 2rem;
`;

const Artista = ({artista}) => {

    const{ 
        strBiographyES, strArtistBanner, 
        strFacebook, strTwitter, 
        strArtist
    } = artista;

    return ( 
        <Fragment>
            <h2>{strArtist}</h2>

            <BannerArtist src={strArtistBanner} alt={strArtist} />

            <p>
                {strBiographyES}
            </p>

            <SocialMedia>
                <a href={strFacebook}>
                    <BsFacebook />
                </a>

                <a href={strTwitter}>
                    <BsTwitter />
                </a>
            </SocialMedia>
           
        </Fragment>
    );
}
 
export default Artista;