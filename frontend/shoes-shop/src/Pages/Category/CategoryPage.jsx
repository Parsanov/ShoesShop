import { useEffect, useState } from "react";
import { fetchAllShoes } from "../../Api/fetchAllShoes.js"
import { v4 as uuidv4 } from 'uuid';
import ShoesCard from "../../Components/ShoesCard/ShoesCard";
import "./category-page.css";
import PriceFilter from "../../Components/PriceFilter/PriceFilter";
import ColorFilter from "../../Components/ColorFilter/ColorFilter.jsx";

const CategoryPage = ({ gender }) => {

  const [shoes, setShoes] = useState([]);
  const [manShoes, setManShoes] = useState([]);
  const [womanShoes, setWomanShoes] = useState([]);


  useEffect(() => {
      const fetchData = async () =>{
        const data = await fetchAllShoes()

        const manFilter = data.filter(shoe => shoe.gender == "men");
        const womanFilter = data.filter(shoe => shoe.gender == "women");

        setManShoes(manFilter);
        setWomanShoes(womanFilter);

        setShoes(data);
      };

      fetchData();
  }, [gender])


  const filteredShoes = gender === "man" ? manShoes : womanShoes;


  return (
    <div className="container">
      <div className="content-container">
        <div className="filter">
          <div className="price-filter">
            <PriceFilter />
          </div>

          <div className="color-filter">
            <ColorFilter />
          </div>
        </div>

        <div className="cards-shoes">
          {filteredShoes.length > 0 ? (
              filteredShoes.map(sho => (
                  <ShoesCard
                    id={sho.id}
                    key={sho.id}
                    name={sho.nameShoes}
                    price={sho.price}
                    img={sho.imagesUrl && sho.imagesUrl[0]} 
                  />
              ))
            ) : (
              <p>Немає товарів</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;