import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelectedPatient } from "../helpers/SelectedPatientContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = () => {
  const { selectedPatient } = useSelectedPatient();
  if (!selectedPatient || !selectedPatient.diagnosis_history)
    return <div></div>;

  const labels = selectedPatient.diagnosis_history.map(
    (entry) => `${entry.month} ${entry.year}`
  );
  const systolicData = selectedPatient.diagnosis_history.map(
    (entry) => entry.blood_pressure.systolic.value
  );
  const diastolicData = selectedPatient.diagnosis_history.map(
    (entry) => entry.blood_pressure.diastolic.value
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#e57373",
        backgroundColor: "#e57373",
        fill: false,
        tension: 0.1,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#64b5f6",
        backgroundColor: "#64b5f6",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default BloodPressureChart;
