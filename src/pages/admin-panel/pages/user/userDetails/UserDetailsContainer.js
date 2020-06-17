import React, { useEffect, useReducer } from 'react';
import styles from './styles/UserContainer.scss';
import WithLoading from 'components/withLoading/WithLoading';
// import UserDetails from './UserDetails';

import { initialState, getUserById, reducer} from '../../../../profile/slice/ProfileDetailsSlice';
import {Button} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import ProfileDetails from "../../../../profile/profileDetails/ProfileDetails";


const DetailsWithLoading = WithLoading(ProfileDetails);
const UserDetailsContainer = (props) => {
  const history = useHistory()
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  
  useEffect(() => {
    const userName = props.match.params.id;

    getUserById(dispatchLocal, userName);
  }, []);

  return (
    <div className={styles.container}>
      <h3>User Page</h3>
      <span>Dane użytkownika: {props.match.params.id}</span>

      <DetailsWithLoading
        user={state.user}
        isLoading={state.isLoading}
        isLoaded={state.isLoaded}
        error={state.error}
      />
      <Button
          onClick={() => history.goBack()}
      >
        Wróć do listy użytkowników
      </Button>
    </div>
  );
};

export default UserDetailsContainer;
