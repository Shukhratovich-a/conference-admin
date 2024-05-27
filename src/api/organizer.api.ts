import { GetListParams, GetOneParams, CreateParams, UpdateParams } from "react-admin";

import querystring from "query-string";

import axios from "./axios";

export const organizer = {
  getList: async ({ pagination: { perPage: limit, page } }: GetListParams) => {
    const url = querystring.stringifyUrl({
      url: "/organizer/get-with-count",
      query: { limit, page },
    });

    const {
      data: { data, total },
    } = await axios.get(url);

    return { data, total };
  },

  getOne: async ({ id }: GetOneParams) => {
    const { data } = await axios.get(`/organizer/get-with-contents/${id}`);

    return { data };
  },

  create: async ({ data: body }: CreateParams) => {
    const { data } = await axios.post(`/organizer/create`, { ...body });

    return { data };
  },

  update: async ({ data: body, id }: UpdateParams) => {
    if (body.organizerRole) body.organizerRoleId = body.organizerRole.id;

    const { data } = await axios.put(`/organizer/update/${id}`, { ...body });

    return { data };
  },
};
