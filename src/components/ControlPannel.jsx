import React from "react";
import { useDataProvider } from "../providers/Data.provider";
import Navbar from "./NavBar";

function ControlPannel() {
  const { flight } = useDataProvider();
  return (
    <div>
      <Navbar />
      <div>
        {flight.map((f, i) => {
          return (
            <div key={i} style={{border:'solid black 2px'}}>
              <p>{f.FlightNum}</p>
              <p>{f.flightCompany}</p>
              <p>{f.passenger}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ControlPannel;
