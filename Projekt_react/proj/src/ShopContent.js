import React from 'react';
import image1 from './img/tajemnice-dziwnolasu.jpg';
import image2 from './img/ksiega-straznika-limitowana-edycja-jubileuszowa-pdf.jpg';
import ShopContentProduct from './ShopContentProduct';
import ShopContentGridBottom from './ShopContentGridBottom';
import product1 from './img/1.jpg';
import DropDown from './DropDown';
import { useState, useEffect } from 'react';
import product2 from './img/2.jpg';
import product3 from './img/3.jpg';
import product4 from './img/4.jpg';
import product5 from './img/5.jpg';
import product6 from './img/6.jpg';
import product7 from './img/7.jpg';
import product8 from './img/8.jpg';
import product9 from './img/9.jpg';
import product10 from './img/10.jpg';
import product11 from './img/11.jpg';
import product12 from './img/12.jpg';

const ShopContent = () => {


  const [product, setproduct] = useState(
    [
        {
            id:1, textContent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, saepe!", leftBlock:"Przecena na black week", image:product1, imageS:product10, imageT:product9, category:'book'
        },
        {
            id:2, textContent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, saepe!", leftBlock:"Przecena na black week", image:product2, imageS:product10, imageT:product9,  category:'book'
        },
        {
            id:3, textContent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, saepe!", leftBlock:"Przecena na black week", image:product3, imageS:product10, imageT:product9, category:'book'
        },
        {
            id:4, textContent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, saepe!", leftBlock:"Przecena na black week", image:product4, imageS:product10, imageT:product9, category:'book'
        },
        {
            id:5, textContent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, saepe!", leftBlock:"Przecena na black week", image:product5, imageS:product10, imageT:product9, category:'book'
        },
        {
            id:6, textContent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, saepe!", leftBlock:"Przecena na black week", image:product6, imageS:product10, imageT:product9, category:'book'
        },
        {
            id:7, textContent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, saepe!", leftBlock:"Przecena na black week", image:product7, imageS:product10, imageT:product9, category:'book'
        },
        {
            id:8, textContent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, saepe!", leftBlock:"Przecena na black week", image:product8, imageS:product10, imageT:product9, category:'dice'
        },
        {
            id:9, textContent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, saepe!", leftBlock:"Przecena na black week", image:product9, imageS:product10, imageT:product9, category:'dice'
        },
        {
            id:10, textContent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, saepe!", leftBlock:"Przecena na black week", image:product10, imageS:product10, imageT:product9, category:'dice'
        },
        {
            id:11, textContent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, saepe!", leftBlock:"Przecena na black week", image:product11, imageS:product10, imageT:product9, category:'dice'
        },
        {
            id:12, textContent:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, saepe!", leftBlock:"Przecena na black week", image:product12, imageS:product10, imageT:product9, category:'dice'
        },
    ]
)



  const handleCategoryChange = (category) => {
    setImgCategory(category);
    localStorage.setItem('selectedCategory', category);
}
const [imgCategory, setImgCategory] = useState('all');
const [filteredProducts, setFilteredProducts] = useState(product);
    
  

useEffect(() => {
    const storedCategory = localStorage.getItem('selectedCategory');
    const storedFilteredImages = localStorage.getItem('filteredimages');

    if (storedCategory) {
        setImgCategory(storedCategory);
    } else {
        setImgCategory('all');
    }

    if (storedFilteredImages) {
        setFilteredProducts(JSON.parse(storedFilteredImages));
    } else {
        setFilteredProducts(product); // Ustawienie domyślnych produktów, jeśli localStorage jest pusty
    }
}, []); 

//całość była w ShopContentProduct

  return (
    <div className='text-white font-saira'>
      <div className="hook">
        <button></button>
      </div>
      <div className="grider">
        <div className="column-left">
          <div className="lista">
            <div className="kolumna_one">
              <h5 className="header_left_column">Dragon & Dice</h5>
              <ul>
                <li>Dla początkujących</li>
                <li>Nowości i promocje</li>
                <li>Gry RPG</li>
                <li>Kości do RPG i akcesoria</li>
                <li>Gry paragrafowe</li>
                <li>Gry planszowe</li>
                <li>RPG Angielskie</li>
                <li>Polecane</li>
              </ul>
            </div>

            <div className="kolumna_two"> 
            </div>

            <div className="kolumna_three">
              <h5 className="header_left_column">Zacznijmy Przygodę!</h5>
              <div className="col_left_flex">
                <div className="col_left_img">
                  <img src={image1} alt="Tajemnice Dziwnolasu" />
                  <p className="text-xs">Tylko teraz za jedyne <br /><span className="font-bold text-redish">156.99 zł!</span></p>
                </div>
                <div className="col_left_img">
                  <img src={image2} alt="Księga Strażnika Limitowana Edycja" />
                  <p className="text-xs">Tylko teraz edycja limitowana za jedyne <span className="font-bold text-redish">156.99 zł!</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="column-right-shop">
          <div className="info">
            <h1>Zew Cthulhu</h1>
            <p>GRA FABULARNA PEŁNA TAJEMNIC I GROZY | Wspólnie odkrywajcie tajemnice, których źródło często pochodzi spoza naszej rzeczywistości i wymyka się ludzkim zdolnościom pojmowania. System ma już czterdzieści lat, doczekał się siódmej edycji i niezmiennie cieszy się zainteresowaniem ludzi na całym świecie, przenosząc graczy w sam środek mrocznego uniwersum mitów Cthulhu, zapoczątkowanego przez Howarda Philipsa Lovecrafta.</p>
          </div>
          
          
          <div>dasdasd
          <div className='second-grid-wrapper'><DropDown  handleCategoryChange={handleCategoryChange}></DropDown></div></div>
          
          <ShopContentProduct product={product} imgCategory={imgCategory} setFilteredProducts={setFilteredProducts} filteredProducts={filteredProducts} ></ShopContentProduct>

        </div>
      </div>

      <div className="gridbottom">
      <ShopContentGridBottom product1={product1}></ShopContentGridBottom>
      </div>
    </div>
  );
};

export default ShopContent;