import '../../assets/css/suba/Styles.css'
import AddOns from './AddOns';
import img from '../../assets/images/wed1.jpg';
import img1 from '../../assets/images/wed2.jpeg';
import img2 from '../../assets/images/wed3.jpeg';

function WeddingPage(){
  return (
    <div className="birthday-page">
      <h1>Wedding Packages</h1>
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

export default WeddingPage;
