"use client";
import DiagnosisHistory from "@/components/common/DiagnosisHistory";
import DiagnosticList from "@/components/common/DiagnosisList";
import LabResults from "@/components/common/LabResults";
import PatientProfile from "@/components/common/PatientProfile";
import PatientsList from "@/components/common/PatientsList";
import { PatientProvider } from "@/components/helpers/PatientContext";
import {
  SelectedPatientProvider,
  useSelectedPatient,
} from "@/components/helpers/SelectedPatientContext";

export default function Home() {
  return (
    <PatientProvider>
      <SelectedPatientProvider>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-full">
          <div className="col-span-1">
            <PatientsList />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <DiagnosisHistory />
            <DiagnosticList />
          </div>
          <div className="col-span-1">
            <PatientProfile />
            <LabResults />
          </div>
        </div>
      </SelectedPatientProvider>
    </PatientProvider>
  );
}
