import { PosterContainer, Poster, NoCoverPoster } from "./styles";
import { StyledRouterLink } from "../GlobalComponents/styles";
import { links } from "../../services/ApiEndpointConfig";

const MovieCard = ({ imgPath, title, movieId, size }) => {

    const PosterAltText = title.concat(" - Movie Poster");
    const imgUrl = links.imageEndpoint.concat(imgPath);

    return (
        <StyledRouterLink href={`/movies/${movieId}`} >
            <PosterContainer size={size}>
                {
                    imgPath ?
                        <Poster
                            src={imgUrl}
                            alt={PosterAltText}
                            layout='fill'
                            loading="lazy"
                        />
                        :
                        <NoCoverPoster>
                            <p>
                                Movie<span> DB</span>
                            </p>
                        </NoCoverPoster>
                }

            </PosterContainer>
        </StyledRouterLink>
    )
}

export default MovieCard;