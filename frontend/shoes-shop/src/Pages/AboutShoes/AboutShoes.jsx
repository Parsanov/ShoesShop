import "./about-shoes.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ShoeSizeTable from "../../Components/ShoeOption/ShoeSizeTable/ShoeSizeTable";
import NoImage from "../../assets/no-image.png";

const AboutShoes = () => {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    const fetchShoe = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7125/Shoes/GetOneShoes/`,
          {
            params: { shoesId: id },
          }
        );
        setShoe(response.data);
      } catch (error) {
        console.error("Error fetching shoe data:", error);
      }
    };
    fetchShoe();
  }, [id]);

  if (!shoe) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="about-shoes">
        <div className="carousel">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="image-carousel"
          >
            {shoe.imagesUrl && shoe.imagesUrl.length > 0 ? (
              shoe.imagesUrl.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`shoe-${index}`}
                    className="carousel-image"
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <img className="carousel-image" src={NoImage} alt="No Image" />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
  
        <div className="info">
          <div className="title">
            <h2>{shoe.nameShoes}</h2>
          </div>
          <div className="article">
            <h3>Артикул: 124124</h3>
          </div>
          <div className="description">
            <p>
              • made in Vietnam • Демісезонні • Класичний дизайн • ТОПова якість
              (Ліцензія) • Матеріал: шкіра натуральна • Підошва: резина •
              Прошиті • Коробка в комплекті
            </p>
          </div>
  
          <div className="price">
            <h3>{shoe.price} грн</h3>
          </div>
  
          <div className="size">
            <ShoeSizeTable />
          </div>
  
          <div className="button-buy">
            <button>ДО КОШИКА</button>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default AboutShoes;
