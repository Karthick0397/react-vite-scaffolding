// import BASE_URL from '../utils/BaseUrl';
// import {customerApi as axios} from './axios';
const commonRequestResponseKeys = {
  responseStatusCodeKey: 'code',
  responseStatusCode: [900, 910],
  responseDataKey: 'data',
  responseMessageKey: 'message',
  errorMessageKey: 'error',
  errorDataKey: 'data',
};
const BASE_URL = 'http://3.111.196.126/';

export const API_BASE_URL = `${BASE_URL}api`;
export const MEDIA_API_BASE_URL = `${BASE_URL}api/`;
export const MAP_KEY = "AIzaSyCCtQkNfRlKOL2USiCZsXOoTuKkhVoMAKQ"

const LOGIN_API = {
  url: `${API_BASE_URL}/accounts/admin/login/`,
  method: 'POST',
  responseDataKey: 'data',
  // ...commonRequestResponseKeys
};

const GET_USER_PROFILE_API = {
  url: `${API_BASE_URL}/accounts/me`,
  method: 'GET',
  responseDataKey: 'data',
};
const GET_LANES_API = {
  url: `${API_BASE_URL}/trucks/lanes`,
  method: 'GET',
  responseDataKey: 'data',
}
const ADD_LANES_API = {
  url: `${API_BASE_URL}/trucks/lanes`,
  method: 'POST',
  responseDataKey: 'data',
  // axios,
}
const EDIT_LANES_API = {
  url: ({id}) =>  `${API_BASE_URL}/trucks/lanes/${id}`,
  method: 'PUT',
  responseDataKey: 'data',
  // axios,
}
const DELETE_LANES_API = {
  url: ({id}) => `${API_BASE_URL}/trucks/lanes/${id}`,
  method: 'DELETE',
  responseDataKey: 'data',
  // axios,
}
const GET_CITIES_API = {
  url: `${API_BASE_URL}/trucks/lanes/cities`,
  method: 'GET',
  responseDataKey: 'data',
};

const ONE_WAY_BOOKING_API = {
  url: `${API_BASE_URL}/one-way-move/bookings`,
  method: 'POST',
  responseDataKey: 'data',
}

