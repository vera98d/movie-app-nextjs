import { useEffect, useState } from "react";
import { Container, SearchResult, SearchResultDetails } from "./styles";
import MovieCard from "../MovieCard";
import movieListService from "../../services/MovieListService";
import { StyledRouterLink } from "../GlobalComponents/styles";
import { useScroll } from '../../context/scrollContext';
import { useMovieTitle } from "../../hooks/useMovieTitle";

const SearchResults = ({ searchText }) => {

    const [searchResults, setSearchResults] = useState([]);
    const [shwowResults, setShowResults] = useState(false);
    const { enableScrolling, disableScrolling } = useScroll();
    const { getTitleToDisplay } = useMovieTitle();

    useEffect(() => {
        if (searchText) {
            setShowResults(true);
            disableScrolling();
            movieListService.searchForMoviesByText(searchText)
                .then(data => {
                    setSearchResults(data);
                });
        }
        else {
            setShowResults(false);
            enableScrolling();
            setSearchResults([]);
        }

    }, [searchText]);

    return (
        <Container isvisible={shwowResults.toString()}>
            {
                searchResults.map(movie => {
                    const formatedMovieTitle = getTitleToDisplay(movie.title);

                    return (
                        <StyledRouterLink
                            key={movie.id}
                            href={`/movies/${movie.id}`} prefetch={false}>
                            <SearchResult>
                                <MovieCard
                                    imgPath={movie.poster_path}
                                    title={movie.title}
                                    movieId={movie.id}
                                    size="small"
                                />
                                <SearchResultDetails key={movie.id}>
                                    <p>{formatedMovieTitle}</p>
                                    <p>
                                        <span>{movie.release_date.substring(0, 4)}</span>
                                    </p>
                                </SearchResultDetails>
                            </SearchResult>
                        </StyledRouterLink>
                    )
                })
            }
        </Container>
    )
}

export default SearchResults;