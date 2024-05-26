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
import { contact } from "@/api/contact.api";
import { accommodation } from "@/api/accommodation.api";
import { program } from "@/api/program.api";
import { socialProgram } from "@/api/social-program.api";
import { sponsor } from "@/api/sponsor.api";
import { speaker } from "@/api/speaker.api";
import { user } from "@/api/user.api";
import { organizerRole } from "@/api/organizer-role.api";
import { committeeRole } from "@/api/committee-role.api";
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
      case "contact":
        return contact.getList();
      case "accommodation":
        return accommodation.getList();
      case "program":
        return program.getList();
      case "social-program":
        return socialProgram.getList();
      case "sponsor":
        return sponsor.getList(params);
      case "speaker":
        return speaker.getList(params);
      case "user":
        return user.getList(params);
      case "organizer-role":
        return organizerRole.getList(params);
      case "committee-role":
        return committeeRole.getList(params);
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
      case "contact":
        return contact.getOne();
      case "accommodation":
        return accommodation.getOne();
      case "program":
        return program.getOne();
      case "social-program":
        return socialProgram.getOne();
      case "sponsor":
        return sponsor.getOne(params);
      case "speaker":
        return speaker.getOne(params);
      case "user":
        return user.getOne(params);
      case "organizer-role":
        return organizerRole.getOne(params);
      case "committee-role":
        return committeeRole.getOne(params);
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
      case "speaker":
        return speaker.create(params);
      case "user":
        return user.create(params);
      case "section":
        return section.create(params);
      case "organizer-role":
        return organizerRole.create(params);
      case "committee-role":
        return committeeRole.create(params);
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
      case "contact":
        return contact.update(params);
      case "accommodation":
        return accommodation.update(params);
      case "program":
        return program.update(params);
      case "social-program":
        return socialProgram.update(params);
      case "speaker":
        return speaker.update(params);
      case "user":
        return user.update(params);
      case "sponsor":
        return sponsor.update(params);
      case "organizer-role":
        return organizerRole.update(params);
      case "committee-role":
        return committeeRole.update(params);
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
