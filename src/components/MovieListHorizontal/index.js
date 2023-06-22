import { useRef, useState, useEffect } from "react";
import { Container, MovieList, ButtonElement, ButtonContainerLeft, ButtonContainerRight, CardScrollContainer } from "./styles";
import { SectionTitle } from "../GlobalComponents/styles";
import MovieCard from "../MovieCard";

const MovieListHorizontal = ({ movieList, listTitle }) => {

    const movieListRef = useRef(null);
    const [scrollPositionLeft, setscrollPositionLeft] = useState(0);
    const [movieListFullWidth, setMovieListFullWidth] = useState(0);
    const [movieListWidth, setMovieListWidth] = useState(0);

    const handleScroll = () => {
        setscrollPositionLeft(movieListRef.current.scrollLeft);
        setMovieListWidth(movieListRef.current.offsetWidth);
        setMovieListFullWidth(movieListRef.current.scrollWidth);
    };

    const scrollMovies = (direction) => {
        let newScrollPos;
        if (direction === "right") {
            if (scrollPositionLeft + movieListWidth > movieListFullWidth) {
                newScrollPos = 0;
            }
            else {
                newScrollPos = scrollPositionLeft + movieListWidth;
            }
        }
        else {
            if (scrollPositionLeft === 0) {
                newScrollPos = movieListFullWidth - movieListWidth;

            }
            else {
                newScrollPos = scrollPositionLeft - movieListWidth;
            }
        }
        movieListRef.current.scrollTo({
            left: newScrollPos,
            behavior: 'smooth',
        })
        setscrollPositionLeft(newScrollPos);
    }

    useEffect(() => {
        handleScroll();
    }, []);

    const movieCards = movieList.map(movie => {
        return (
            <MovieCard
                imgPath={movie.poster_path}
                title={movie.original_title}
                movieId={movie.id}
                key={movie.id}
            />
        )
    })

    return (
        <Container>
            <SectionTitle>{listTitle}</SectionTitle>
            <CardScrollContainer>
                <MovieList
                    ref={movieListRef}
                    onScroll={handleScroll}
                >
                    {movieCards}
                </MovieList>

                <ButtonContainerLeft onClick={() => scrollMovies("left")}>
                    <ButtonElement>{'<'}</ButtonElement>
                </ButtonContainerLeft>

                <ButtonContainerRight onClick={() => scrollMovies("right")}>
                    <ButtonElement>{'>'}</ButtonElement>
                </ButtonContainerRight>
            </CardScrollContainer>
        </Container>
    )
}

export default MovieListHorizontal;