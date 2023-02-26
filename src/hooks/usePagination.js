import { useMemo } from "react";

export const usePagination = (totalPages) => {
    const pagesArray = useMemo(() => {
        let totalArray = []
        for (let i = 0; i < totalPages; i++) {
            totalArray.push(i+1);
        }
    
        return totalArray
    }, [totalPages]);

    return pagesArray
}