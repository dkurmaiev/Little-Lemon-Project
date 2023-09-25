import React, { useState } from 'react';


const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
    specialRequests: '',
    reserved: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDateTime = new Date(`${formData.date}T${formData.time}:00`);
    const currentDateTime = new Date();
  
    if (selectedDateTime <= currentDateTime) {
      alert('Please select a date and time in the future.');
    } else {
      setFormData({ ...formData, reserved: true });
    }
  };
  const generateTimes = () => {
    const times = [];
    for (let hour = 10; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        times.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return times;
  };
  
  // Function to check if a time should be disabled
  const isTimeDisabled = (time, formData) => {
    const selectedDate = new Date(formData.date + 'T' + time + ':00');
    const currentDate = new Date();
  
    // Check if the selected date and time are in the past
    if (selectedDate <= currentDate) {
      return true;
    }
  
    return false;
  
  };


  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="name">
          *Name:
        </label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="label" htmlFor="email">
          *Email:
        </label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="label" htmlFor="phone">
          *Phone:
        </label>
        <input
          className="input"
          type="tel"
          id="phone"
          name="phone"  
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{9}"
        />

<label className="label" htmlFor="date">
          *Date:
        </label>
        <input
          className="input"
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          min={new Date().toISOString().split('T')[0]} // Set the minimum date (today)
        />

        <label className="label" htmlFor="time">
          *Time:
        </label>
        <select
          className="input"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          disabled={formData.date === '' || formData.date < new Date().toISOString().split('T')[0]}
        >
          {/*Generate time slots from 10:00 AM to 10:00 PM*/}
          {generateTimes().map((time) => (
            <option key={time} value={time} disabled={isTimeDisabled(time, formData)}>
              {time}
            </option>
          ))}
        </select>

        <label className="label" htmlFor="guests">
          *Number of Guests:
        </label>
        <input
          className="input"
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="12"
          required
        />

<label className="label" htmlFor="occasion">
          *Occasion:
        </label>
        <select
          className="input"
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
          
        </select>

        <label className="label" htmlFor="specialRequests">
          Special Requests:
        </label>
        <textarea
          className="input"
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
        />

        <button className="button" type="submit">
          Reserve Your Table
        </button>

        {formData.reserved && (
          <p className="message">Table reserved successfully!</p>
        )}
      </form>
    </div>
  );
};

  

export default ReservationForm;
