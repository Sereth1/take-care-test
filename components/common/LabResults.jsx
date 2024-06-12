import React from "react";
import { useSelectedPatient } from "../helpers/SelectedPatientContext";

const LabResults = () => {
  const { selectedPatient } = useSelectedPatient();

  if (!selectedPatient || !selectedPatient.lab_results)
    return <div>No lab results available</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mx-auto max-w-xs h-72 mt-10">
      <h2 className="text-lg font-bold mb-2">Lab Results</h2>
      <div className="overflow-y-auto h-48">
        <ul>
          {selectedPatient.lab_results.map((result, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-200 py-1 px-2 hover:bg-gray-50 cursor-pointer"
            >
              <span className="text-sm">{result}</span>
              <i className="fas fa-download text-gray-600"></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LabResults;
