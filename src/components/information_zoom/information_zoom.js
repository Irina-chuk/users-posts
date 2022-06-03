import BuyersListZoom from "../buyers_list_zoom/buyers_list_zoom";
import "./information_zoom.scss";
const Information = ({users}) => {
    return (
        <div className="information">
            <div className="information__header">
                <h3 className="information__title">Купили билеты</h3>
                <div className="information__count"><span className="current">932</span>/<span className="total">1000</span></div>
            </div>
            <BuyersListZoom users={users}/>
            <div className="information__wrapper">
                <div className="information__area">
                    <div className="information__area__title">О площадке</div>
                    <div className="information__area__info">
                        <div className="information__area__subtitle information__area__subtitle_zoom">Современная площадка для проведения концертов и других мероприятий любой сложности</div>
                        <div className="information__area__descr information__area__descr_zoom">Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам 
                        Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам
                        Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам
                        Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам</div>
                    </div>  
                    
                </div>
                <div className="information__application">
                    <div className="information__application__textarea information__application__textarea_zoom">
                        <label for="text" className="label label_zoom">Оставить заявку на проведение концерта</label>
                        <textarea name="application" id="text" cols="30" rows="10" className="textarea textarea_zoom">Расскажите о вашем предложении </textarea>
                    </div>
                    <button className="button button__zoom">Отправить</button>
                </div>
            </div>
            
            <div className="information__group">
                <div className="information__group__header">О группе</div>
                <div className="information__group__descr information__group__descr_zoom">Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</div>
            </div>

        </div>
    )
}

export default Information;