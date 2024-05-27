import { GetListParams, GetOneParams, CreateParams, UpdateParams } from "react-admin";

import querystring from "query-string";

import axios from "./axios";

export const committee = {
  getList: async ({ pagination: { perPage: limit, page } }: GetListParams) => {
    const url = querystring.stringifyUrl({
      url: "/committee/get-with-count",
      query: { limit, page },
    });

    const {
      data: { data, total },
    } = await axios.get(url);

    return { data, total };
  },

  getOne: async ({ id }: GetOneParams) => {
    const { data } = await axios.get(`/committee/get-with-contents/${id}`);

    return { data };
  },

  create: async ({ data: body }: CreateParams) => {
    const { data } = await axios.post(`/committee/create`, { ...body });

    return { data };
  },

  update: async ({ data: body, id }: UpdateParams) => {
    if (body.committeeRole) body.committeeRoleId = body.committeeRole.id;

    const { data } = await axios.put(`/committee/update/${id}`, { ...body });

    return { data };
  },
};
