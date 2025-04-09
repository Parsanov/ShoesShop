import { useState } from "react";
import "./price-filter.css"; // Підключаємо CSS

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(129);
  const [maxPrice, setMaxPrice] = useState(14999);

  const handleMinChange = (e) => {
    const newValue = Math.min(+e.target.value, maxPrice - 1);
    setMinPrice(newValue);
  };

  const handleMaxChange = (e) => {
    const newValue = Math.max(+e.target.value, minPrice + 1);
    setMaxPrice(newValue);
  };

  return (
    <div className="price-filter">
      <h2 className="price-filter-title">ФІЛЬТРИ</h2>
      <div className="horizontal-line"/>
      <div className="price-filter-section">
        <h3 className="price-filter-subtitle">ЦІНА</h3>
        <div className="slider-container">
          <div className="slider">
            <input
              type="range"
              min={129}
              max={14999}
              value={minPrice}
              onChange={handleMinChange}
              className="slider-thumb slider-thumb--min"
            />
            <input
              type="range"
              min={129}
              max={14999}
              value={maxPrice}
              onChange={handleMaxChange}
              className="slider-thumb slider-thumb--max"
            />
            <div
              className="slider-track"
              style={{
                left: `${((minPrice - 129) / (14999 - 129)) * 100}%`,
                width: `${((maxPrice - minPrice) / (14999 - 129)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="input-container-filter">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(+e.target.value)}
            className="price-input"
          />
          <span>-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(+e.target.value)}
            className="price-input"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;