const GET_GOODS_LIST_API = {
  url: `${API_BASE_URL}/agri-goods/`,
  method: 'GET',
  responseDataKey: 'data',
}
const ADD_GOODS_API = {
  url: `${API_BASE_URL}/agri-goods/`,
  method: 'POST',
  responseDataKey: 'data',
  // axios,
}
const EDIT_GOODS_API = {
  url: ({id}) => `${API_BASE_URL}/agri-goods/${id}`,
  method: 'PUT',
  responseDataKey: 'data',
  // axios,
}
const VERIFY_GOODS_API = {
  url: ({id}) => `${API_BASE_URL}/agri-goods/${id}`,
  method: 'PATCH',
  responseDataKey: 'data',
  // axios,
}
const DELETE_GOODS_API = {
  url: ({id}) => `${API_BASE_URL}/agri-goods/${id}`,
  method: 'DELETE',
  responseDataKey: 'data',
  // axios,
}
const GET_TRUCK_LIST_API = {
  url: `${API_BASE_URL}/trucks/`,
  method: 'GET',
  responseDataKey: 'data',
}
const ADD_TRUCK_API = {
  url: `${API_BASE_URL}/trucks/create`,
  method: 'POST',
  responseDataKey: 'data',
}
const EDIT_TRUCK_API = {
  url: ({id}) => `${API_BASE_URL}/trucks/${id}`,
  method: 'PUT',
  responseDataKey: 'data',
}
const DELETE_TRUCK_API = {
  url: ({id}) => `${API_BASE_URL}/trucks/${id}`,
  method: 'DELETE',
  responseDataKey: 'data',
}
const GET_TRUCK_DETENTION_API = {
  url: `${API_BASE_URL}/trucks/truck-payloads`,
  method: 'GET',
  responseDataKey: 'data',
}
const ADD_TRUCK_DETENTION_API = {
  url: `${API_BASE_URL}/trucks/truck-payloads`,
  method: 'POST',
  responseDataKey: 'data',
}
const EDIT_TRUCK_DETENTION_API = {
  url: ({id}) => `${API_BASE_URL}/trucks/truck-payloads/${id}`,
  method: 'PUT',
  responseDataKey: 'data',
}
const DELETE_TRUCK_DETENTION_API = {
  url: ({id}) => `${API_BASE_URL}/trucks/truck-payloads/${id}`,
  method: 'DELETE',
  responseDataKey: 'data',
}
const GET_POST_TRUCKS_API = {
  url: `${API_BASE_URL}/trucks/post-trucks`,
  method: 'GET',
  responseDataKey: 'data',
}
const ADD_POST_TRUCKS_API = {
  url: `${API_BASE_URL}/trucks/post-trucks`,
  method: 'POST',
  responseDataKey: 'data',
}
const EDIT_POST_TRUCKS_API = {
  url: ({id}) => `${API_BASE_URL}/trucks/post-trucks/${id}`,
  method: 'PUT',
  responseDataKey: 'data',
}
const DELETE_POST_TRUCKS_API = {
  url: ({id}) => `${API_BASE_URL}/trucks/post-trucks/${id}`,
  method: 'DELETE',
  responseDataKey: 'data',
}
const GET_PACKAGE_TYPE_API = {
  url: `${API_BASE_URL}/agri-goods/package-types`,
  method: 'GET',
  responseDataKey: 'data',
}
const ADD_PACKAGE_TYPE_API = {
  url: `${API_BASE_URL}/agri-goods/package-types`,
  method: 'POST',
  responseDataKey: 'data',
}
const EDIT_PACKAGE_TYPE_API = {
  url:`${API_BASE_URL}/agri-goods/package-types`,
  method: 'PUT',
  responseDataKey: 'data',
}
const DELETE_PACKAGE_TYPE_API = {
  url: ({id}) => `${API_BASE_URL}/agri-goods/package-types/${id}`,
  method: 'DELETE',
  responseDataKey: 'data',
}
const GET_BOOKINGS_API = {
  url: `${API_BASE_URL}/one-way-move/bookings`,
  method: 'GET',
  responseDataKey: 'data',
};

const CANCEL_BOOKING_API = {
  url: ({id}) => `${API_BASE_URL}/one-way-move/bookings/${id}/cancel/`,
  method: 'PATCH',
  responseDataKey: 'data'
}

const GET_USERS_API = {
  url: `${API_BASE_URL}/accounts/users`,
  method: 'GET',
  responseDataKey: 'data',
};

const GET_TRUCK_LIST_DROPDOWN_API = {
  url: `${API_BASE_URL}/trucks/vehicles`,
  method: 'GET',
  responseDataKey: 'data',
};

const GET_POST_TRUCK_DROPDOWN_API = {
  url: `${API_BASE_URL}/trucks/post-trucks/vehicles`,
  method: 'GET',
  responseDataKey: 'data'
}

const ASSIGN_TRUCK_API =  {
  url: ({id}) => `${API_BASE_URL}/one-way-move/bookings/${id}/vehicle/assign/`,
  method: 'PATCH',
  responseDataKey: 'data'
}

const MODIFY_PRICE_API =  {
  url: ({id}) => `${API_BASE_URL}/one-way-move/bookings/${id}/price/`,
  method: 'PATCH',
  responseDataKey: 'data'
}

const UPLOAD_DOCUMENT_STATUS_API =  {
  url: ({id,document_id}) => `${API_BASE_URL}/one-way-move/bookings/${id}/upload-documents/${document_id}/verify`,
  method: 'PATCH',
  responseDataKey: 'data'
}

