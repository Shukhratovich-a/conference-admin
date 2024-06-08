import { GetListParams, CreateParams } from "react-admin";

import querystring from "query-string";

import axios, { fileUpload } from "./axios";

export const file = {
  getList: async ({ pagination: { perPage: limit, page } }: GetListParams) => {
    const url = querystring.stringifyUrl({
      url: "/file/get-files-list",
      query: { limit, page },
    });

    const {
      data: { data, total },
    } = await axios.get(url);

    console.log(data, total);

    return { data, total };
  },

  create: async ({ data: body }: CreateParams) => {
    const { data: fileData } = await fileUpload(body.file.rawFile);

    return { data: { id: Date.now(), ...fileData } };
  },
};
