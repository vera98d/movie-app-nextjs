import movieListService from "../../services/MovieListService";
import Head from "../../components/Head";
import {
    Container,
    HeaderStyled,
    OverlayContent2,
    Overlay2,
    DetailsSection,
    PosterContainer,
    Description,
    HeaderImgContainer,
    Img
} from "../../styles/MovieDetails";
import {
    FlexRowContainer,
    IconStar,
    IconTime,
    IconVotes,
    FlexRowContainerLeft,
    DetailsContainerCol
} from "../../components/GlobalComponents/styles";

import { NoCoverPoster } from "../../components/GlobalComponents/styles";
import { useMovieDetails } from "../../hooks/useMovieDetails";


export async function getServerSideProps(context) {
    const { movieId } = context.query;
    const movieInfo = await movieListService.getMovieDetails(movieId);

    const backdropPath = movieInfo.backdrop_path;
    const headerImgPath = backdropPath ? movieListService.getOriginalPosterByMovieId(backdropPath) : null;

    const posterPath = movieInfo.poster_path;
    const posterImgPath = posterPath ? movieListService.getOriginalPosterByMovieId(posterPath) : null;


    return {
        props: {
            movieInfo,
            headerImgPath,
            posterImgPath
        }
    }
}

const MovieDetails = ({ movieInfo, headerImgPath, posterImgPath }) => {

    const pageMetadata = {
        title: `${movieInfo.title} - MovieBD`,
        description: `This page is dedicated to ${movieInfo.title} movie.`
    };

    const movieInfoFormated = useMovieDetails(movieInfo);

    return (
        <>
            <Head metadata={pageMetadata} />
            <Container>
                <HeaderStyled>
                    <HeaderImgContainer>
                        {
                            headerImgPath ?
                                <Img
                                    src={headerImgPath}
                                    alt={movieInfo.title}
                                    layout='fill'
                                    priority
                                />
                                : null
                        }
                    </HeaderImgContainer>
                    <Overlay2>
                        <OverlayContent2>
                            <h2>{movieInfoFormated.title}</h2>
                            <FlexRowContainer>
                                <IconTime />
                                <h5>
                                    {movieInfoFormated.runTime}
                                </h5>
                                <h5>{movieInfoFormated.releaseYear} </h5>
                            </FlexRowContainer>
                            <FlexRowContainer>
                                <IconStar />
                                <h4>{movieInfoFormated.votesAverage}</h4>
                                <IconVotes />
                                <h4>{movieInfoFormated.numberOfVotes}</h4>
                            </FlexRowContainer>
                        </OverlayContent2>
                    </Overlay2>
                </HeaderStyled>

                <DetailsSection>
                    <FlexRowContainerLeft>
                        <PosterContainer>
                            {
                                posterImgPath ?
                                    <Img
                                        src={posterImgPath}
                                        alt={movieInfo.title}
                                        layout='fill'
                                    />
                                    :
                                    <NoCoverPoster>
                                        <h2>
                                            Movie<span> DB</span>
                                        </h2>
                                    </NoCoverPoster>
                            }

                        </PosterContainer>
                        <DetailsContainerCol>
                            <p><span>Release date:</span> {movieInfoFormated.releaseDate}</p>
                            <p><span>Budget:</span> {movieInfoFormated.budget}</p>
                            <p>
                                <span>Genres: </span>
                                {movieInfoFormated.genres}
                            </p>
                            <p>
                                <span>Production: </span>
                                {movieInfoFormated.production}
                            </p>
                            <p>
                                <span>Countries: </span>
                                {movieInfoFormated.countries}
                            </p>
                        </DetailsContainerCol>
                    </FlexRowContainerLeft>
                    <Description>
                        <p><span>Overview:</span> {movieInfoFormated.overview}</p>
                    </Description>
                </DetailsSection>
            </Container >
        </>
    )
}

export default MovieDetails;