const UPLOAD_DOCUMENT_API =  {
  url: ({id}) => `${API_BASE_URL}/one-way-move/bookings/${id}/upload-documents/`,
  method: 'POST',
  responseDataKey: 'data'
}
const REUPLOAD_DOCUMENT_API =  {
  url: ({id}) => `${API_BASE_URL}/one-way-move/bookings/${id}/upload-documents/`,
  method: 'PATCH',
  responseDataKey: 'data'
}

const INITIATE_PAYMENT_API = {
  url: ({id}) => `${API_BASE_URL}/one-way-move/bookings/${id}/payables/initiate/`,
  method: 'PATCH',
  responseDataKey: 'data'
}

const GENERATE_OTP_API = {
  url: ({id}) => `${API_BASE_URL}/one-way-move/bookings/${id}/delivery/otp/generate`,
  method: 'PATCH',
  responseDataKey: 'data'
}

const VERIFY_OTP_API = {
  url: ({id}) => `${API_BASE_URL}/one-way-move/bookings/${id}/delivery/otp/verify`,
  method: 'PATCH',
  responseDataKey: 'data'
}

export const UPLOAD_IMG = `${MEDIA_API_BASE_URL}uploader/`;

export const dashboard = {
  /* ****** Authentication APIs Start ****** */
  LOGIN_API,
  GET_USER_PROFILE_API,
  // LOGOUT_API,
  /* ******  Authentication APIs End ****** */

/* ****** One Way APIs Start ****** */

/* ****** Lanes Start ****** */
  GET_LANES_API,
  ADD_LANES_API,
  EDIT_LANES_API,
  DELETE_LANES_API,
  GET_CITIES_API,
/* ****** Lanes End ****** */

/* ****** Truck Start ****** */
  GET_TRUCK_LIST_API,
  ADD_TRUCK_API,
  EDIT_TRUCK_API,
  DELETE_TRUCK_API,
  GET_TRUCK_LIST_DROPDOWN_API,
/* ****** Truck End ****** */
  
/* ****** Truck Detention Start ****** */
  GET_TRUCK_DETENTION_API,
  ADD_TRUCK_DETENTION_API,
  EDIT_TRUCK_DETENTION_API,
  DELETE_TRUCK_DETENTION_API,
/* ****** Truck Detention End ****** */

/* ****** Post Truck Start ****** */
  GET_POST_TRUCKS_API,
  ADD_POST_TRUCKS_API,
  EDIT_POST_TRUCKS_API,
  DELETE_POST_TRUCKS_API,
  GET_POST_TRUCK_DROPDOWN_API,
/* ****** Post Truck End ****** */

/* ****** Goods Start ****** */
  GET_GOODS_LIST_API,
  ADD_GOODS_API,
  EDIT_GOODS_API,
  DELETE_GOODS_API,
  VERIFY_GOODS_API,
/* ****** Goods End ****** */

  ONE_WAY_BOOKING_API,

/* ****** Package Start ****** */
  GET_PACKAGE_TYPE_API,
  ADD_PACKAGE_TYPE_API,
  EDIT_PACKAGE_TYPE_API,
  DELETE_PACKAGE_TYPE_API,
/* ****** Package End ****** */

/* ****** Bookings Start ****** */
  GET_BOOKINGS_API,
  CANCEL_BOOKING_API,
  ASSIGN_TRUCK_API,
  MODIFY_PRICE_API,
  UPLOAD_DOCUMENT_STATUS_API,
  UPLOAD_DOCUMENT_API,
  REUPLOAD_DOCUMENT_API,
/* ****** Bookings End ****** */

/* ****** Users Start ****** */
  GET_USERS_API,
/* ****** Users End ****** */

/* ***** Payables Start ***** */
INITIATE_PAYMENT_API,
/* ***** Payables End ***** */

/* ***** OTP Start ***** */
GENERATE_OTP_API,
VERIFY_OTP_API,
/* ***** OTP End ***** */

};
