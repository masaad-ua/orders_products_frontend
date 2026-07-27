import {useEffect, useState} from "react";

interface Pagination {
    hasNextPage: boolean;
}

interface PaginatedResponse<T> {
    data: T[];
    pagination: Pagination;
}

interface UseInfiniteScrollProps<T extends { id: number | string }> {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    response?: PaginatedResponse<T>;
    isLoading: boolean;
}

export const useInfiniteScroll = <
    T extends { id: number | string },
>({
   setPage,
   response,
   isLoading,
  }: UseInfiniteScrollProps<T>) => {
    const [items, setItems] = useState<T[]>([]);
    const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        const el = e.currentTarget;

        const isBottom =
            el.scrollTop + el.clientHeight >= el.scrollHeight - 100;

        if (
            isBottom &&
            !isLoading &&
            !isLoadingNextPage &&
            response?.pagination.hasNextPage
        ) {
            setIsLoadingNextPage(true);
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        if (!response) {
            return;
        }

        setItems((prev) => {
            const ids = new Set(prev.map((item) => item.id));

            const newItems = response.data.filter(
                (item) => !ids.has(item.id),
            );

            return [...prev, ...newItems];
        });

        setIsLoadingNextPage(false);
    }, [response]);

    const reset = () => {
        setPage(1);
        setItems([]);
        setIsLoadingNextPage(false);
    };

    return {
        items,
        setItems,
        handleScroll,
        isLoadingNextPage,
        reset,
    };
};