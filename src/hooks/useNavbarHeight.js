import { useEffect } from "react";

export default function useNavbarHeight(navbarSelector = ".navbar") {
    useEffect(() => {
        const navbar = document.querySelector(navbarSelector);
        if (!navbar) return;

        const updateHeight = () => {
            const height = navbar.offsetHeight;
            document.documentElement.style.setProperty(
                "--navbar-height",
                `${height}px`
            );
        };

        updateHeight();

        const observer = new ResizeObserver(updateHeight);
        observer.observe(navbar);

        return () => observer.disconnect();
    }, [navbarSelector]);
}