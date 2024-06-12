import React from "react";
import { useSelectedPatient } from "../helpers/SelectedPatientContext";

const DiagnosticList = () => {
  const { selectedPatient } = useSelectedPatient();

  if (!selectedPatient || !selectedPatient.diagnostic_list) return <div></div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto max-w-4xl mt-10">
      <h2 className="text-xl font-bold mb-4">Diagnostic List</h2>
      <div className="overflow-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 text-left">Problem/Diagnosis</th>
              <th className="py-2 px-4 text-left">Description</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {selectedPatient.diagnostic_list.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.description}</td>
                <td className="py-2 px-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
