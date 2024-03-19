
import '../../assets/css/suba/Styles.css'; // Import CSS file
import mag from '../../assets/images/balloonartist.jpg';
import game from '../../assets/images/games.jpg';
import char from '../../assets/images/cartoon.webp';
import cotton from '../../assets/images/cottoncandy.webp'
import cari from '../../assets/images/caricature.jpg'
import car from '../../assets/images/cartoon.webp'
import henna from '../../assets/images/henna.jpg'
import mini from '../../assets/images/miniature plants.jpg'
import mock from '../../assets/images/mocktails.jpeg'
import theme from '../../assets/images/themeddecorations.jpg'
import dessert from '../../assets/images/desserts.jpg'
import keychain from '../../assets/images/keychains.jpg'
import set from '../../assets/images/stationarysets.webp'
import photo from '../../assets/images/photobooth.webp'
import bags from '../../assets/images/goodiebags.jpg'

const AddOns = () => {
  return (
    <div className="add-ons">
      <h1 style={{marginLeft:'50%'}}>Add-Ons</h1>
      <div className="addon-category">
        <h2>Entertainment</h2>
        <ul className="addon-list">
          <li className="addon-item">
            <img src={mag} alt="Magicians or Balloon Artists" />
            <span>Magicians or Balloon Artists</span>
          </li>
          <li className="addon-item">
            <img src={game} alt="Games and Activities" />
            <span>Games and Activities</span>
          </li>
          <li className="addon-item">
            <img src={char} alt="Character Appearances" />
            <span>Character Appearances</span>
          </li>
        </ul>
      </div>
      <div className="addon-category">
        <h2>Food and Drinks</h2>
        <ul className="addon-list">
          <li className="addon-item">
            <img src={dessert} alt="Dessert Station" />
            <span>Dessert Station</span>
          </li>
          <li className="addon-item">
            <img src={cotton} alt=" Cotton Candy Cart" />
            <span> Cotton Candy Cart</span>
          </li>
          <li className="addon-item">
            <img src={mock} alt="Themed Mocktails" />
            <span>Themed Mocktails</span>
          </li>
        </ul>
      </div>
      <div className="addon-category">
        <h2>Decorations</h2>
        <ul className="addon-list">
          <li className="addon-item">
            <img src={theme} alt="Themed Decorations" />
            <span>Themed Decorations</span>
          </li>
          <li className="addon-item">
            <img src={bags} alt="Personalized Goodie Bags" />
            <span>Personalized Goodie Bags</span>
          </li>
        </ul>
      </div>
      <div className="addon-category">
        <h2>Return Gift </h2>
        <ul className="addon-list">
          <li className="addon-item">
            <img src={keychain} alt="Themed Decorations" />
            <span>Customized Keychains</span>
          </li>
          <li className="addon-item">
            <img src={mini} alt="Miniature Plants " />
            <span>Miniature Plants </span>
          </li>
          <li className="addon-item">
            <img src={set} alt="Miniature Plants " />
            <span>Cute Stationery Sets</span>
          </li>
        </ul>
      </div>
      <div className="addon-category">
        <h2>Other Add-Ons</h2>
        <ul className="addon-list">
          <li className="addon-item">
            <img src={photo} alt="Photobooth with Props" />
            <span>Photobooth with Props</span>
          </li>
          <li className="addon-item">
            <img src={henna} alt=" Henna Tattoo Artists" />
            <span> Henna Tattoo Artists</span>
          </li>
          <li className="addon-item">
            <img src={cari} alt="Caricature Artists" />
            <span>Caricature Artists</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default AddOns;
