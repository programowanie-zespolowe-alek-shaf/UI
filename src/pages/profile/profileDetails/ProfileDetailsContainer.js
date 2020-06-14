import React, { useEffect, useReducer } from 'react';
import styles from './styles/UserContainer.scss';
import WithLoading from 'components/withLoading/WithLoading';
import ProfileDetails from './ProfileDetails';
import { initialState, getUserById, reducer} from '../slice/ProfileDetailsSlice';
import {Button} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getUserInfoAction} from "../../login/actions/loginActions";


const DetailsWithLoading = WithLoading(ProfileDetails);
const ProfileDetailsContainer = (props) => {
  const history = useHistory()
  const dispatch = useDispatch();
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const userName = useSelector((state) => state.login.userName, shallowEqual);

  useEffect(() => {
    getUserById(dispatchLocal, userName);
  }, []);

  return (
    <div className={styles.container}>
      <h3>User Page</h3>
      <span>Id użytkownika</span>

      <DetailsWithLoading
        user={state.user}
        isLoading={state.isLoading}
        isLoaded={state.isLoaded}
        error={state.error}
      />

    </div>
  );
};

export default ProfileDetailsContainer;
