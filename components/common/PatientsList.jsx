import React from "react";
import Image from "next/image";
import { usePatient } from "../helpers/PatientContext";
import { useSelectedPatient } from "../helpers/SelectedPatientContext";

const PatientsList = () => {
  const patients = usePatient();
  const { setSelectedPatient } = useSelectedPatient();
  if (!patients) return <div></div>;
  if (patients.length === 0) return <div>Patients not found</div>;

  return (
    <div className="absolute top-[122px] left-[18px] w-[367px] h-[1054px] bg-white text-black rounded-lg opacity-100 p-4 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Patients</h2>
        <i className="fas fa-search"></i>
      </div>
      <div className="space-y-2 overflow-y-auto h-[calc(100%-64px)]">
        {patients.map((patient, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 rounded-lg p-2 shadow-sm cursor-pointer"
            onClick={() => setSelectedPatient(patient)}
          >
            <div className="flex items-center">
              <Image
                src={patient.profile_picture}
                alt={patient.name}
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
              <div>
                <p className="font-semibold">{patient.name}</p>
                <p className="text-gray-600 text-sm">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <i className="fas fa-ellipsis-v text-gray-600"></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsList;
