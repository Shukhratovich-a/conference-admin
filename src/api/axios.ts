import axios from "axios";

export const DOMAIN = import.meta.env.VITE_SIMPLE_REST_URL;

axios.defaults.baseURL = DOMAIN;

interface IFile {
  url: string;
  name: string;
}

export const fileUpload = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post<IFile>("/file/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export default axios;
