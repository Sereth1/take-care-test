import React from "react";
import Image from "next/image";
import { useSelectedPatient } from "../helpers/SelectedPatientContext";

const PatientProfile = () => {
  const { selectedPatient } = useSelectedPatient();

  if (!selectedPatient) return <div></div>;

  const details = [
    {
      label: "Date Of Birth",
      icon: "/icons/patientProfile/birth.svg",
      value: selectedPatient.date_of_birth,
    },
    {
      label: "Gender",
      icon: "/icons/patientProfile/female.svg",
      value: selectedPatient.gender,
    },
    {
      label: "Contact Info.",
      icon: "/icons/patientProfile/phone.svg",
      value: selectedPatient.phone_number,
    },
    {
      label: "Emergency Contacts",
      icon: "/icons/patientProfile/phone.svg",
      value: selectedPatient.emergency_contact,
    },
    {
      label: "Insurance Provider",
      icon: "/icons/patientProfile/phone.svg",
      value: selectedPatient.insurance_type,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-80 mx-auto">
      <div className="flex flex-col items-center">
        <Image
          src={selectedPatient.profile_picture}
          alt={selectedPatient.name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <h2 className="text-xl font-bold mt-4">{selectedPatient.name}</h2>
      </div>
      <div className="mt-6 space-y-4">
        {details.map((detail, index) => (
          <div key={index} className="flex items-center">
            <Image
              className="rounded-full mr-4"
              src={detail.icon}
              height={20}
              width={30}
              alt={detail.label}
            />
            <div>
              <p className="text-gray-600">{detail.label}</p>
              <p className="font-semibold">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full bg-teal-300  text-black font-semibold py-2 rounded-full hover:bg-teal-600">
        Show All Information
      </button>
    </div>
  );
};

export default PatientProfile;
