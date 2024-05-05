import { GetListParams, GetOneParams, CreateParams, UpdateParams } from "react-admin";

import querystring from "query-string";

import axios, { fileUpload } from "./axios";

export const user = {
  getList: async (params: GetListParams) => {
    const { perPage: limit, page } = params.pagination;
    const { field, order } = params.sort;
    const query = { sort: field, order, limit, page };

    const url = querystring.stringifyUrl({ url: "/user/get-with-count", query });

    const {
      data: { data, total },
    } = await axios.get(url);

    return { data, total };
  },

  getOne: async ({ id }: GetOneParams) => {
    const { data } = await axios.get(`/user/get-with-contents/${id}`);

    data.image = { src: data.image };

    return { data };
  },

  create: async ({ data: body }: CreateParams) => {
    if (body.image && body.image.rawFile) {
      const { data: imageData } = await fileUpload(body.image.rawFile);
      body.image = imageData.url;
    } else body.image = null;

    const { data } = await axios.post(`/user/register`, { ...body });

    return { data };
  },

  update: async ({ data: body, id }: UpdateParams) => {
    if (body.image && body.image.rawFile) {
      const { data: imageData } = await fileUpload(body.image.rawFile);
      body.image = imageData.url;
    } else body.image = null;

    const { data } = await axios.put(`/user/update/${id}`, { ...body });

    return { data };
  },
};
