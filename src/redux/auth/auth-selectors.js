import { createSelector } from '@reduxjs/toolkit';

const getAuthStatus = state => state.auth.userAuthorized;
const getUser = state => state.auth.user;
const getToken = state => state.auth.token;

const getUserName = createSelector([getUser], user => {
  return user.name;
});

const authSelectors = { getAuthStatus, getUser, getToken, getUserName };

export default authSelectors;
