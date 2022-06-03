import "./promo.scss";
const Promo = () => {
    return(
        <div className="promo">
            <div className="promo__elips">
                <h2 className="promo__title">Twenty One Pilots</h2>
                <div className="promo__subtitle">22.02.23 в 21:00</div>
            </div>
            <div className="promo__navigation">
                <button className="button button__prev"><div className="promo__arrow">
                    <div className="promo__arrow-top promo__arrow-top_prev"></div>
                    <div className="promo__arrow-bottom promo__arrow-bottom_prev"></div>
                    </div></button>
                <button className="button">Купить билет</button>
                <button className="button button__next">
                    <div className="promo__arrow">
                        <div className="promo__arrow-top"></div>
                        <div className="promo__arrow-bottom"></div>
                    </div>
                </button>
            </div>
    </div>
    )
    
}
export default Promo;