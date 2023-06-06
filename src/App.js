import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowList from "./Components/ShowList";
import ShowDetails from "./Components/ShowDetails";
import "./App.css"
// import Bookingform from "./Components/BookingForm";
import NavBar from "./Components/NavBar";
import BookingForm from "./Components/BookingForm";
// import BookingForm from "./Components/BookingForm";


const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ShowList/>} />
        <Route exact path="/show/:id" element={<ShowDetails/>} />
        <Route exact path="/booking" element={<BookingForm/>} />

      </Routes>
    </Router>
  );
};

export default App;
