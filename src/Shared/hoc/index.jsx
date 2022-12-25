/* eslint-disable no-unused-vars */
import {
  HOC as HocConfigure,
  commonConstants,
  // store,
  newObject,
} from "react-boilerplate-redux-saga-hoc"
import { dashboard as DASHBOARD_API_END_POINTS } from "./apiEndPoints"
import axiosInterceptors from "./axios"
export const { CALL, ON_SUCCESS, ON_ERROR, ON_UNMOUNT } = commonConstants
const reducer = ({
  constants,
  successData,
  restSuccessData,
  payload,
  query,
  state,
  params,
  restPayload,
  loadingStatus,
  statusCode,
  type,
  newState,
  method,
  reset,
  statusMessage,
  errorData,
  restErrorData,
  resetState,
  initialState,
  commonHandler,
  commmonErrorHandler,
  defaultReducerHandler,
}) => {
  switch (type) {
    default:
      return defaultReducerHandler()
  }
}
const HOC = HocConfigure({
  handlers: [],
  useHocHook: true,
  isReactBoilerplate: false,
})

const useDashboardHoc = HOC({
  initialState: {
    isLoggedIn: false,
    isFirstTime: false,
    profile: {},
  },
  dontReset: {},
  reducer,
  constantReducer: ({
    type,
    state,
    action,
    // constants,
    initialState,
    resetState,
  }) => {
    switch (type) {
      case "UPDATE_IS_FIRST_TIME":
        return {
          ...state,
          isFirstTime: action.payload.isFirstTime,
        }
      case "LOGOUT":
        return { ...resetState, ...initialState }
      default:
        return state
    }
  },
  apiEndPoints: DASHBOARD_API_END_POINTS,
  name: "Home",
  axiosInterceptors,
})

export {
  useDashboardHoc,
  axiosInterceptors as axios,
  // customerApi as customerAxios,
}
export {
  useQuery,
  Safe as safe,
  generateTimeStamp,
  useMutateReducer,
  newObject,
} from "react-boilerplate-redux-saga-hoc"

