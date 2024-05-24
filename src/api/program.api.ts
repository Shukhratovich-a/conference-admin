import { UpdateParams } from "react-admin";

import querystring from "query-string";

import axios from "./axios";

export const program = {
  getList: async () => {
    const url = querystring.stringifyUrl({
      url: "/program/get-with-contents",
    });

    const { data } = await axios.get(url);

    return { data: [data], total: 1 };
  },

  getOne: async () => {
    const { data } = await axios.get(`/program/get-with-contents`);

    return { data };
  },

  update: async ({ data: body }: UpdateParams) => {
    const { data } = await axios.put(`/program/update`, { ...body });

    return { data };
  },
};
