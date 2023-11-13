import "@testing-library/jest-dom";
import { renderHook } from '@testing-library/react-hooks';
import { useMovieTitle } from "../hooks/useMovieTitle";

describe("useMovieTitle hook", () => {

    afterEach(jest.clearAllMocks);

    it("returns full title", () => {
        const { result } = renderHook(() => useMovieTitle());
        const formatedTitle = result.current.getTitleToDisplay("Short title");

        expect(formatedTitle).toBe("Short title");
    });

    it("returns shortened title", () => {
        const { result } = renderHook(() => useMovieTitle());
        const formatedTitle = result.current.getTitleToDisplay("This is a very long title that needs to be cut");

        expect(formatedTitle).toBe("This is a very long title...");
        expect(formatedTitle.length).toBeLessThanOrEqual(29);
    });

    it("returns shortened title of specified length", () => {
        const { result } = renderHook(() => useMovieTitle());
        const formatedTitle = result.current.getTitleToDisplay("This is a very long title that needs to be cut", 20);

        expect(formatedTitle).toBe("This is a very long...");
        expect(formatedTitle.length).toBeLessThanOrEqual(23);
    });
});
