import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { within } from "@testing-library/dom";
import { ThemeProvider } from "styled-components";
import { ScrollProvider } from "../../context/scrollContext";
import { theme } from "../../styles/globalStyles";
import Header from "./";
import SearchBar from "../SearchBar";

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

jest.mock("../SearchBar")

describe('Header Component', () => {
    beforeEach(() => {
        SearchBar.mockImplementation(props => <>{props.children}</>)
        renderWithProviders(<Header />);
    })

    afterEach(jest.clearAllMocks);

    it('renders logo with alt text', () => {
        const logo = screen.getByAltText('Logo - Movie');

        expect(logo).toBeInTheDocument();
    });

    it('renders logo text', () => {
        const logoTextContainer = screen.getByText('Movie');
        const logoText = within(logoTextContainer).getByText('DB');

        expect(logoTextContainer).toBeInTheDocument();
        expect(logoText).toBeInTheDocument();
    });

    it('renders SearchBar properly', () => {
        expect(SearchBar).toHaveBeenCalled();
        expect(SearchBar).toHaveBeenCalledTimes(1);
    });

});
