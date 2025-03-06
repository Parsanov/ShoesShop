import "./carousel.css";
import shoe1 from "../../assets/ExampleShoes/1.jpg";
import shoe2 from "../../assets/ExampleShoes/2.jpg";
import shoe3 from "../../assets/ExampleShoes/3.jpg";
import shoe4 from "../../assets/ExampleShoes/4.jpg";
import shoe5 from "../../assets/ExampleShoes/5.jpg";
import { useState, useRef } from "react";

const Carousel = () => {
    const [activeTab, setActiveTab] = useState("arrival");
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const arrivalShoes = [shoe1, shoe2, shoe3, shoe4, shoe5];
    const sellersShoes = [shoe5, shoe4, shoe3, shoe2, shoe1];

    return ( 
        <div className="container">
            <div className="btn-choose">
                <button 
                    className={`arrival-btn ${activeTab === "arrival" ? "active" : ""}`} 
                    onClick={() => setActiveTab("arrival")}
                >
                    НОВИНКИ
                </button>
                <button 
                    className={`sellers-btn ${activeTab === "sellers" ? "active" : ""}`} 
                    onClick={() => setActiveTab("sellers")}
                >
                    ПОПУЛЯРНО
                </button>
            </div>
            <div className='shoe-carousel'>
                <button className="arrow left" onClick={scrollLeft}>‹</button>
                
                <div className='shoes-carousel' ref={carouselRef}>
                    {(activeTab === "arrival" ? arrivalShoes : sellersShoes).map((shoe, index) => (
                        <img src={shoe} alt={`shoe ${index + 1}`} key={index} />
                    ))}
                </div>

                <button className="arrow right" onClick={scrollRight}>›</button>
            </div>
        </div>
    );
}

export default Carousel;
