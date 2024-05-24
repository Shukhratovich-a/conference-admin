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

import { header } from "@/api/header.api";
import { homepage } from "@/api/homepage.api";
import { date } from "@/api/date.api";
import { fee } from "@/api/fee.api";
import { submission } from "@/api/submission.api";
import { sponsor } from "@/api/sponsor.api";
import { user } from "@/api/user.api";
import { section } from "@/api/section.api";
import { article } from "@/api/article.api";

export const baseDataProvider = simpleRestDataProvider(DOMAIN);

export const dataProvider: DataProvider = {
  ...baseDataProvider,
  getList: async (resource: string, params: GetListParams): Promise<GetListResult> => {
    switch (resource) {
      case "header":
        return header.getList();
      case "homepage":
        return homepage.getList();
      case "date":
        return date.getList();
      case "fee":
        return fee.getList();
      case "submission":
        return submission.getList();
      case "sponsor":
        return sponsor.getList(params);
      case "user":
        return user.getList(params);
      case "section":
        return section.getList(params);
      case "article":
        return article.getList(params);
      default: {
        const {
          data: { data, total },
        } = await axios.get(`/${resource}/get-with-count`);

        return { data, total };
      }
    }
  },

  getMany: async (resource, { ids }: GetManyParams): Promise<GetManyResult> => {
    const data: number[] = [];

    for (const id of ids) {
      const { data: currentData } = await axios.get(`/${resource}/get-with-contents/${id}`);
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

  getOne: async (resource: string, params: GetOneParams): Promise<GetOneResult> => {
    switch (resource) {
      case "header":
        return header.getOne();
      case "homepage":
        return homepage.getOne();
      case "date":
        return date.getOne();
      case "fee":
        return fee.getOne();
      case "submission":
        return submission.getOne();
      case "sponsor":
        return sponsor.getOne(params);
      case "user":
        return user.getOne(params);
      case "section":
        return section.getOne(params);
      case "article":
        return article.getOne(params);
      default: {
        const { data } = await axios.get(`/${resource}/get-by-id/${params.id}`);

        return data;
      }
    }
  },

  create: async (resource: string, params: CreateParams): Promise<CreateResult> => {
    switch (resource) {
      case "sponsor":
        return sponsor.create(params);
      case "user":
        return user.create(params);
      case "section":
        return section.create(params);
      case "article":
        return article.create(params);
      default: {
        const { data } = await axios.post(`/${resource}/create`, { ...params.data });

        return data;
      }
    }
  },

  update: async (resource: string, params: UpdateParams) => {
    switch (resource) {
      case "header":
        return header.update(params);
      case "homepage":
        return homepage.update(params);
      case "date":
        return date.update(params);
      case "fee":
        return fee.update(params);
      case "submission":
        return submission.update(params);
      case "user":
        return user.update(params);
      case "sponsor":
        return sponsor.update(params);
      case "section":
        return section.update(params);
      case "article":
        return article.update(params);
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

  deleteMany: async (resource: string, { ids }: DeleteManyParams): Promise<DeleteManyResult> => {
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
