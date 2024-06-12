import axios from "axios";

export const fetchPatients = async () => {
  const response = await axios.get(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      auth: {
        username: "coalition",
        password: "skills-test",
      },
    }
  );
  return response.data;
};
