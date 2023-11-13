import "@testing-library/jest-dom";
import { renderHook } from '@testing-library/react-hooks';
import { useMovieDetails } from "../hooks/useMovieDetails";

const mockedMovie = {
    "budget": 125000,
    "genres": [
        { "name": "Adventure" },
        { "name": "Action" }
    ],
    "id": 1025255,
    "overview": "Spiderman saves the world again.",
    "production_companies": [
        { "name": "Walt Disney Studios" },
        { "name": "Marvel Studios" }
    ],
    "production_countries": [
        { "name": "Mexico" }
    ],
    "release_date": "2022-09-29",
    "runtime": 90,
    "title": "Amazing Spiderman",
    "vote_average": 6.516,
    "vote_count": 31
}

const mockedMovieEmpty = {
    "budget": 0,
    "genres": [],
    "id": 1025255,
    "overview": "",
    "production_companies": [],
    "production_countries": [],
    "release_date": "",
    "runtime": 0,
    "title": "",
    "vote_average": 0,
    "vote_count": 0
}

describe("useMovieDetails hook", () => {

    afterEach(jest.clearAllMocks);

    it("returns formated movie details", () => {
        const { result } = renderHook(() => useMovieDetails(mockedMovie));

        expect(result.current.title).toBe("Amazing Spiderman");
        expect(result.current.runTime).toBe("1h 30min");
        expect(result.current.budget).toBe("$125,000");
        expect(result.current.genres).toBe("Adventure, Action");
        expect(result.current.production).toBe("Walt Disney Studios, Marvel Studios");
        expect(result.current.countries).toBe("Mexico");
        expect(result.current.releaseDate).toBe("29 September 2022");
        expect(result.current.releaseYear).toBe("2022");
        expect(result.current.overview).toBe("Spiderman saves the world again.");
        expect(result.current.votesAverage).toBe(6.516);
        expect(result.current.numberOfVotes).toBe(31);
    });

    it("returns formated movie when property is missing", () => {
        const { result } = renderHook(() => useMovieDetails(mockedMovieEmpty));

        expect(result.current.title).toBe("unknown");
        expect(result.current.runTime).toBe("unknown");
        expect(result.current.budget).toBe("unknown");
        expect(result.current.genres).toBe("unknown");
        expect(result.current.production).toBe("unknown");
        expect(result.current.countries).toBe("unknown");
        expect(result.current.releaseDate).toBe("unknown");
        expect(result.current.releaseYear).toBe("unknown");
        expect(result.current.overview).toBe("This movie doesn't have a plot description yet.");
        expect(result.current.votesAverage).toBe(0);
        expect(result.current.numberOfVotes).toBe(0);
    });
});
