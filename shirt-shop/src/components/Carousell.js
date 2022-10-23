// Packages Import
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faGreaterThanEqual, faHeart } from "@fortawesome/free-solid-svg-icons";

// Styles Import
import '../styles/carousel.scss';
import "../styles/App.scss";

// I M P O R T   C O N T E X T
import FavoriteContext from "../context/FavoriteContext";
import ShoppingContext from "../context/ShoppingContext";

// Files Import
import sherds from "../data/products";
import fjm from '../images/fjm-logo.png';
// import carousel_black1 from "../images/carousel_black1.png";
// import carousel_black2 from "../images/carousel_black2.png";
// import carousel_black3 from "../images/carousel_black3.png";
// import carousel_beige1 from "../images/carousel_beige1.png";
// import carousel_beige2 from "../images/carousel_beige2.png";
// import carousel_beige3 from "../images/carousel_beige3.png";
// import carousel_blue1 from "../images/carousel_blue1.png";
// import carousel_blue2 from "../images/carousel_blue2.png";
// import carousel_blue3 from "../images/carousel_blue3.png";
// import carousel_grey1 from "../images/carousel_grey1.png";
// import carousel_grey2 from "../images/carousel_grey2.png";
// import carousel_grey3 from "../images/carousel_grey3.png";
// import carousel_lime1 from "../images/carousel_lime1.png";
// import carousel_lime2 from "../images/carousel_lime2.png";
// import carousel_lime3 from "../images/carousel_lime3.png";
// import carousel_oliv1 from "../images/carousel_oliv1.png";
// import carousel_oliv2 from "../images/carousel_oliv2.png";
// import carousel_oliv3 from "../images/carousel_oliv3.png";
// import carousel_orange1 from "../images/carousel_orange1.png";
// import carousel_orange2 from "../images/carousel_orange2.png";
// import carousel_orange3 from "../images/carousel_orange3.png";
// import carousel_red1 from "../images/carousel_red1.png";
// import carousel_red2 from "../images/carousel_red2.png";
// import carousel_red3 from "../images/carousel_red3.png";

// const carouselPicArr =
//   [carousel_black1,
//     carousel_black2,
//     carousel_black3,
//     carousel_beige1,
//     carousel_beige2,
//     carousel_beige3,
//     carousel_blue1,
//     carousel_blue2,
//     carousel_blue3,
//     carousel_grey1,
//     carousel_grey2,
//     carousel_grey3,
//     carousel_lime1,
//     carousel_lime2,
//     carousel_lime3,
//     carousel_oliv1,
//     carousel_oliv2,
//     carousel_oliv3,
//     carousel_orange1,
//     carousel_orange2,
//     carousel_orange3,
//     carousel_red1,
//     carousel_red2,
//     carousel_red3
//   ]

const Carousell = ({showCarousel}) => {
  const [favorite, setFavorite] = useContext(FavoriteContext);
  const [good, setGood] = useContext(ShoppingContext);


  const favoriteHandler = (sherd) => {
    const newFav = [...favorite, { ...sherd}];
    setFavorite(newFav);
  }
    
  const shoppingHandler = (sherd) => {
    const newGood = [...good, { ...sherd}];
    setGood(newGood);
  }

  return (
    <div className='carousel-outer-container'>
      
      <h1 className="carousell-headline display-1" >
        nerdsherd
      </h1>
      <Carousel className='carousel-inner-container'>
          {sherds.map((sherd, i) => {
            return (
              <Carousel.Item
                key={i}
                interval={3000} 
                className="carousel-item-container">
                  <Link 
                    className="link" 
                    onClick={showCarousel} 
                    to={`/products/${sherd.id}`}>
                    <div className="carousel-image-container">
                      <img src={sherd.sherdColor[sherd.backgroundColor]} alt="shirt" 
                      width="60%" /> 
                    <div className="carousel-text-field">
                      <p className="sherd-text-all carousel-text">{sherd.text}</p>
                    </div>            
                  </div>
                </Link>
              </Carousel.Item>
            )
          })}
        </Carousel>
      {/* <Carousel className='carousel-inner-container'>
          {carouselPicArr.map((img, i) => {
            return (
              <Carousel.Item
                key={i}
                interval={1500} className="carousel-item-container">
                  <img
                    className="d-block w-100"
                    src={img}
                    alt="First slide"
                  />
              </Carousel.Item>
            )
          })}
        </Carousel> */}
        <div className='carousel-btn'>
          <img
            src={fjm}
            width="45"
            height="45"
            className="d-inline-block align-top"
            alt="FJM logo"
          />
          <Link className="link" to="/">
            <button 
              className="button-container-single button" 
              onClick={showCarousel}>ENTER
            </button>
          </Link>
          <div className="flex">
          <button 
            className="circle" 
            onClick={favoriteHandler}>
              <FontAwesomeIcon className="heart" icon={faHeart} />
          </button>
          <button 
            onClick={shoppingHandler} 
            className="circle">
            <FontAwesomeIcon icon={faCartShopping}/>
          </button>
        </div>
      </div>
    </div>  
  );
};

export default Carousell;
