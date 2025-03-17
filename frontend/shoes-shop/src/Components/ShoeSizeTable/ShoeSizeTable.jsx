import React, { useState } from 'react';
import './shoe-size-table.css';

const ShoeSizeTable = () => {
  const sizes = [
    [7, 7.5, 8, 8.5, 9, 9.5, 10],
    [10.5, 11, 11.5, 12, 13, 14]
  ];

  const [selectedSize, setSelectedSize] = useState(null);

  const handleCellClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="shoe-size-container">
      <h3 className="shoe-size-title">Оберіть розмір</h3>
      <table className="shoe-size-table">
        <tbody>
          {sizes.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((size) => (
                <td
                  key={size}
                  className={`shoe-size-cell ${selectedSize === size ? 'selected-cell' : ''}`}
                  onClick={() => handleCellClick(size)}
                >
                  {size}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {selectedSize && (
          <div className="selected-size-box">
            Ви обрали розмір: <strong>{selectedSize}</strong>
          </div>
        )}
        <a href="#" className="shoe-size-link">Таблиця розмірів</a>
      </div>
    </div>
  );
};

export default ShoeSizeTable;
