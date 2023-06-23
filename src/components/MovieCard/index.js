import { PosterContainer, Poster } from "./styles";
import { StyledRouterLink } from "../GlobalComponents/styles";
import { links } from "../../services/ApiEndpointConfig";

const MovieCard = ({ imgPath, title, movieId }) => {

    const PosterAltText = title.concat(" - Movie Poster");
    const imgUrl = links.imageEndpoint.concat(imgPath);

    return (
        <StyledRouterLink href={`movies/${movieId}`} >
            <PosterContainer>
                <img
                    src={imgUrl}
                    alt={PosterAltText}
                    layout='fill'
                    loading="lazy"
                />
            </PosterContainer>
        </StyledRouterLink>
    )
}

export default MovieCard;