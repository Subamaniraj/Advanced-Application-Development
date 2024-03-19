import '../../assets/css/suba/Styles.css'
import AddOns from './AddOns';
import img from '../../assets/images/Birthday1.jpeg';
import img1 from '../../assets/images/birthday2.jpg';
import img2 from '../../assets/images/birthday0.webp';

function BirthdayPage(){
  return (
    <div className="birthday-page">
      <h1>Birthday Celebration Packages</h1>
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

export default BirthdayPage;
