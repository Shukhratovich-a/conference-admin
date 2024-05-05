import { GetListParams, GetOneParams, CreateParams, UpdateParams } from "react-admin";

import querystring from "query-string";

import axios from "./axios";

export const article = {
  getList: async (params: GetListParams) => {
    const { perPage: limit, page } = params.pagination;
    const { field, order } = params.sort;
    const query = { sort: field, order, limit, page };

    const url = querystring.stringifyUrl({ url: "/article/get-with-count", query });

    const {
      data: { data, total },
    } = await axios.get(url);

    return { data, total };
  },

  getOne: async ({ id }: GetOneParams) => {
    const { data } = await axios.get(`/article/get-with-contents/${id}`);

    return { data };
  },

  create: async ({ data: body }: CreateParams) => {
    const { data } = await axios.post(`/article/create`, { ...body });

    return { data };
  },

  update: async ({ data: body, id }: UpdateParams) => {
    const { data } = await axios.put(`/article/update/${id}`, { ...body });

    return { data };
  },
};
