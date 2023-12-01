import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { ScrollProvider } from "../../context/scrollContext";
import { theme } from "../../styles/globalStyles";
import SearchResults from "./";

const renderWithProviders = (component) => {
    return render(
        <ScrollProvider>
            <ThemeProvider theme={theme}>
                {component}
            </ThemeProvider>
        </ScrollProvider>
    );
};

jest.mock('next/router', () => ({
    __esModule: true,
    useRouter: jest.fn().mockReturnValue({
        events: { on: jest.fn(), off: jest.fn() },
        push: jest.fn(),
    }),
}));

const mockedMovies = [
    {
        id: 1,
        poster_path: 'path/to/image1.jpg',
        title: 'Movie Title',
        release_date: '2023-01-01',
    },
    {
        id: 2,
        poster_path: 'path/to/image1.jpg',
        title: 'Movie Title 2',
        release_date: '2020-08-05',
    },
    {
        id: 3,
        poster_path: 'path/to/image3.jpg',
        title: 'Movie Title 3',
        release_date: '2010-03-12',
    },
];

jest.mock('../../services/MovieListService', () => ({
    searchForMoviesByText: jest.fn().mockResolvedValue([
        {
            id: 1,
            poster_path: 'path/to/image1.jpg',
            title: 'Movie Title',
            release_date: '2023-01-01',
        },
        {
            id: 2,
            poster_path: 'path/to/image1.jpg',
            title: 'Movie Title 2',
            release_date: '2020-08-05',
        },
        {
            id: 3,
            poster_path: 'path/to/image3.jpg',
            title: 'Movie Title 3',
            release_date: '2010-03-12',
        },
    ]),
}));

describe('SearchResults Component', () => {
    afterEach(jest.clearAllMocks);

    it('doesnt show results pane when searchtext is empty', () => {
        renderWithProviders(<SearchResults searchText={''} />);

        const resultsContainer = screen.getByTestId('results-container');
        expect(resultsContainer).toHaveStyle('display: none')
    });

    it('shows results pane when searchtext has value', () => {
        renderWithProviders(<SearchResults searchText={'Movie Title'} />);

        const resultsContainer = screen.getByTestId('results-container');
        expect(resultsContainer).toHaveStyle('display: flex');
    });

    it('renders results properly', async () => {
        await act(async () => {
            renderWithProviders(<SearchResults searchText={'Movie Title'} />);
        });

        const results = await screen.findAllByTestId('result-details');
        expect(results.length).toBe(3);

        mockedMovies.forEach(async (movie) => {
            const movieTitle = await screen.findByText(movie.title);
            const movieYear = await screen.findByText(movie.release_date.substring(0, 4));

            expect(movieTitle).toBeInTheDocument();
            expect(movieYear).toBeInTheDocument();
        });
    });

});
