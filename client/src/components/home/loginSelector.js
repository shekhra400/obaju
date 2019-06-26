import { createSelector } from 'reselect';

export const selectLoginDetails = state => {
   return state.get('login');
} 

export const selectLoginToken = () => {
  return createSelector(selectLoginDetails, loginState =>
    loginState.getIn(['token'])
  );
};

export const selectisAuthenticated = () => {
   return createSelector(selectLoginDetails, loginState =>
      loginState.get('isAuthenticated')
   );
 };