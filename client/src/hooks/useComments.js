import { useContext, useEffect, useState } from "react";
import { createComment, deleteComment, editComment, getAllComments } from "../api/comments-api";
import AuthContext from "../contexts/UserContext";

export function useCreateComment() {
    const commentCreateHandler = (commentData, book_id) => createComment({ ...commentData, _bookId: book_id });

    return commentCreateHandler;
}

export function useDeleteComment() {
    const commentDeleteHandler = (comment_id) => deleteComment(comment_id);

    return commentDeleteHandler;
}

export function useUpdateComment() {
    const commentUpdateHandler = (comment_id, data) => editComment(comment_id, data);

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
    const { isAuthenticated, user_id } = useContext(AuthContext);
    
    if (isAuthenticated && owner_id == user_id) {
        console.log(true);
        return true;
    }
}