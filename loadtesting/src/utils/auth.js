import { jwtDecode } from "jwt-decode";

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
 
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    return decoded.exp > Date.now() / 1000;
  } catch {
    return false;
  }
};

export const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.role || null;
};