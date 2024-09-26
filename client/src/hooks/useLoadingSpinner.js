import { useEffect, useState } from "react";

export function useIsLoading(data) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (data === true) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [data]);

    return [isLoading, setIsLoading];
}