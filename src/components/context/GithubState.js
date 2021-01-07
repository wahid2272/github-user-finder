import React, { useReducer } from "react";
import axios from 'axios';
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USER
} from './types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search User Name
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
  };

  // Get User
  // Explore a single user
  const getSingleUser = async (loginname) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${loginname}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data
    })
  };

   // Find User Repository
   const getUserRepository = async (loginname) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${loginname}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getSingleUser,
        getUserRepository
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
