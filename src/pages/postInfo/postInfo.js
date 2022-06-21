import { useEffect, useState } from "react";
import Service from "../../services/service";
import Spinner from "../../components/spinner/spinner";
import { useParams } from "react-router-dom";
import CommentItem from "../../components/commentItem/commentItem";
import ErrorMessage from "../errorMessage/errorMessage";
import Modal from "../../components/modal/modal";
import FormComment from "../../components/form/form";
import "./postInfo.scss";

const PostInfo = () => {
    const {id} = useParams();
    const [post, setPosts] = useState(null);
    const [comment, setComment] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const userService = new Service();

    useEffect(() => { 
        updatePost();
        updateComment();    
    }, [id]);

    const updatePost = () => {
        setLoading(true);
        userService.getPost(id)
        .then(onPostLoaded)
        .catch(onError);  
    }

    const onPostLoaded = (post) => {
        setLoading(false);
        setPosts(post);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }
    const onCommentLoaded = (comment) => {
        setLoading(false);
        setComment(comment);
    }

    const updateComment = () => {
        userService.getComments(id)
        .then(onCommentLoaded)
        .catch(onError);  
    }

    const elements = comment && comment.map(item => {
        const {id} = item;
        return (
            <CommentItem key={id} data={item}/>
        )
    })

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
 
    return (
        <>
            {errorMessage}
            { spinner}
            {!(error || loading || !post) ?
            <div className="postInfo">
            <div className="postInfo__title">{post.title}</div>
            <div className="postInfo__text">{post.body}</div>
            <div className="postInfo__comment">
                <h3 className="postInfo__comment__title">Комментарии</h3>
                <div className="postInfo__comment__wrapper">
                    {elements}
                </div>
            </div>
            <button className="button button__add" onClick={() => setShowModal(true)}>Добавить комментарий</button>
        </div>
         : null }

        <Modal
            showModal={showModal} 
            setShowModal={setShowModal}>
            <FormComment id={id}/>
        </Modal>
        </>
    )
  
}
export default PostInfo;