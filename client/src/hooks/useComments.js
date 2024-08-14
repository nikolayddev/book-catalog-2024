import { useEffect, useState } from "react";
import { createComment, getAllComments } from "../api/comments-api";

export function useCreateComment() {
    const bookCreateHandler = (commentData, book_id) => createComment({ ...commentData, _bookId: book_id });

    return bookCreateHandler;
}

export function useGetAllCommentsById(book_id) {
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getAllComments();
            const filteredResult = result.filter(comment => comment._bookId === book_id);
            filteredResult.sort((a, b) => b._createdOn - a._createdOn);
            setAllComments(filteredResult);
        })();
    }, [book_id]);

    return [allComments, setAllComments];
}