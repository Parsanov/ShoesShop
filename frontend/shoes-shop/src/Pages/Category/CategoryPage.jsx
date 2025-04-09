import { useEffect, useState } from 'react';
import { fetchAllShoes } from '../../Api/fetchAllShoes.js';
import ShoesCard from '../../Components/ShoeOption/ShoesCard/ShoesCard';
import './category-page.css';
import PriceFilter from '../../Components/MainElement/PriceFilter/PriceFilter';
import ColorFilter from '../../Components/MainElement/ColorFilter/ColorFilter.jsx';

const CategoryPage = ({ gender }) => {
  const [shoes, setShoes] = useState([]);
  const [manShoes, setManShoes] = useState([]);
  const [womanShoes, setWomanShoes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllShoes();

      const manFilter = data.filter((shoe) => shoe.gender === 'men');
      const womanFilter = data.filter((shoe) => shoe.gender === 'women');

      setManShoes(manFilter.reverse());
      setWomanShoes(womanFilter.reverse());

      setShoes(data.reverse());
    };

    fetchData();
  }, [gender]);

  let filteredShoes = gender === 'man' ? manShoes : womanShoes;

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
            filteredShoes.map((sho) => (
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
