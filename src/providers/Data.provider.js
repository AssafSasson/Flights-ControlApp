import React, { useContext, useState, createContext } from "react";
import { useDataProvider } from "../providers/Data.provider";

export const DataContext = createContext({});

export function useDataProvider() {
  return useContext(DataContext);
}

const DataProvider = ({ children }) => {
  const [flight, setFlights] = useState([
    { FlightNum: 55555, flightCompany: "air-frans", passenger: 250 },
    { FlightNum: 22555, flightCompany: "air", passenger: 100 },
    { FlightNum: 24565, flightCompany: "tus-air", passenger: 400 }
  ]);

  const updateFlights = (updatedFlights) => {
    setFlights(updatedFlights);
  };

  return (
    <DataContext.Provider value={{ flight, updateFlights }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
