import './navbar.css';
import shoppingCart from '../../../assets/shopping_bag.svg';
import userIcon from '../../../assets/user_profile.svg';
import favorite from '../../../assets/favorite.svg';
import search from '../../../assets/search.svg';
import logo from '../../../assets/MainIcon/LogoShop.png';
import { AuthContext } from '../../AuthContext/AuthContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const handleMouseEnter = (menu) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
    setCloseTimeout(timeout);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const ManMenu = () => (
    <div
      className="extend-menu"
      onMouseEnter={() => handleMouseEnter('manMenu')}
      onMouseLeave={handleMouseLeave}
    >
      <div className="extend-menu__container">
        <div className="extend-list">
          <div className="shoes">
            <h1>ВЗУТТЯ</h1>
            <ul>
              <li>
                <a href="#">Кросівки</a>
              </li>
              <li>
                <a href="#">Черевики</a>
              </li>
              <li>
                <a href="#">Кеди</a>
              </li>
              <li>
                <a href="#">Сандалі</a>
              </li>
              <li>
                <a href="#">Туфлі</a>
              </li>
              <li>
                <a href="#">Шльопанці</a>
              </li>
            </ul>
          </div>
          <div className="clothes">
            <h1>ОДЯГ</h1>
            <ul>
              <li>
                <a href="#">Футболки</a>
              </li>
              <li>
                <a href="#">Штани</a>
              </li>
              <li>
                <a href="#">Шорти</a>
              </li>
              <li>
                <a href="#">Куртки</a>
              </li>
              <li>
                <a href="#">Спортивні костюми</a>
              </li>
            </ul>
          </div>
          <div className="accessories">
            <h1>АКСЕСУАРИ</h1>
            <ul>
              <li>
                <a href="#">Сумки</a>
              </li>
              <li>
                <a href="#">Годинники</a>
              </li>
              <li>
                <a href="#">Окуляри</a>
              </li>
              <li>
                <a href="#">Головні убори</a>
              </li>
              <li>
                <a href="#">Шкарпетки</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const WomanMenu = () => (
    <div
      className="extend-menu"
      onMouseEnter={() => handleMouseEnter('womanMenu')}
      onMouseLeave={handleMouseLeave}
    >
      <div className="extend-menu__container">
        <div className="extend-list">
          <div className="shoes">
            <h1>ВЗУТТЯ</h1>
            <ul>
              <li>
                <a href="#">Кросівки</a>
              </li>
              <li>
                <a href="#">Черевики</a>
              </li>
              <li>
                <a href="#">Кеди</a>
              </li>
              <li>
                <a href="#">Сандалі</a>
              </li>
              <li>
                <a href="#">Туфлі</a>
              </li>
              <li>
                <a href="#">Шльопанці</a>
              </li>
            </ul>
          </div>
          <div className="clothes">
            <h1>ОДЯГ</h1>
            <ul>
              <li>
                <a href="#">Футболки</a>
              </li>
              <li>
                <a href="#">Штани</a>
              </li>
              <li>
                <a href="#">Шорти</a>
              </li>
              <li>
                <a href="#">Куртки</a>
              </li>
              <li>
                <a href="#">Спортивні костюми</a>
              </li>
            </ul>
          </div>
          <div className="accessories">
            <h1>АКСЕСУАРИ</h1>
            <ul>
              <li>
                <a href="#">Сумки</a>
              </li>
              <li>
                <a href="#">Годинники</a>
              </li>
              <li>
                <a href="#">Окуляри</a>
              </li>
              <li>
                <a href="#">Головні убори</a>
              </li>
              <li>
                <a href="#">Шкарпетки</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutUs = () => (
    <div
      className="extend-menu"
      onMouseEnter={() => handleMouseEnter('aboutUs')}
      onMouseLeave={handleMouseLeave}
    >
      <div className="extend-menu__container">
        <div className="extend-list">
          <div className="about">
            <h1>Про нас</h1>
            <p>Інформація про компанію...</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Delivery = () => (
    <div
      className="extend-menu"
      onMouseEnter={() => handleMouseEnter('delivery')}
      onMouseLeave={handleMouseLeave}
    >
      <div className="extend-menu__container">
        <div className="extend-list">
          <div className="delivery">
            <h1>Доставка</h1>
            <p>Інформація про доставку...</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <div className="nav__logo">
            <Link to={'/'}><img src={logo} /></Link>
          </div>
          <div className="nav__menu">
            <ul className={isMobileMenuOpen ? 'open' : ''}>
              <li
                onMouseEnter={() => handleMouseEnter('manMenu')}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={'/man'}>Чоловікам</Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter('womanMenu')}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={'/woman'}>Жінкам</Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter('aboutUs')}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#">Про нас</a>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter('delivery')}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#">Доставка</a>
              </li>
            </ul>
          </div>
          <div className="nav--right">
            <div className="nav--find">
              <div className="input-container">
                <input type="text" placeholder="Пошук" />
                <img src={search} className="input-icon" />
              </div>
            </div>
            <div className="user-reg">
              <a href="#">
                <img className="user-icon" src={userIcon} />
              </a>
              {user ? (
                <Link to={'/profileUser'}>Профіль</Link>
              ) : (
                <Link to={'/profileLog'}>Увійти</Link>
              )}
            </div>
            <div className="nav--favorite">
              <a href="#" className="favorite-link">
                <img src={favorite} alt="Shopping Cart" className="cart-icon" />
              </a>
            </div>
            <div className="nav--cart">
              <a href="#" className="cart-link">
                <img
                  src={shoppingCart}
                  alt="Shopping Cart"
                  className="cart-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Затемнений фон */}
      <div
        className={`overlay ${activeMenu ? 'active' : ''}`}
        onClick={handleMouseLeave}
      ></div>

      <div className="nav--extend" onMouseLeave={handleMouseLeave}>
        {activeMenu === 'manMenu' && <ManMenu />}
        {activeMenu === 'womanMenu' && <WomanMenu />}
        {activeMenu === 'aboutUs' && <AboutUs />}
        {activeMenu === 'delivery' && <Delivery />}
      </div>
    </nav>
  );
};

export default NavBar;
