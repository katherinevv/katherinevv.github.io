import { useEffect, useRef, useState } from "react";

export default function useScrollFade(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.15,
                rootMargin: "-80px 0px -80px 0px",
                ...options,
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
}