import '../../assets/css/suba/Styles.css'
import AddOns from './AddOns';
import img from '../../assets/images/house1.jpg';
import img1 from '../../assets/images/house2.jpg';
import img2 from '../../assets/images/house3.jpg';

function HouseWarmingPage() {
  return (
    <div className="birthday-page">
      <h1>Housewarming Packages</h1>
      <div className="packages">
        <div className="package-card">
          <div className="package-image">
            <img src={img} alt="Budget" />
          </div>
          <div className="package-details">
            <h2>Budget</h2>
            <p>Basic package</p>
          </div>
        </div>
        <div className="package-card">
          <div className="package-image">
            <img src={img1} alt="Elite" />
          </div>
          <div className="package-details">
            <h2>Elite</h2>
            <p>Premium package</p>
          </div>
        </div>
        <div className="package-card">
          <div className="package-image">
            <img src={img2} alt="Celebrity" />
          </div>
          <div className="package-details">
            <h2>Celebrity</h2>
            <p>Luxury package</p>
          </div>
        </div>
      </div>
      <AddOns />
    </div>
  );
}

export default HouseWarmingPage;
