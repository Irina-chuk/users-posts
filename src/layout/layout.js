import { Outlet } from "react-router-dom";
import Header from "../components/header/header";

const Layout = () => {
    return (
        <div className="app">
            <Header/>
            <main>
                <Outlet/>  
            </main> 
        </div> 
    )
}

export default Layout;