import Profile from "../../pages/profile/profile";
import PostsListInfo from "../../pages/postsListInfo/postsListInfo";
import PostInfo from "../../pages/postInfo/postInfo";
import PromoInformation from "../../pages/promoInformation/promoInformation";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PromoInformationZoom from "../../pages/promoInformation_zoom/promoInformation_zoom";
import ProfileZoom from "../../pages/profile_zoom/profile_zoom";
import PostsListInfoZoom from "../../pages/postsListInfo_zoom/postsListInfo_zoom";
import PostInfoZoom from "../../pages/postInfo_zoom/postInfo_zoom";
import Layout from "../../layout/layout";
import ErrorMessage from "../../pages/errorMessage/errorMessage";

const App = () => {
    return (
        <Router>
                <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<PromoInformation/>}/>
                            <Route path="profile/:userId" element={<Profile/>}/>
                            <Route path="profile/:userId/allposts" element={<PostsListInfo/>}/>
                            <Route path="profile/:userId/allposts/:id" element={<PostInfo/>}/>
                            <Route path="zoom" element={<PromoInformationZoom/>}/>
                            <Route path="zoom/profile/:userId" element={<ProfileZoom/>}/>
                            <Route path="zoom/profile/:userId/allposts" element={<PostsListInfoZoom/>}/>
                            <Route path="zoom/profile/:userId/allposts/:id" element={<PostInfoZoom/>}/> 
                        </Route>
                        <Route path="*" element={<ErrorMessage/>}/>
                </Routes> 
            </Router>      
    )
}
export default App;