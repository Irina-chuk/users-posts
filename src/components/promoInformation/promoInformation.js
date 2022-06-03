import { useEffect, useState } from "react";
import Service from "../services/service";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import Promo from "../promo/promo";
import Information from "../information/information";

import "./promoInformation.scss";
const PromoInformation = () => {
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
    const errorMessage = error ? <ErrorMessage/> : null;
    return (
        <>
            {errorMessage}
            { spinner}
            {!(error || loading || !users) ?
            <div className="promoInformation">
            <Promo/>
            <Information users={users}/></div>: null}
         
        </>
        
    )
}
export default PromoInformation;