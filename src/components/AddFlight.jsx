import React, { useState } from "react";
import Navbar from "./NavBar";
import { useDataProvider } from "../providers/Data.provider";
import { useNavigate } from "react-router-dom";

function AddFlight() {
  const nav = useNavigate();

  const { flight, updateFlights } = useDataProvider();
  const [flightNum, setFlightNum] = useState("0");
  const [flightCom, setFlightCom] = useState("");
  const [passenger, setPassenger] = useState(0);

  const valid = (FlightNumS) => {
    if (isNaN(flightNum)) {
      alert("flight number must contain only numbers & 5 numbers");
      return false;
    }
    if (FlightNumS.includes(+flightNum)) {
      alert("flight exist");
      return false;
    }
    if (flightCom.length < 1) {
      alert("must contain at least one caracter");
      return false;
    }
    if (passenger > 450 || passenger < 1) {
      alert("passengers must be between 1-450");
      return false;
    }
    return true;
  };
  const submitHendler = (e) => {
    e.preventDefault();
    const flightNumSort = flight.map((f) => {
      return f.FlightNum;
    });
    if (!valid(flightNumSort)) {
      return;
    }
    const newFlight = {
      FlightNum: flightNum,
      flightCompany: flightCom,
      passenger: passenger,
    };
    updateFlights([...flight, newFlight]);
    nav('/controlpannel')
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={submitHendler}>
        <input
          onChange={(e) => {
            setFlightNum(e.target.value);
          }}
          type="text"
          placeholder="Flight Id"
          maxLength={5}
          minLength={5}
        />
        <input
          onChange={(e) => {
            setFlightCom(e.target.value);
          }}
          type="text"
          placeholder="Flight Company"
        />
        <input
          onChange={(e) => {
            setPassenger(e.target.value);
          }}
          type="number"
          placeholder="Passeger"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddFlight;
