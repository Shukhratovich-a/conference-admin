import {
  CreateParams,
  CreateResult,
  DataProvider,
  DeleteManyParams,
  DeleteManyResult,
  DeleteParams,
  GetListParams,
  GetListResult,
  GetManyParams,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  UpdateParams,
} from "react-admin";
import simpleRestDataProvider from "ra-data-simple-rest";

import axios, { DOMAIN } from "@/api/axios";

import { section } from "@/api/section.api";
import { homepage } from "@/api/homepage.api";

export const baseDataProvider = simpleRestDataProvider(DOMAIN);

export const dataProvider: DataProvider = {
  ...baseDataProvider,
  getList: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    switch (resource) {
      case "section":
        return section.getList(params);
      case "homepage":
        return homepage.getList();
      default: {
        const {
          data: { data, total },
        } = await axios.get(`/${resource}/get-all`);

        return { data, total };
      }
    }
  },

  getMany: async (resource, { ids }: GetManyParams): Promise<GetManyResult> => {
    const data: number[] = [];

    for (const id of ids) {
      const { data: currentData } = await axios.get(
        `/${resource}/get-by-id/${id}`
      );
      data.push(currentData);
    }

    return { data };
  },

  getManyReference: async (resource, params): Promise<GetListResult> => {
    const {
      data: { data, total },
    } = await axios.get(
      `/${resource}/get-by-parent/${params.id}?limit=${params.pagination.perPage}&page=${params.pagination.page}`
    );

    return { data, total };
  },

  getOne: async (
    resource: string,
    params: GetOneParams
  ): Promise<GetOneResult> => {
    switch (resource) {
      case "section":
        return section.getOne(params);
      case "homepage":
        return homepage.getOne();
      default: {
        const { data } = await axios.get(`/${resource}/get-by-id/${params.id}`);

        return data;
      }
    }
  },

  create: async (
    resource: string,
    params: CreateParams
  ): Promise<CreateResult> => {
    switch (resource) {
      case "section":
        return section.create(params);
      default: {
        const { data } = await axios.post(`/${resource}/create`, {
          ...params.data,
        });

        return data;
      }
    }
  },

  update: async (resource: string, params: UpdateParams) => {
    switch (resource) {
      case "section":
        return section.update(params);
      case "homepage":
        return homepage.update(params);
      default: {
        const { data } = await axios.post(`/${resource}/update/${params.id}`, {
          ...params.data,
        });

        return data;
      }
    }
  },

  delete: async (resource: string, params: DeleteParams) => {
    const { data } = await axios.delete(`/${resource}/delete/${params.id}`);

    return { data };
  },

  deleteMany: async (
    resource: string,
    { ids }: DeleteManyParams
  ): Promise<DeleteManyResult> => {
    const data: number[] = [];

    for (const id of ids) {
      const {
        data: { id: currentId },
      } = await axios.delete(`/${resource}/delete/${id}`);

      data.push(currentId);
    }

    return { data };
  },
};
