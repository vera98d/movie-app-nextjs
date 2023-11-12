import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Head from ".";

const mockedMetadata = {
    title: "Amazing Spiderman",
    description: "Spiderman saves the world from mosters."
}

jest.mock('next/head', () => ({
    __esModule: true,
    default: ({ children }) => {
        return <>{children}</>;
    },
}));

describe("Head Component", () => {

    afterEach(jest.clearAllMocks);

    it("renders page title properly", () => {
        render(<Head metadata={mockedMetadata} />);

        const pageTitle = document.title;

        expect(pageTitle).toBe(mockedMetadata.title);
    });

    it("renders page description properly", async () => {
        render(<Head metadata={mockedMetadata} />);

        const pageDescription = document.querySelector("meta[name='description']").content;

        expect(pageDescription).toBe(mockedMetadata.description);
    });

    it("renders page keywords properly", async () => {
        render(<Head metadata={mockedMetadata} />);

        const pageKeywords = document.querySelector("meta[name='keywords']").content;
        const expectedKeywords = `movie, cinematography, ${mockedMetadata.title}`;

        expect(pageKeywords).toBe(expectedKeywords);
    });
});