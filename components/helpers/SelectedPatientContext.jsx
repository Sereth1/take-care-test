import React, { createContext, useContext, useState } from "react";

const SelectedPatientContext = createContext();

export const useSelectedPatient = () => {
  return useContext(SelectedPatientContext);
};

export const SelectedPatientProvider = ({ children }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <SelectedPatientContext.Provider
      value={{ selectedPatient, setSelectedPatient }}
    >
      {children}
    </SelectedPatientContext.Provider>
  );
};
