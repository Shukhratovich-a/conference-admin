import { AuthProvider, HttpError } from "react-admin";
import { AxiosError } from "axios";

import { admin } from "@/api/admin.api";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    try {
      const {
        data: { accessToken },
      } = await admin.login({ username, password });

      if (accessToken) {
        localStorage.setItem("token", accessToken);
        return Promise.resolve();
      }

      return Promise.reject(
        new HttpError("Unauthorized", 401, {
          message: "Invalid username or password",
        })
      );
    } catch (error) {
      return Promise.reject(
        new HttpError("Unauthorized", 401, {
          message: "Invalid username or password",
        })
      );
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },

  checkError: (error) => {
    let status: number | undefined = 200;
    if (error instanceof AxiosError) status = error.response?.status;
    else status = error.status;

    if (status === 401) return Promise.reject();

    return Promise.resolve();
  },

  checkAuth: async () => {
    try {
      const { data: user } = await admin.checkByToken(localStorage.getItem("token") || "");

      if (user) {
        return Promise.resolve();
      }

      return Promise.reject(
        new HttpError("Unauthorized", 401, {
          message: "Invalid username or password",
        })
      );
    } catch {
      return Promise.reject(
        new HttpError("Unauthorized", 401, {
          message: "Invalid username or password",
        })
      );
    }
  },

  getPermissions: () => {
    return Promise.resolve(undefined);
  },

  getIdentity: async () => {
    try {
      const { data: user } = await admin.checkByToken(localStorage.getItem("token") || "");

      return Promise.resolve(user);
    } catch {
      return Promise.reject(
        new HttpError("Unauthorized", 401, {
          message: "Invalid username or password",
        })
      );
    }
  },
};

export default authProvider;
