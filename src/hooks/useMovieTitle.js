
import { useState, useEffect } from "react";

export const useMovieTitle = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const getTitleToDisplay = (originalTitle, maxTitleLength = 26, maxWindowWidth = 800) => {
        if (originalTitle.length <= maxTitleLength || windowWidth < maxWindowWidth) {
            return originalTitle;
        }

        const lastSpaceIndex = originalTitle.lastIndexOf(" ", maxTitleLength);
        const cutTitle = originalTitle.slice(0, lastSpaceIndex);

        return cutTitle + "..."

    };

    return { getTitleToDisplay };
};
