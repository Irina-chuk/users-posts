import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Service from "../../services/service";
import Spinner from "../../components/spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import PostItemZoom from "../../components/postItem_zoom/postItem_zoom";
import "./postsListInfo_zoom.scss";
const PostsListInfoZoom = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const userService = new Service();
    useEffect(() => { 
        updatePosts();    
    }, []);

    const updatePosts = () => {
        userService.getAllPosts(userId)
        .then(onPostsLoaded)
        .catch(onError);  
    }

    
    const onPostsLoaded = (posts) => {
        setLoading(false);
        setPosts(posts);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const elements = posts && posts.map(item => {
            const {id} = item;
            return (
                <Link to={`/zoom/profile/${userId}/allposts/${id}`}>
                     <PostItemZoom key={id} data={item}/>
                </Link>
            )
        });

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    return (
        <>
            {errorMessage}
            { spinner}
            {!(error || loading || !posts) ?
        <div className="postsListInfo">
            <h2 class="postsListInfo__header">Посты</h2>
            <div className="postsListInfo__wrapper">
            {elements}
            </div>
           
        </div> : null }
        </>
        
    )
}
export default PostsListInfoZoom;