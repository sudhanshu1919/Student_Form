import axios from "axios";

export const savePassenger = async (passengerData) => {
  await axios.post("/api/passenger", passengerData);
};

export const getPassengers = async () => {
  const response = await axios.get("/api/passengers");
  return response.data;
};
