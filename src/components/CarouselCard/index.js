import { StyledRouterLink } from "../GlobalComponents/styles";
import movieListService from "../../services/MovieListService";
import { CardCountainer, Overlay, OverlayContent, RetesContainer, Icon, ImgContainer, Img } from "./styles";

const CarouselCard = ({ movie }) => {
    return (
        <CardCountainer>
            <ImgContainer>
                <Img
                    src={movieListService.getOriginalPosterByMovieId(movie.backdrop_path)}
                    alt={movie.title}
                    layout='fill'
                    priority
                />
            </ImgContainer>
            <Overlay>
                <OverlayContent>
                    <StyledRouterLink href={`movies/${movie.id}`}>
                        <h1>
                            {movie.title}
                        </h1>
                    </StyledRouterLink>
                    <RetesContainer>
                        <Icon />
                        <h3>{movie.vote_average}</h3>
                    </RetesContainer>
                </OverlayContent>
            </Overlay>
        </CardCountainer>
    )
}

export default CarouselCard;