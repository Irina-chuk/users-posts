import { useEffect, useState } from "react";
import Service from "../services/service";
import Spinner from "../spinner/spinner";
import ErrorMessageZoom from "../errorMessage_zoom/errorMessage_zoom";
import PostsListZoom from "../postsList_zoom/postsList_zoom";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

import "./profile_zoom.scss";
const ProfileZoom = () => {
    const {userId} = useParams();
    const [user, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const userService = new Service();
    useEffect(() => { 
        updateUser();    
    }, [userId]);

    const updateUser = () => {
        userService.getUser(userId)
        .then(onUserLoaded)
        .catch(onError);  
    }
    const onUserLoaded = (users) => {
        setLoading(false);
        setUsers(users);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessageZoom/> : null;
    return (
        <>
        {spinner},
        {errorMessage}
        {!(error || loading || !user) ?
        <div className="profile">
            <table>
                <thead>
                    <tr>
                        <th className="cell-1"></th>
                        <th colspan="5">{user.username}</th>
                        <th className="cell-7"></th>
                        
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td colspan="7"></td>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <td></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                        <td>{user.company.br}</td>
                    </tr>
                    
                </tbody>
            </table>
            <div className="posts">
                <h2 class="posts__header">Посты</h2>
                <PostsListZoom id={user.id}/>
                <Link to={`/zoom/profile/${user.id}/allposts`} className="posts__link">Все посты</Link>
            </div>

        </div> : null}
        </>
        
       
    )
}

export default ProfileZoom;