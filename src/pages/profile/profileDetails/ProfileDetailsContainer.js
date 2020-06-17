import React, {useEffect, useReducer, useState} from 'react';
import styles from './styles/UserContainer.scss';
import WithLoading from 'components/withLoading/WithLoading';
import ProfileDetails from './ProfileDetails';
// import { initialState, getUserById, reducer} from '../slice/ProfileDetailsSlice';
import {Box, Button} from "@material-ui/core";
import {useHistory, useParams} from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {
  initialState,
  reducer,
  editItem,
  getItem,} from "../../admin-panel/slice/AdminPanelSingleSlice";
import {triggerGlobalAlert} from "../../../components/globalAlert/slice/globalAlertSlice";
import { PROFILE_PAGE} from "../../../global/constants/pages";
import Form from "../../../components/form/Form";
import UserProfileInputs from "./UserProfileInputs";
export let previousEnabled;

const DetailsWithLoading = WithLoading(ProfileDetails);
const EditFormWithLoading = WithLoading(Form);
const inputs = UserProfileInputs();

const ProfileDetailsContainer = (props) => {
  const [defaults, setDefaults] = useState(false);
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.login.userName, shallowEqual);

  //FETCH USER DATA FOR ENTRY INPUT VALUES
  useEffect(() => {
    getItem(dispatchLocal, 'user', userName);
  }, [id]);

  //ADD DEFAULT VALUES TO INPUTS FILE FOR FORM COMPONENT AFTER FETCHING THEM
  useEffect(() => {
    const item = state.item;
    if (item) {
      for (let input in item) {
        if ( input !== 'id' &&
             input !== 'lastShoppingCardId' &&
             input !== 'roles' &&
             input !== 'enabled') {
          inputs[input].defaultValue = item[input];
        }
        if (input === 'enabled') {
          previousEnabled = item[input];
        }
      }

      setDefaults(true);
    }
  }, [state.item]);

  //ADD STATUSES OPTIONS TO INPUTS FILE
  useEffect(() => {
    // inputs['status'].options = statusOptions;
  });

  //TRIGGER ERROR WHEN ERROR WITH REQUEST
  useEffect(() => {
    if (state.error) {
      dispatch(
          triggerGlobalAlert(
              'error',
              `Podczas edytowania danych użytkownika wystąpił błąd: ${state.error}`
          )
      );
    }
  }, [state.error]);

  //FUNCTION TRIGGERING IF EDIT REQUEST WAS SUCCESFUL
  const onSuccess = () => {
    dispatch(
        triggerGlobalAlert('success', 'Dane użytkownika zostały edytowane pomyślnie!')
    );
    history.push(`${PROFILE_PAGE}/edit-data`);
  };

  const onEditUser = (userData) => {
    userData['enabled'] = previousEnabled;
    editItem(dispatchLocal, 'user', userName, userData, onSuccess);
  };

  return (
      <Box maxWidth={500}>
        <EditFormWithLoading
            isLoading={state.isLoading || !defaults}
            error={state.error}
            title={"Edytuj dane profilowe"}
            onSubmit={onEditUser}
            submitButtonText='Zapisz'
            isMakingRequest={state.isEditing}
            inputs={inputs}
        />
      </Box>
  );
};
export default ProfileDetailsContainer;
