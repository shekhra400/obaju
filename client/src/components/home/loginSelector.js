import { createSelector } from 'reselect';

export const selectLoginDetails = state => {
   return state.get('login');
} 

export const selectLoginToken = () => {
  return createSelector(selectLoginDetails, labelsState =>
    labelsState.getIn(['token'])
  );
};