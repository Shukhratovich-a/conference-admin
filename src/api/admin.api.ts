import axios from "./axios";

interface ILogin {
  username: string;
  password: string;
}

export const admin = {
  login: async (credentials: ILogin) => {
    const { data } = await axios.post(`/admin/login`, { ...credentials });

    return { data };
  },

  checkByToken: async (token: string) => {
    const { data } = await axios.get(`/admin/get-by-token/${token}`, { headers: { Authorization: `Bearer ${token}` } });

    return { data };
  },
};
