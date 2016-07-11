import { UserAuthWrapper } from 'redux-auth-wrapper'

export const isUserAuthenticated = UserAuthWrapper({
  authSelector: state => state.user, // how to get the user state
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})
