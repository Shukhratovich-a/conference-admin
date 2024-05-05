import { UpdateParams } from "react-admin";

import querystring from "query-string";

import axios, { fileUpload } from "./axios";

export const header = {
  getList: async () => {
    const url = querystring.stringifyUrl({
      url: "/header/get-with-contents",
    });

    const { data } = await axios.get(url);

    data.logo = { src: data.logo };

    return { data: [data], total: 1 };
  },

  getOne: async () => {
    const { data } = await axios.get(`/header/get-with-contents`);

    data.logo = { src: data.logo };

    return { data };
  },

  update: async ({ data: body }: UpdateParams) => {
    if (body.logo && body.logo.rawFile) {
      const { data: logoData } = await fileUpload(body.logo.rawFile);
      body.logo = logoData.url;
    } else delete body.logo;

    const { data } = await axios.put(`/header/update`, { ...body });

    return { data };
  },
};
