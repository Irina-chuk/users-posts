import {Link} from "react-router-dom";
import "./buyer_item_zoom.scss";
const BuyerItemZoom = ({data}) => {
    const {name, username, id} = data;
    return (
        <div className="buyer__zoom">
            <div className="buyer__zoom__name">{name}</div>
            <div className="buyer__zoom__city">{username}</div>
            <Link to={`/zoom/profile/${id}`} className="buyer__zoom__link">Смотреть профиль</Link>
        </div>
    )
}
export default BuyerItemZoom;