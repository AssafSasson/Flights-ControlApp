import React, { useState } from "react";
import Navbar from "./NavBar";
import { useDataProvider } from "../providers/Data.provider";

function FlightSort() {
  const { flight } = useDataProvider();
  const [selectedValue, setSelectValue] = useState("");
  const [searchInp, setSearchinp] = useState("");

  const filteredFlights = [...flight];

  const selectHandler = (e) => {
    setSelectValue(e.target.value);
  };
  if (selectedValue === "lowerNumber") {
    flight.sort((a,b) => {
      return a.passenger - b.passenger;
    });
  }
  if (selectedValue === "higherNumber") {
    flight.sort((a, b) => {
      return b.passenger - a.passenger;
    });
  }

  return (
    <div>
      <Navbar />

      <input
        onChange={(e) => {
          setSearchinp(e.target.value.toLowerCase());
        }}
        type="text"
        placeholder="Search for Flight"
      />
      <br />
      <select onChange={selectHandler}>
        <option>Sort Passengers</option>
        <option value="lowerNumber">Lower Number</option>
        <option value="higherNumber">Higher Number</option>
      </select>
      <br />
      <div>
        {filteredFlights.map((f, i) => {
          if (f.flightCompany.includes(searchInp)) {
            return (
              <div key={i} style={{ border: "solid black 2px" }}>
                <p>{f.FlightNum}</p>
                <p>{f.flightCompany}</p>
                <p>{f.passenger}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default FlightSort;
