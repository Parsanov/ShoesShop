import './hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    const arrowSvg = (
        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
        </svg>
    );

    return ( 
       <div className=''>
         <div className="hero">
         </div>

           <div className='container'>
                <div className="hero-content">
                    <button className="btn"><Link to={"/man"}>ДЛЯ ЧОЛОВІКІВ {arrowSvg}</Link></button>
                    <button className="btn"><Link to={"/woman"}>ДЛЯ ЖІНОК {arrowSvg}</Link> </button>
                </div>
           </div>
       </div>
     );
}
 
export default Hero;