class MovieListService {
    getMovieList = async (listType) => {
        const url = `https://api.themoviedb.org/3/movie/${listType}?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data.results;
        }
        catch (error) {
            console.error('Error occured while fetching movies:', error);
            return [];
        }
    }

    getOriginalPosterByMovieId = (movieId) => {
        return `https://image.tmdb.org/t/p/original/${movieId}`;
    }

    getMovieDetails = async (movieId) => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Error occured while fetching movies:', error);
            return [];
        }
    }

    findMoviesByQuery = async (query) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1'`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data.results;
        }
        catch (error) {
            console.error('Error occured while fetching movies:', error);
            return [];
        }
    }

}

const movieListService = new MovieListService();

export default movieListService;