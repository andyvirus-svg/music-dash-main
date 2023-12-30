import axios from 'axios';

const API_BASE_URL = 'http://172.17.0.2:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const uploadAudio = async (username, audioFile) => {
  try {
    const formData = new FormData();
    formData.append('audio', audioFile);
    formData.append('username', username);

    const response = await api.post('/upload', formData);
    return response.data;
  } catch (error) {
    console.error('Error uploading audio:', error);
    console.error('Error response:', error.response);
    throw error;
  }
};