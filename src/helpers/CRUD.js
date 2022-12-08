import axios from 'axios';
export const ApiURL = 'http://localhost:8000/api/kunjungan';

const header = {
  'Content-Type': 'multipart/form-data',
};
let token = {};

export const postData = async (path, data) => {
  try {
    const response = await axios.post(ApiURL + path, data, header);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getData = async path => {
  try {
    const response = await axios.get(ApiURL + path, token);
    return response;
  } catch (error) {
    throw error;
  }
};
