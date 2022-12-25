import React from "react"
import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { FeRouteConfig, RoutesContainer, UiRouteConfig } from "./Shared/Routes"
// import GlobalStyle from "./global-styles"
import { useDashboardHoc, useQuery, newObject } from "./Shared/hoc"
const token = localStorage.getItem("token")
function App(props) {
  const [authorization, setAuthorization] = useState(false)
  const {
    reducerName,
    axios,
    actions: { GET_USER_PROFILE_API_CALL },
  } = useDashboardHoc()
  const { isLoggedIn } = useQuery(reducerName, {
    requiredKey: ["isLoggedIn"],
  })
  React.useEffect(() => {
    if (token) {
      // axios.defaults.headers.common.Authorization = `Bearer ${token}`
      GET_USER_PROFILE_API_CALL({
        callback: {
          updateStateCallback: ({ state, data }) =>
            newObject(state, { profile: data, isLoggedIn: true }),
          finalCallback: () => {
            setAuthorization(true)
          },
          errorCallback: () => {
            delete axios.defaults.headers.common.Authorization
          },
        },
      })
    } else {
      setAuthorization(true)
    }
  }, [])
  return (
    <div>
      {authorization ? (
        <RoutesContainer
          routes={FeRouteConfig.concat(UiRouteConfig)}
          history={history}
          isLoggedIn={isLoggedIn}
          // profile={profile}
          {...props}
        />
      ) : (
        <h1>Loading...</h1>
      )}
      {/* <GlobalStyle /> */}
    </div>
  )
}

export default App

