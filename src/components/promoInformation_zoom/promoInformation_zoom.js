import { useEffect, useState } from "react";
import Service from "../services/service";
import Spinner from "../spinner/spinner";
import ErrorMessageZoom from "../errorMessage_zoom/errorMessage_zoom";
import PromoZoom from "../promo_zoom/promo_zoom";
import InformationZoom from "../information_zoom/information_zoom";

import "./promoInformation_zoom.scss";
const PromoInformationZoom = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const userService = new Service();
    useEffect(() => { 
        updateUsers();    
    }, []);

    const updateUsers = () => {
        userService.getAllUsers()
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
            {errorMessage}
            { spinner}
            {!(error || loading || !users) ?
            <div className="promoInformation">
            <PromoZoom/>
            <InformationZoom users={users}/></div>: null}
         
        </>
        
    )
}
export default PromoInformationZoom;