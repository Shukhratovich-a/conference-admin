import axios from "axios";

export const DOMAIN = import.meta.env.VITE_SIMPLE_REST_URL;

interface IFile {
  url: string;
  name: string;
}

const fetchClient = () => {
  const defaultOptions = {
    baseURL: DOMAIN,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return instance;
};

export const fileUpload = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return fetchClient().post<IFile>("/file/upload", formData, { headers: { "Content-Type": "multipart/form-data" } });
};

export default fetchClient();
