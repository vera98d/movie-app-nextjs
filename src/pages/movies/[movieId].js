import movieListService from "../../services/MovieListService";
import HeadComponent from "../../components/HeadComponent";
import {
    Container,
    HeaderStyled,
    OverlayContent2,
    Overlay2,
    DetailsSection,
    PosterContainer,
    Description,
    HeaderImgContainer,
    Img,
    DetailedInformation, DetailsSection2
} from "../../styles/MovieDetails";
import {
    FlexRowContainer,
    IconStar,
    IconTime,
    IconVotes,

} from "../../components/GlobalComponents/styles";
import { MdOutlineNaturePeople } from 'react-icons/md';

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
            <HeadComponent metadata={pageMetadata} />
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

                    <DetailedInformation>
                        <p>Release date:</p>
                        <p>{movieInfoFormated.releaseDate}</p>

                        <p>Budget:</p>
                        <p>{movieInfoFormated.budget}</p>

                        <p>Genres: </p>
                        <p>{movieInfoFormated.genres}</p>

                        <p>Production: </p>
                        <p>{movieInfoFormated.production}</p>

                        <p>Countries: </p>
                        <p> {movieInfoFormated.countries} </p>
                    </DetailedInformation>

                    <Description>
                        <p> <span><MdOutlineNaturePeople /></span> Plot description:</p>
                        <p>{movieInfoFormated.overview}</p>
                    </Description>

                </DetailsSection>
            </Container >
        </>
    )
}

export default MovieDetails;
