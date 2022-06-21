import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Service from "../../services/service";
import Spinner from "../../components/spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import PostItem from "../../components/postItem/postItem";
import "./postsListInfo.scss";
const PostsListInfo = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const userService = new Service();
    useEffect(() => { 
        updatePosts();    
    }, []);

    const updatePosts = () => {
        setLoading(true);
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
                <Link to={`/profile/${userId}/allposts/${id}`}>
                     <PostItem key={id} data={item}/>
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
            <h2 className="postsListInfo__header">Посты</h2>
            <div className="postsListInfo__wrapper">
            {elements}
            </div>
           
        </div> : null }
        </>
        
    )
}
export default PostsListInfo;