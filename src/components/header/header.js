
import "./header.scss";
const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                <a href="/">Concert CLUB
                </a>
            </h1>
            <div className="header__buttons">
                <div className="header__link">
                <a href="/zoom">Версия для слабовидящих</a>
                </div>
                
                <button className="button">Мой профиль</button>
            </div>
        </header>
    )
}
export default Header;