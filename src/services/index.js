import axios from "axios";
const baseUrl = process.env.REACT_APP_API_ENDPOINT;
export const dataService = {
  getData: async (endpoint) => {
    try {
      const data = await axios.get(`${baseUrl}${endpoint}`);
      return data.data;
    } catch (error) {
      console.log("AN ERROR OCCURED HERE", error.message);
    }
  },
  postData: async (endpoint, payload) => {
    try {
      const data = await axios.get(`${baseUrl}${endpoint}`);
      return data.data;
    } catch (error) {
      console.log("AN ERROR OCCURED HERE", error.message);
    }
  },
  putData: async (endpoint, payload) => {
    try {
      const data = await axios.get(`${baseUrl}${endpoint}`);
      return data.data;
    } catch (error) {
      console.log("AN ERROR OCCURED HERE", error.message);
    }
  },
  deleteData: async (endpoint) => {
    try {
      const data = await axios.get(`${baseUrl}${endpoint}`);
      return data.data;
    } catch (error) {
      console.log("AN ERROR OCCURED HERE", error.message);
    }
  },
};
