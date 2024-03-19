import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/css/suba/BookingForm.css'; // Import your custom CSS file
import backgroundImage from '../../assets/images/formimg.jpg'; // Import your background image

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    celebration: '',
    services: '',
    date: null,
    priceRange: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      state: '',
      city: '',
      celebration: '',
      services: '',
      date: null,
      priceRange: ''
    });
  };

  return (
    <div className="form-container">
      <div className="form-body">
      <div className="image-container"><img src={backgroundImage} alt="Background" className="background-image" />
        </div>
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Booking Form</h2>
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>
            State
            <select name="state" value={formData.state} onChange={handleChange} required>
              <option value="">Select State</option>
              <option value="state1">Tamil Nadu</option>
              <option value="state2">Andhra Pradesh</option>
              <option value="state3">Kerala</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            City
            <select name="city" value={formData.city} onChange={handleChange} required>
              <option value="">Select City</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            Celebration*
            <select name="celebration" value={formData.celebration} onChange={handleChange} required>
              <option value="">Select Celebration</option>
              <option value="celebration1">Birthday</option>
              <option value="celebration2">Wedding</option>
              <option value="celebration3">Housewarming</option>
              <option value="celebration4">Engagement</option>
              <option value="celebration5">Others</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            Celebration Date
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              required
            />
          </label>
          <label>
            Price Range
            <select name="priceRange" value={formData.priceRange} onChange={handleChange} required>
              <option value="">Select Price Range</option>
              <option value="0-100">$0 - $100</option>
              <option value="100-500">$100 - $500</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
