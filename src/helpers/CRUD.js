import axios from 'axios';
export const ApiURL = 'http://192.168.72.60:8083';

const header = {
  'Content-Type': 'multipart/form-data',
};

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
    const response = await axios.get(ApiURL + path);
    return response;
  } catch (error) {
    throw error;
  }
};
