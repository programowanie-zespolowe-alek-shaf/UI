import React, {useEffect, useReducer, useState} from 'react';
import styles from './styles/UserContainer.scss';
import WithLoading from 'components/withLoading/WithLoading';
import ProfileDetails from './ProfileDetails';
import { initialState, getUserById, reducer} from '../slice/ProfileDetailsSlice';
import {Box, Button} from "@material-ui/core";
import {useHistory, useParams} from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {ADMIN_PAGE_USERS, PROFILE_PAGE} from "../../../global/constants/pages";

const DetailsWithLoading = WithLoading(ProfileDetails);

const ProfileLandingDetailsContainer = (props) => {
  const history = useHistory()
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const userName = useSelector((state) => state.login.userName, shallowEqual);

  useEffect(() => {
    getUserById(dispatchLocal, userName);
  }, []);

  return (
    <div className={styles.container}>
      <h3>Twoje dane</h3>

      <DetailsWithLoading
        user={state.user}
        isLoading={state.isLoading}
        isLoaded={state.isLoaded}
        error={state.error}
      />

    </div>
  );
};

export default ProfileLandingDetailsContainer;
