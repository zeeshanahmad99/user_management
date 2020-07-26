import axios from 'axios';

import { api_endpoint, cloudinary_endpoint } from './config';

const api = axios.create({
  baseURL: api_endpoint,
});

export const createUser = async (user) => {
  try {
    const res = await api.post('/users', { user });
    return { data: res.data };
  } catch (err) {
    return { error: err.response.data };
  }
};

export const updateUser = async (user, id) => {
  try {
    const res = await api.put(`/users/${id}`, { user });
    return { data: res.data };
  } catch (err) {
    return { error: err.response.data };
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await api.delete(`/users/${id}`);
    return { data: res.data };
  } catch (err) {
    return { error: err.response.data };
  }
};

export const getAllUsers = async () => {
  try {
    const res = await api.get('/users');
    return { data: res.data };
  } catch (err) {
    return { error: err.response.data };
  }
};

export const getUser = async (id) => {
  try {
    const res = await api.get(`/users/${id}`);
    return { data: res.data };
  } catch (err) {
    return { error: err.response.data };
  }
};

export const uploadImage = async (data) => {
  try {
    const res = await api.post(cloudinary_endpoint, data);
    return { image: res.data.secure_url };
  } catch (err) {
    return { error: err.response.data };
  }
};
