import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (postQuery: PostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", postQuery],
    queryFn: ({ pageParam }) =>
      axios
        .get<Post[]>("/posts", {
          params: {
            _page: pageParam,
            _limit: postQuery.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
    placeholderData: keepPreviousData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default usePosts;
