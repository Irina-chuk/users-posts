import { useEffect, useState } from "react";
import Service from "../services/service";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import { useParams } from "react-router-dom";
import CommentItem from "../commentItem/commentItem";
import Form from "../form/form";
import "./postInfo.scss";

const PostInfo = () => {
    const {id} = useParams();
    const {userId} = useParams();
    const [post, setPosts] = useState(null);
    const [comment, setComment] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const[name, setName] = useState("");
    const[body, setBody] = useState("");
    const[email, setEmail] = useState("");
    const userService = new Service();


    const onChange = e => {
        switch (e.target.name) {
          case 'name':
            return setName(e.target.value);
          case 'body':
            return setBody(e.target.value);
          case 'email':
            return setEmail(e.target.value);
          default:
            break;
        }
      };

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
    const onClear = () => {
        setName('');
        setBody('');
        setEmail('');
    }

    const onSubmit = async e => {
        e.preventDefault();
        const inputs = {
            name,
            body,
            email,
            userId
        };
        try {
                let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(inputs)
                }); 
                let result = await response.json();
                console.log(result);
          } catch (error) {
            throw new Error(error);
          } finally {
              onClear();
          }
        
      };

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
        <Form showModal={showModal} setShowModal={setShowModal}>
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="input__name">
                        <input type="text" name="name" value={name} onChange={onChange} required/>
                        <label htmlFor="name">Введите название</label>
                    </div>
                    <div className="input__email">
                        <input type="email" name="email" value={email} onChange={onChange} required/>
                        <label htmlFor="email">Введите e-mail</label>
                    </div>
                    <div className="input__body">
                        <textarea type="text" name="body" value={body} onChange={onChange} required/>
                        <label htmlFor="body">Введите комментарий</label>
                    </div>
                    <button className="button button__application" type="submit">Отправить</button>
                </form>
         </Form>   
        </>
    )
  
}
export default PostInfo;