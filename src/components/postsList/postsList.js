import { useEffect, useState } from "react";
import Service from "../../services/service";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../../pages/errorMessage/errorMessage";
import PostItem from "../postItem/postItem";
import "./postsList.scss";
const PostsList = ({id}) => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const userService = new Service();
    useEffect(() => { 
        updatePosts();    
    }, []);

    const updatePosts = () => {
        userService.getAllPosts(id)
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

    const elements = posts && posts.slice(0,3).map(item => {
            const {id} = item;
            return (
                <PostItem key={id} data={item}/>
            )
        });

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    return (
        <>
            {errorMessage}
            { spinner}
            {!(error || loading || !posts) ?
        <div className="postsList">
            {elements}
        </div> : null }
        </>
        
    )
}

export default PostsList;