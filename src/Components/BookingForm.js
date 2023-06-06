import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    time: "",
    date: "",
  });

  const [searchParams] = useSearchParams();
  const movieName = searchParams.get("movieName");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the booking logic with the form data
    const bookingData = {
      movieName,
      userDetails: formData,
    };

    // Get existing data from session storage
    const existingData =
      JSON.parse(sessionStorage.getItem("bookingFormData")) || [];

    // Append the new booking data to the existing data
    const newData = [...existingData, bookingData];

    // Store the updated data in session storage
    sessionStorage.setItem("bookingFormData", JSON.stringify(newData));

    // Reset the form data
    setFormData({
      name: "",
      email: "",
      age: "",
      time: "",
      date: "",
    });

    // For simplicity, we'll just display the form data here
    console.log(newData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-center m-3">Booking Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Movie Name:</Form.Label>
          <Form.Control type="text" value={movieName} readOnly />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Time:</Form.Label>
          <Form.Control
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date:</Form.Label>
          <Form.Control
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button className="m-4" variant="primary" type="submit">
            Book Ticket
          </Button>
        </motion.div>
      </Form>
    </motion.div>
  );
};

export default BookingForm;
