import { useEffect, useState } from "react";
import { createComment, deleteComment, editComment, getAllComments, getOneComment } from "../api/comments-api";
import { useAuthContext } from "../contexts/AuthContext.jsx";

export function useCreateComment() {
    const commentCreateHandler = (commentData, book_id, username) => createComment({ ...commentData, _bookId: book_id, username });

    return commentCreateHandler;
}

export function useGetOneComment(comment_id) {
    const [currentComment, setCurrentComment] = useState({});

    useEffect(() => {
        (async () => {
            const result = await getOneComment(comment_id);
            setCurrentComment(result);
        })();
    }, [comment_id]);

    return [currentComment, setCurrentComment];
}

export function useDeleteComment() {
    const commentDeleteHandler = (comment_id) => deleteComment(comment_id);

    return commentDeleteHandler;
}

export function useUpdateComment() {
    const commentUpdateHandler = (comment_id, data, book_id, username) => editComment(comment_id, { ...data, _bookId: book_id, username });

    return commentUpdateHandler;
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

export function useIsCommentOwner(owner_id) {
    const { isAuthenticated, user_id } = useAuthContext();

    if (isAuthenticated && owner_id == user_id) {
        console.log(true);
        return true;
    }
}