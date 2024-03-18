import React from 'react';
import { useEffect, useState } from 'react';
const Footer = () => {
 
 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = (event) => {
    const isChecked = event.target.checked;
    setIsDarkMode(isChecked);
    applyDarkMode(isChecked);
    localStorage.setItem('darkMode', isChecked);
  };



  const applyDarkMode = (isDarkMode) => {
    // Element MyColor
    const myColorElement = document.querySelector('.MyColor');
    // Elementy kolumn
    const kolumnOne = document.querySelector('.kolumna_one');
    const kolumnThree = document.querySelector('.kolumna_three');

    if (myColorElement) {
      if (isDarkMode) {
        myColorElement.classList.add('Light');
       
      } else {
      
        myColorElement.classList.remove('Light');
      }
    }

    [kolumnOne, kolumnThree].forEach(element => {
      if (element) {
        if (isDarkMode) {
          element.classList.add('LightContent');
         
        } else {
          
          element.classList.remove('LightContent');
        }
      }
    });
  };


 
  useEffect(() => {
    const isDarkModeStored = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDarkModeStored);
    applyDarkMode(isDarkModeStored);
  }, []);

  return (
    <footer className=' text-white font-saira bg-body'>
      <div className="ft-container mx-auto">
        <ul>
          <li><span className="text-redish font-saira">Dane Kontaktowe</span></li>
          <li>Sklep Dragon Dice</li>
          <li>ul.Chmielowicka 26</li>
          <br />
          <li>+376 112 021</li>
          <li>DragonandDice@o2.pl</li>
        </ul>
      </div>
      <div className="ft-container mx-auto">
        <ul>
          <li><span className="text-redish font-saira">Dragon & Dice</span></li>
          <a href="">
            <li>Kim jesteśmy?</li>
          </a>
          <a href="">
            <li>Dołącz do naszej społeczności!</li>
          </a>
          <a href="">
            <li>Napisz do nas</li>
          </a>
          <a href="">
            <li>Dla mediów</li>
          </a>
          <a href="">
            <li>Zamówienia hurtowe</li>
          </a>
        </ul>
      </div>
      <div className="ft-container mx-auto">
        <ul>
          <li><span className="text-redish font-saira">Obsługa klienta</span></li>
          <a href="">
            <li>Dostawa i płatność</li>
          </a>
          <a href="">
            <li>Regulamin sklepu</li>
          </a>
          <a href="">
            <li>Regulamin konta</li>
          </a>
          <a href="">
            <li>Regulamin newslettera</li>
          </a>
          <a href="">
            <li>Polityka prywatności</li>
          </a>
          <a href="">
            <li>Reklamacje</li>
          </a>
          <a href="">
            <li>Zwroty - gwarancja satysfakcji</li>
          </a>
        </ul>
      </div>
      <div className="ft-container mx-auto">
        <ul>
          <li><span className="text-redish font-saira">Przydatne linki</span></li>
          <a href="">
            <li>Aktualne promocje</li>
          </a>
          <a href="">
            <li>Wysyłka PDF</li>
          </a>
          <a href="">
            <li>Opublikuj swój scenariusz</li>
          </a>
          <a href="">
            <li>Dopiero zaczynasz? Zacznij swoją przygodę TUTAJ</li>
          </a>
          <a href="">
            <a href="">
              <li>Czym są gry fabularne (RPG)?</li>
            </a>
          </a>
          <a href="">
            <li>Czym są gry paragrafowe?</li>
          </a>
        </ul>
      </div>
      <div className="ft-container mx-auto">
        <ul>
          <li><span className="text-redish font-saira">Znajdziesz nas na</span></li>
          <a><li>FACEBOOK</li></a>
          <a href="">
            <li><p>Instagram</p></li>
          </a>
          <a href="">
            <li>Twitter</li>
          </a>
          <li><input type='checkbox' id='darkmode-toggle' onChange={handleDarkModeToggle}/>
          <label htmlFor='darkmode-toggle' id='darkMode'></label>
          </li>
        </ul>

      </div>
      
    </footer>
    
  );
};

export default Footer;