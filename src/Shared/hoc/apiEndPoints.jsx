import { BASE_URL } from "../utils/BaseUrl"
// import {customerApi as axios} from './axios';
const commonRequestResponseKeys = {
  responseStatusCodeKey: "code",
  responseStatusCode: [900, 910],
  responseDataKey: "data",
  responseMessageKey: "message",
  errorMessageKey: "error",
  errorDataKey: "data",
}

export const API_BASE_URL = `${BASE_URL}`

const GET_USER_PROFILE_API = {
  url: `${API_BASE_URL}/users`,
  method: "GET",
  ...commonRequestResponseKeys,
}
export const dashboard = {
  /* ****** APIs Start ****** */
  GET_USER_PROFILE_API,
  /* ****** APIs End ****** */
}
