import "@testing-library/jest-dom";
import { renderHook } from '@testing-library/react-hooks';
import { ScrollProvider, useScroll } from "../context/scrollContext";

jest.mock('next/router', () => ({
    __esModule: true,
    useRouter: jest.fn().mockReturnValue({
        events: { on: jest.fn(), off: jest.fn() },
        push: jest.fn(),
    }),
}));

describe('scroll context', () => {
    afterEach(jest.clearAllMocks);

    it('scrolling is enabled by default', () => {
        const wrapper = ({ children }) => <ScrollProvider>{children}</ScrollProvider>;
        const { result } = renderHook(() => useScroll(), { wrapper });

        expect(result.current.isScrollingEnabled).toBeTruthy();
    });

    it('scrolling is toggled with disableScrolling() and enableScrolling()', () => {
        const wrapper = ({ children }) => <ScrollProvider>{children}</ScrollProvider>;
        const { result } = renderHook(() => useScroll(), { wrapper });

        result.current.disableScrolling();
        expect(result.current.isScrollingEnabled).toBeFalsy();

        result.current.enableScrolling();
        expect(result.current.isScrollingEnabled).toBeTruthy();
    });
});
