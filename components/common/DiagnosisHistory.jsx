import React from "react";
import BloodPressureChart from "./BloodPressureChart";
import { useSelectedPatient } from "../helpers/SelectedPatientContext";
import Image from "next/image";
import LoadingSpinner from "../helpers/LoadingSpinner";

const DiagnosisHistory = () => {
  const { selectedPatient } = useSelectedPatient();

  if (!selectedPatient)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  const latestDiagnosis = selectedPatient.diagnosis_history[0];

  const diagnosisData = [
    {
      icon: "/images/diagnosis/rate.png",
      label: "Respiratory Rate",
      value: `${latestDiagnosis.respiratory_rate.value} bpm`,
      status: latestDiagnosis.respiratory_rate.levels,
      color: "bg-blue-100",
    },
    {
      icon: "/images/diagnosis/temp.png",
      label: "Temperature",
      value: `${latestDiagnosis.temperature.value}°F`,
      status: latestDiagnosis.temperature.levels,
      color: "bg-red-100",
    },
    {
      icon: "/images/diagnosis/heart.png",
      label: "Heart Rate",
      value: `${latestDiagnosis.heart_rate.value} bpm`,
      status: latestDiagnosis.heart_rate.levels,
      color: "bg-pink-100",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-h-xl mx-auto max-w-4xl">
      <h2 className="text-xl font-bold mb-4">Diagnosis History</h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Blood Pressure</h3>
          <select className="border border-gray-300 rounded-lg p-2">
            <option>Last 6 months</option>
          </select>
        </div>
        <BloodPressureChart />
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-pink-500 font-bold text-lg">
              {latestDiagnosis.blood_pressure.systolic.value}
            </p>
            <p className="text-gray-600">
              {latestDiagnosis.blood_pressure.systolic.levels}
            </p>
          </div>
          <div>
            <p className="text-blue-500 font-bold text-lg">
              {latestDiagnosis.blood_pressure.diastolic.value}
            </p>
            <p className="text-gray-600">
              {latestDiagnosis.blood_pressure.diastolic.levels}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {diagnosisData.map((data, index) => (
          <div key={index} className={`p-4 rounded-lg ${data.color}`}>
            <Image src={data.icon} height={100} width={100} alt={data.icon} />
            <div className="flex items-center mb-2">
              <div>
                <p className="text-sm text-gray-600">{data.label}</p>
                <p className="text-xl font-bold">{data.value}</p>
                <p className="text-sm text-gray-600">{data.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagnosisHistory;
