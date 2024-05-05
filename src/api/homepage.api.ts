import { UpdateParams } from "react-admin";

import querystring from "query-string";

import axios, { fileUpload } from "./axios";

export const homepage = {
  getList: async () => {
    const url = querystring.stringifyUrl({
      url: "/homepage/get-with-contents",
    });

    const { data } = await axios.get(url);

    data.poster = { src: data.poster };

    return { data: [data], total: 1 };
  },

  getOne: async () => {
    const { data } = await axios.get(`/homepage/get-with-contents`);

    data.poster = { src: data.poster };

    return { data };
  },

  update: async ({ data: body }: UpdateParams) => {
    if (body.poster && body.poster.rawFile) {
      const { data: posterData } = await fileUpload(body.poster.rawFile);
      body.poster = posterData.url;
    } else delete body.poster;

    const { data } = await axios.put(`/homepage/update`, { ...body });

    return { data };
  },
};
