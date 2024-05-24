import { GetListParams, GetOneParams, CreateParams, UpdateParams } from "react-admin";

import querystring from "query-string";

import axios, { fileUpload } from "./axios";

export const sponsor = {
  getList: async ({ pagination: { perPage: limit, page } }: GetListParams) => {
    const url = querystring.stringifyUrl({
      url: "/sponsor/get-with-count",
      query: { limit, page },
    });

    const {
      data: { data, total },
    } = await axios.get(url);

    return { data, total };
  },

  getOne: async ({ id }: GetOneParams) => {
    const { data } = await axios.get(`/sponsor/get-with-contents/${id}`);

    data.image = { src: data.image };

    return { data };
  },

  create: async ({ data: body }: CreateParams) => {
    if (body.image && body.image.rawFile) {
      const { data: imageData } = await fileUpload(body.image.rawFile);
      body.image = imageData.url;
    } else body.image = null;

    const { data } = await axios.post(`/sponsor/create`, { ...body });

    return { data };
  },

  update: async ({ data: body, id }: UpdateParams) => {
    if (body.image && body.image.rawFile) {
      const { data: imageData } = await fileUpload(body.image.rawFile);
      body.image = imageData.url;
    } else delete body.image;

    const { data } = await axios.put(`/sponsor/update/${id}`, { ...body });

    return { data };
  },
};
