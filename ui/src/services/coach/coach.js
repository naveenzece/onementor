import axios from "axios";
import { APIENDPOINTS ,API_URL} from "../apiendpoints";
import { toastrError } from "@/components/ui/toaster/toaster";


export const fetchCoach = async () => {
  const URL = API_URL + APIENDPOINTS.fetchCoach;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (err) {
    toastrError(err.response.data.error);
  }
};

export const createCoach = async (payload) => {
  const URL = API_URL + APIENDPOINTS.createCoach;
  try {
    const response = await axios.post(URL, payload);
    return response.data;
  } catch (err) {
    toastrError(err.response.data.error);
  }
};

export const editCoach = async (id, payload) => {
  const URL = `${API_URL}${APIENDPOINTS.editCoach}/${id}`;
  try {
    const response = await axios.put(URL, payload);
    return response.data;
  } catch (err) {
    toastrError(err.response?.data?.error || "An error occurred");
  }
};

export const deleteCoach = async (id) => {
  const URL = `${API_URL}${APIENDPOINTS.deleteCoach}/${id}`;
  try {
    const response = await axios.delete(URL);
    return response.data;
  } catch (err) {
    toastrError(err.response?.data?.error || "An error occurred");
    throw err;
  }
};