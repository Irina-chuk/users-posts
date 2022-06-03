import Header from "../header/header";
import Profile from "../profile/profile";
import PostsListInfo from "../postsListInfo/postsListInfo";
import PostInfo from "../postInfo/postInfo";
import PromoInformation from "../promoInformation/promoInformation";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PromoInformationZoom from "../promoInformation_zoom/promoInformation_zoom";
import ProfileZoom from "../profile_zoom/profile_zoom";
import PostsListInfoZoom from "../postsListInfo_zoom/postsListInfo_zoom";
import PostInfoZoom from "../postInfo_zoom/postInfo_zoom";



const App = () => {
    
    return (
        <div className="app">
            <Header/>
            <main>
            <Router>
                <Routes>
                        <Route path="/" element={<PromoInformation/>}/>
                        <Route path="/profile/:userId" element={<Profile/>}/>
                        <Route path="/profile/:userId/allposts" element={<PostsListInfo/>}/>
                        <Route path="/profile/:userId/allposts/:id" element={<PostInfo/>}/>

                        <Route path="/zoom" element={<PromoInformationZoom/>}/>
                        <Route path="/zoom/profile/:userId" element={<ProfileZoom/>}/>
                        <Route path="/zoom/profile/:userId/allposts" element={<PostsListInfoZoom/>}/>
                        <Route path="/zoom/profile/:userId/allposts/:id" element={<PostInfoZoom/>}/> 
                </Routes> 
            </Router>
            </main>
        </div>
    )
}
export default App;