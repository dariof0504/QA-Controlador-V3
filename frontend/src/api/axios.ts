import axios from "axios";
import { getPk } from "../functions/general_functions";
import config from "../envVar";

export const api = axios.create({
  baseURL: config.NODE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const downloadSession = async (pk:string | undefined) => {

  const config = {
    url: `/download/session/${pk}`,
    method: 'GET'
  };

  const result = await api.request(config)

  return result

}

export const executeSession = async (pk:string | undefined) => {

  const config = {
    url: `/execute/session/${pk}`,
    method: 'GET'
  };

  const result = await api.request(config)

  return result
}

export const generalApi = async (
  info: any,
  element: any,
  method: "POST" | "PUT"
) => {
  const { field_name } = info;

  const config = {
    method,
    data: element,
    url:
      method === "POST" ? `${field_name}/` : `${field_name}/${getPk(element)}/`,
  };

  const result = await api.request(config);

  return result;
};

export const listElements = async (path: string) => {
  const config = {
    method: "GET",
    url: `all/${path}/`,
  };

  const result = await api.request(config);

  return result;
};

export const listElementByField = async (
  path: string,
  field: string,
  payload: string
) => {
  const config = {
    method: "GET",
    url: `byField/${path}/${field}/${payload}/`,
  };

  const result = await api.request(config);

  return result;
};

export const elementsByFK = async (
  path: string,
  fk_path: string,
  pk: string
) => {
  const config = {
    method: "GET",
    url: `byFK/${fk_path}/${path}/${pk}/`,
  };

  const result = await api.request(config);

  return result;
};

export const getElement = async (path: string, pk: string | undefined) => {
  const config = {
    method: "GET",
    url: `/byID/${path}/${pk}`,
  };

  const result = await api.request(config);

  return result;
};

export const deleteElement = async(path:string, pk:string) => {
  const config = {
    method: 'DELETE',
    url: `/delete/${path}/${pk}`
  }

  const result = await api.request(config)

  return result
}
