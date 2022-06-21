import { useEffect, useState } from "react";
import Service from "../../services/service";
import Spinner from "../../components/spinner/spinner";
import { useParams } from "react-router-dom";
import CommentItemZoom from "../../components/commentItem_zoom/commentItem_zoom";
import ErrorMessage from "../errorMessage/errorMessage";
import Modal from "../../components/modal/modal";
import FormComment from "../../components/form/form";
import "./postInfo_zoom.scss";

const PostInfoZoom = () => {
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
            <CommentItemZoom key={id} data={item}/>
        )
    })

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    return (
        <>
            {errorMessage}
            { spinner}
            {!(error || loading || !post) ?
            <div className="postInfoZoom">
            <div className="postInfoZoom__title">{post.title}</div>
            <div className="postInfoZoom__text">{post.body}</div>
            <div className="postInfoZoom__comment">
                <h3 className="postInfoZoom__comment__title">Комментарии</h3>
                <div className="postInfoZoom__comment__wrapper">
                    {elements}
                </div>
            </div>
            <button className="button button__zoom" onClick={() => setShowModal(true)}>Добавить комментарий</button>
        </div>
         : null }
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <FormComment/>   
         </Modal>   
        </>
    )
  
}
export default PostInfoZoom;