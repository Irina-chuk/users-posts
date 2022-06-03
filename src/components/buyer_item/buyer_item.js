import {Link} from "react-router-dom";
import "./buyer_item.scss";
const BuyerItem = ({data}) => {
    const {name, username, id} = data;
    return (
        <div className="buyer__item">
            <div className="buyer__name">{name}</div>
            <div className="buyer__city">{username}</div>
            <Link to={`/profile/${id}`} className="buyer__item__link">Смотреть профиль</Link>
        </div>
    )
}
export default BuyerItem;