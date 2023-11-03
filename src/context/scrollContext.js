import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollContext = createContext();

export const useScroll = () => {
    return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }) => {
    const [isScrollingEnabled, setIsScrollingEnabled] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            enableScrolling();
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);


    useEffect(() => {
        const bodyStyle = document.body.style;

        if (!isScrollingEnabled) {
            bodyStyle.overflow = 'hidden';
            bodyStyle.height = '100vh';
        }
        else {
            bodyStyle.overflow = 'visible';
            bodyStyle.height = 'auto';
        }
    }, [isScrollingEnabled]);

    const enableScrolling = () => {
        setIsScrollingEnabled(true);
    };

    const disableScrolling = () => {
        setIsScrollingEnabled(false);
    };

    return (
        <ScrollContext.Provider
            value={{
                isScrollingEnabled,
                enableScrolling,
                disableScrolling
            }}>
            {children}
        </ScrollContext.Provider>
    );
};
