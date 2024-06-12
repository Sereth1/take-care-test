import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <h1 className="text-2xl font-semibold">Choose Patient</h1>
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};

export default LoadingSpinner;
