import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { ScrollProvider } from "../../context/scrollContext";
import { theme } from "../../styles/globalStyles";
import SearchBar from "./";
import SearchResults from "../SearchResults";

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

jest.mock("../SearchResults")

describe('Header Component', () => {
    beforeEach(() => {
        SearchResults.mockImplementation(props => <>{props.children}</>)
        renderWithProviders(<SearchBar />);
    })

    afterEach(jest.clearAllMocks);

    it('renders search input initially hidden', () => {
        const searchInput = screen.queryByPlaceholderText('Search The MovieDB');

        expect(searchInput).toBeInTheDocument();

        const searchInputContainer = searchInput.closest('div');

        expect(searchInputContainer).toHaveStyle('width: 0px');
        expect(searchInputContainer).toHaveStyle('right: -2.3em');

    });

    it('toggles search input visibility', () => {
        const searchInputContainer = screen.queryByPlaceholderText('Search The MovieDB').closest('div');
        const searchIcon = screen.getByTestId('search-icon');
        const closeIcon = screen.getByTestId('close-icon');

        fireEvent.click(searchIcon);
        expect(searchInputContainer).toHaveStyle('width: 100vw');
        expect(searchInputContainer).toHaveStyle('right: 0');

        fireEvent.click(closeIcon);
        expect(searchInputContainer).toHaveStyle('width: 0px');
        expect(searchInputContainer).toHaveStyle('right: -2.3em');
    });

    it('sets focus on search input after making it visible', () => {
        const searchInput = screen.queryByPlaceholderText('Search The MovieDB');
        const searchIcon = screen.getByTestId('search-icon');

        fireEvent.click(searchIcon);
        expect(document.activeElement).toBe(searchInput);
    });

    it('sets input value properly', () => {
        const searchInput = screen.queryByPlaceholderText('Search The MovieDB');
        const searchIcon = screen.getByTestId('search-icon');
        const closeIcon = screen.getByTestId('close-icon');

        fireEvent.click(searchIcon);
        fireEvent.change(searchInput, { target: { value: 'Movie title' } });
        expect(searchInput.value).toBe('Movie title');

        fireEvent.click(closeIcon);
        expect(searchInput.value).toBe('');
    });

    it('renders SearchResults properly', () => {
        expect(SearchResults).toHaveBeenCalled();
        expect(SearchResults).toHaveBeenCalledTimes(1);
    });

});
