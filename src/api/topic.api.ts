import {
  GetListParams,
  GetOneParams,
  CreateParams,
  UpdateParams,
} from "react-admin";

import querystring from "query-string";

import axios from "./axios";

export const topic = {
  getList: async ({ pagination: { perPage: limit, page } }: GetListParams) => {
    const url = querystring.stringifyUrl({
      url: "/topic/get-with-count",
      query: { limit, page },
    });

    const {
      data: { data, total },
    } = await axios.get(url);

    return { data, total };
  },

  getOne: async ({ id }: GetOneParams) => {
    const { data } = await axios.get(`/topic/get-by-id/${id}`);

    return { data };
  },

  create: async ({ data: body }: CreateParams) => {
    const { data } = await axios.post(`/topic/create`, { ...body });

    return { data };
  },

  update: async ({ data: body, id }: UpdateParams) => {
    const { data } = await axios.put(`/topic/update/${id}`, { ...body });

    return { data };
  },
};
