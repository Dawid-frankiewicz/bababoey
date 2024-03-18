import React from 'react';
import image1 from './img/tajemnice-dziwnolasu.jpg';
import image2 from './img/ksiega-straznika-limitowana-edycja-jubileuszowa-pdf.jpg';
import BlogContentColumnRight from './BlogContentColumnRight';



const BlogContent = () => {
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
      <BlogContentColumnRight></BlogContentColumnRight>
      </div>
    </div>
  );
};

export default BlogContent;