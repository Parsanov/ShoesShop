import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5227',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const authApi = {
  register: async (registerData) => {
    try {
      const response = await api.post('/User/register', {
        email: registerData.email,
        password: registerData.password,
        userName: registerData.email,
      });
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error.response?.data || error.message;
    }
  },

  login: async (loginData) => {
    try {
      console.log('Login request:', loginData);
      const response = await api.post('/User/login', loginData);
      if (response.data.token) {
        console.log('Login successful, token:', response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error.response?.data || error.message;
    }
  },

  getProfile: async () => {
    try {
      const response = await api.get('/UserProfile/profile');
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error.response?.data || error.message;
    }
  },

  logout: async () => {
    try {
      const response = await api.post('/User/logout');
      return response.data;
    } catch (error) {
      console.error('Logout error:', error);
    }
  },
};
