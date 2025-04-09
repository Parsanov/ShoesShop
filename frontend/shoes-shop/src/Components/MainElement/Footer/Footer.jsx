import "./footer.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Імпортуємо Link

const Footer = () => {
  return (
    <div className="footer-conteiner">
      <div className="content-footer">
        <div className="category-list">
          <h3>Категорії</h3>
          <ul>
            <li><Link to="/shoes">Взуття</Link></li>
            <li><Link to="/winter-shoes">Зимове взуття</Link></li>
            <li><Link to="/clothing">Одяг</Link></li>
            <li><Link to="/winter-jackets">Зимові куртки</Link></li>
            <li><Link to="/accessories">Аксесуари</Link></li>
            <li><Link to="/hats">Шапки</Link></li>
            <li><Link to="/bestsellers">Бестселери</Link></li>
            <li><Link to="/new-arrivals">Новинки</Link></li>
            <li><Link to="/discounts">Знижки</Link></li>
          </ul>
        </div>
        <div className="about-us-list">
          <h3>Про компанію</h3>
          <ul>
            <li><Link to="/about">Про нас</Link></li>
            <li><Link to="/collaboration">Співробітництво</Link></li>
          </ul>
        </div>
        <div className="help-list">
          <h3>Допомога</h3>
          <ul>
            <li><Link to="/delivery">Доставка</Link></li>
            <li><Link to="/returns">Повернення</Link></li>
            <li><Link to="/cancel-order">Скасування замовлення</Link></li>
            <li><Link to="/store-contacts">Контакти магазинів</Link></li>
            <li><Link to="/shoe-care">Як чистити взуття</Link></li>
            <li><Link to="/contacts">Контакти</Link></li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Слідкуй за нами</h3>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icons-media" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icons-media" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;