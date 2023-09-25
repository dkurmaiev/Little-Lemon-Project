import React from 'react';
import ReservationForm from './ReservationForm';


const Reservation = () => {
  return (
    <div className="reservation-page">
      <h1>Reservation</h1>
      <p>Make a reservation for your dining experience.</p>

     
      <ReservationForm />
    </div>
  );
};

export default Reservation;
