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

export async function getServerSideProps(context) {
    const { movieId } = context.query;
    const movieInfo = await movieListService.getMovieDetails(movieId);

    const backdropPath = await movieInfo.backdrop_path;
    const headerImgPath = movieListService.getOriginalPosterByMovieId(backdropPath);

    const posterPath = await movieInfo.poster_path;
    const posterImgPath = movieListService.getOriginalPosterByMovieId(posterPath);

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

    return (
        <>
            <Head metadata={pageMetadata} />
            <Container>
                <HeaderStyled>
                    <HeaderImgContainer>
                        <Img
                            src={headerImgPath}
                            alt={movieInfo.title}
                            layout='fill'
                            priority
                        />
                    </HeaderImgContainer>
                    <Overlay2>
                        <OverlayContent2>
                            <h2>{movieInfo.title}</h2>
                            <FlexRowContainer>
                                <IconTime />
                                <h5>
                                    {parseInt(movieInfo.runtime / 60)}h
                                    {movieInfo.runtime % 60}m
                                </h5>
                                <h5>{movieInfo.release_date.substring(0, movieInfo.release_date.indexOf("-"))} </h5>
                            </FlexRowContainer>
                            <FlexRowContainer>
                                <IconStar />
                                <h4>{movieInfo.vote_average}</h4>
                                <IconVotes />
                                <h4>{movieInfo.vote_count}</h4>
                            </FlexRowContainer>
                        </OverlayContent2>
                    </Overlay2>
                </HeaderStyled>

                <DetailsSection>
                    <FlexRowContainerLeft>
                        <PosterContainer>
                            <Img
                                src={posterImgPath}
                                alt={movieInfo.title}
                                layout='fill'
                            />
                        </PosterContainer>
                        <DetailsContainerCol>
                            <p><span>Release date:</span> {movieInfo.release_date}</p>
                            <p><span>Budget:</span> ${movieInfo.budget / 1000}k</p>
                            <p>
                                <span>Genres: </span>
                                {movieInfo.genres.map((genre, index) =>
                                    movieInfo.genres.length - 1 === index
                                        ? `${genre.name}`
                                        : `${genre.name}, `)}
                            </p>
                            <p>
                                <span>Production: </span>
                                {movieInfo.production_companies.map((company, index) =>
                                    movieInfo.production_companies.length - 1 === index
                                        ? `${company.name}`
                                        : `${company.name}, `)}
                            </p>
                            <p>
                                <span>Countries: </span>
                                {movieInfo.production_companies.map((country, index) =>
                                    movieInfo.production_companies.length - 1 === index
                                        ? `${country.name}`
                                        : `${country.name}, `)}
                            </p>

                        </DetailsContainerCol>
                    </FlexRowContainerLeft>
                    <Description>
                        <p><span>Overview:</span> {movieInfo.overview}</p>
                    </Description>
                </DetailsSection>
            </Container >
        </>
    )
}

export default MovieDetails;
