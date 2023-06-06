import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TicketBooking = ({ movieName }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    // Redirect to the booking form with the movie name as a query parameter
    navigate(`/booking?movieName=${encodeURIComponent(movieName)}`);
  };

  return (
    <div className="container">
      <h1>Movie Ticket Booking</h1>
      <Button variant="primary" onClick={handleBooking}>
        Book Ticket
      </Button>
    </div>
  );
};

export default TicketBooking;
