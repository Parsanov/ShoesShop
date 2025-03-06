import "./shoes-card.css";
import favoriteIcon from '../../assets/favorite-icon.svg';
import { Link } from "react-router-dom";

const ShoesCard = ({ id, name, price, img }) => {
    return ( 
        <div className="card-container">
            <div className="card-item">
                <div className="card-img">
                    <img src={img} alt={name}/> 
                </div>

                <div className="card-description">
                    <div className="card-title">
                        <h3>{name}</h3>
                    </div>

                    <div className="card-price">
                        <p>{price} грн</p>
                    </div>

                    <div className="card-price">
                        <p>Артикул: 1324234</p>
                    </div>
                    
                    <div className="card-icon">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="favorite-icon"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </div>

                    <div className="card-button"> 
                        <Link to={`/about/${id}`}>
                            <button>ПЕРЕГЛЯНУТИ</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ShoesCard;