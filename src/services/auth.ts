import User from '@/Models/User';
import httpClient from './http';

// Fonction pour enregistrer un nouvel utilisateur
export const registerUser = async (userData: User) => {
  try {
    const response = await httpClient.post('/register', userData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

// Fonction pour connecter un utilisateur
export const loginUser = async (userData: { email: string; password: string }) => {
  try {
    const response = await httpClient.post('/login', userData);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

// Fonction pour déconnecter un utilisateur
export const logoutUser = async () => {
  try {
    const response = await httpClient.post('/logout');
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data);
  }
};

// Fonction pour récupérer les informations de l'utilisateur connecté
export const getUser = async () => {
  try {
    const response = await httpClient.get('/user');    
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
