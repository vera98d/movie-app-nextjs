import movieListService from "../services/MovieListService";
import { movieListKeywords } from "../services/ApiEndpointConfig";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MovieListHorizontal from "../components/MovieListHorizontal";
import CarouselCard from "../components/CarouselCard";
import { Container } from "../styles/Home";
import HeadComponent from "../components/HeadComponent";

export async function getServerSideProps() {
  const [
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    nowPlayingMoviesAll
  ] = await Promise.all([
    movieListService.getMovieList(movieListKeywords.popular),
    movieListService.getMovieList(movieListKeywords.topRated),
    movieListService.getMovieList(movieListKeywords.upcoming),
    movieListService.getMovieList(movieListKeywords.nowPlaying)
  ]);

  const nowPlayingMovies = nowPlayingMoviesAll.filter(movie =>
    movie.title.length < 20)

  return {
    props: {
      popularMovies,
      topRatedMovies,
      upcomingMovies,
      nowPlayingMovies
    }
  }
}

const Home = ({ popularMovies, topRatedMovies, upcomingMovies, nowPlayingMovies }) => {

  const pageMetadata = {
    title: "MovieDB - the movie database",
    description: "This site is dedicaded to cinematogramhy lovers."
  };

  const carouselCards = nowPlayingMovies.map(movie => {
    return (
      <CarouselCard movie={movie} key={movie.id} />
    )
  })

  return (
    <>
      <HeadComponent metadata={pageMetadata} />
      <Container>
        {carouselCards.length > 0 && (
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            stopOnHover={false}
            interval={5000}
            autoFocus={true}
          >
            {carouselCards}
          </Carousel>
        )}
        <MovieListHorizontal movieList={popularMovies} listTitle="Popular movies" />
        <MovieListHorizontal movieList={topRatedMovies} listTitle="Top rated movies" />
        <MovieListHorizontal movieList={upcomingMovies} listTitle="Upocomming productions" />
      </Container>
    </>
  )
}

export default Home;