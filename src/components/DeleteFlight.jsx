import React, { useState } from "react";
import "../styles/DeleteFlights.css";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useDataProvider } from "../providers/Data.provider";

function DeleteFlight() {
  const nav = useNavigate();
  const { flight, updateFlights } = useDataProvider();
  const [enterdFlight, setEnteredFlight] = useState("");

  const submitHendler = (e) => {
    e.preventDefault();
    const fillteredFlights = flight.filter((f) => {
      return f.FlightNum != enterdFlight;
    });

    if (fillteredFlights.length != flight.length) {
      updateFlights(fillteredFlights);
      let sum = 0;
      const totalPassenger = fillteredFlights.forEach((flight) => {
        sum += flight.passenger;
        return sum;
      });
      alert(
        `Flight deleted ! the number of flights in the air is ${fillteredFlights.length} the number of passergers is ${sum}`
      );
      nav("/controlpannel");
    } else {
      alert("no matched Flights");
    }
  };
  return (
    <div>
      <Navbar />

      <form style={{ margin: "200px" }} onSubmit={submitHendler}>
        <input
          onChange={(e) => {
            setEnteredFlight(e.target.value);
          }}
          type="text"
          id="flightId"
          placeholder="Please Enter the Flight Id to delete"
        />
        <br />
        <br />
        <br />
        <button id="Btn">Delete</button>
      </form>
    </div>
  );
}

export default DeleteFlight;
