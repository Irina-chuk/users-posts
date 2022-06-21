import BuyersList from "../buyers_list/buyers_list";
import "./information.scss";
const Information = ({users}) => {
    return (
        <div className="information">
            <div className="information__header">
                <h3 className="information__title">Купили билеты</h3>
                <div className="information__count"><span className="current">{users.length}</span>/<span className="total">1000</span></div>
            </div>
            <BuyersList users={users}/>
            
            <div className="information__group">
                <div className="information__group__header">О группе</div>
                <div className="information__group__descr">Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</div>
            </div>

        </div>
    )
}

export default Information;