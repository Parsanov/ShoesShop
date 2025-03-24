import { useState } from "react";
import "./color-filter.css"; // Підключаємо окремий CSS для ColorFilter

const ColorFilter = () => {
  const [selectedColors, setSelectedColors] = useState([]); // Стан для вибраних кольорів

  // Список доступних кольорів
  const colors = [
    { name: "Чорний", hex: "#000000" },
    { name: "Білий", hex: "#FFFFFF" },
    { name: "Сірий", hex: "#808080" },
    { name: "Червоний", hex: "#FF0000" },
    { name: "Синій", hex: "#0000FF" },
    { name: "Зелений", hex: "#00FF00" },
    { name: "Жовтий", hex: "#FFFF00" },
  ];

  // Обробник вибору кольору
  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      // Якщо колір вже вибраний, видаляємо його
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      // Якщо колір не вибраний, додаємо його
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className="color-filter">
      <h3 className="color-filter-title">КОЛІР</h3>
      <div className="color-list">
        {colors.map((color) => (
          <div
            key={color.name}
            className={`color-item ${
              selectedColors.includes(color.name) ? "selected" : ""
            }`}
            style={{ backgroundColor: color.hex }}
            onClick={() => handleColorChange(color.name)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;