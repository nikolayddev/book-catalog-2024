import { useEffect, useState } from "react";

export function useNav() {
    const [isVisible, setIsVisible] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            setIsVisible(currentScrollY < prevScrollY);
            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollY]);

    return [isSticky, isVisible];
}