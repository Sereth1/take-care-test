import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchPatients } from "../../api/fetchPatient";

const PatientContext = createContext();

export const usePatient = () => {
  return useContext(PatientContext);
};

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState(null);

  useEffect(() => {
    const getPatients = async () => {
      const patients = await fetchPatients();
      setPatients(patients);
    };

    getPatients();
  }, []);

  return (
    <PatientContext.Provider value={patients}>
      {children}
    </PatientContext.Provider>
  );
};
