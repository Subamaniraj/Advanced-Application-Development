
import '../../assets/css/suba/EventsPage.css'; // Import CSS file for styling

// Import event images
import weddingImage from '../../assets/images/weddingImage.jpeg'
import housewarmingImage from '../../assets/images/housewarmingImage.jpg';
import engagementImage from '../../assets/images/engagementImage.jpg'
import birthdayImage from '../../assets/images/birthdayImage.jpg';
import { Link } from 'react-router-dom';
function EventsPage(){
    return (
      <div className="events-container">
        <h1>Events</h1>
        <div className="events-grid">
          <div className="event-card wedding">
            <div className="event-image">
              <img src={weddingImage} alt="Wedding" />
            </div>
            <div className="event-details">
          <Link to="/wedding">
              <h2>Wedding</h2>
              </Link>
              <p>Step into your fairy tale with our wedding planning services. From intimate ceremonies to grand receptions, we orchestrate every detail to perfection. Enjoy personalized themes, exquisite décor, and seamless coordination, ensuring your special day is nothing short of magical.</p>
            </div>
          </div>
          <div className="event-card housewarming">
            <div className="event-details">
            <Link to="/housewarming">
              <h2>Housewarming</h2></Link>
              <p>Settle into your new home with a memorable housewarming party!</p>
            </div>
            <div className="event-image">
              <img src={housewarmingImage} alt="Housewarming" />
            </div>
          </div>
          <div className="event-card engagement">
            <div className="event-image">
              <img src={engagementImage} alt="Engagement" />
            </div>
            <div className="event-details">
            <Link to="/engagement"><h2>Engagement</h2></Link>
              <p>Celebrate your love with an unforgettable engagement party!</p>
            </div>
          </div>
          <div className="event-card birthday">
            <div className="event-details">
            <Link to="/birthday"><h2>Birthday Party</h2></Link>
              <p>Throw a birthday bash they'll never forget!</p>
            </div>
            <div className="event-image">
              <img src={birthdayImage} alt="Birthday Party" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default EventsPage;