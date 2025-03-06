import "./about-shoes.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const AboutShoes = () => {

    const { id } = useParams(); 



    return ( 
        <div>
            <h1> id: {id} </h1>
        </div>
     );
}
 
export default AboutShoes;