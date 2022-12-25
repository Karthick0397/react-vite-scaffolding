/**
 * This is axios intercepter which intercepts all the incoming and outgoing requests
 */
 import axios from 'axios';

 // import Toast from 'react-native-root-toast';
 // import promise from 'promise';
//  import BASE_URL from '../utils/BaseUrl';
 import {setJWTToken, getJWTToken} from '../utils/token';
 import {dashboard as DASHBOARD_API_END_POINTS} from './apiEndPoints';
 // import { errorToast } from '../hooks/commonHooks/nativeToastHook';
const BASE_URL = 'http://3.111.196.126/';
 const request = axios;
 // request.defaults.withCredentials = true;
 request.interceptors.request.use(
   async config => {
     if (!config.baseURL) {
       request.defaults.baseURL = BASE_URL;
       config.baseURL = BASE_URL; // eslint-disable-line no-param-reassign
     }
     if (!config.headers.Authorization) {
       // setting token if it not present
       const token = await getJWTToken();
       if (token) {
         request.defaults.headers.common.Authorization = `Bearer ${token}`;
       }
     }
     return config;
   },
   (error) => promise.reject(error),
 );
 
 // eslint-disable-next-line arrow-body-style
 // add more urls based on api to update urls
 request.interceptors.response.use(
   response => {
     if (
       response &&
       response.config && 
       response.config.url === DASHBOARD_API_END_POINTS.LOGIN_API.url
     ) {
       const token = response.data.token['access'];
       request.defaults.headers.common.Authorization = token
         ? `Bearer ${token}`
         : '';
       try {
         if (token) setJWTToken(response.data.token['access']);
       } catch (error) {
         // console.log('error while setting token in storage', error);
       }
     }
     return response;
   },
   (error) => {
    //  if (error && error.request && error.message === 'Network Error') {
    //    Toast.hide();
    //    errorToast('Please check your internet connetion', -100);
    //  }
     // Handle your common errors here
     return Promise.reject(error);
   },
 );
 
//  export const customerApi = axios.create({});
 export default request;
 