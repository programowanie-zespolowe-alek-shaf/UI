import request from '../../../global/connection/backend/request';
import { api } from '../../../global/connection/backend/endpoints';
import REGISTER_MESSAGES from '../messages/messages';
import { triggerGlobalAlert } from 'components/globalAlert/slice/globalAlertSlice';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

const registerError = (error) => ({
  type: REGISTER_ERROR,
  error,
});

const signUp = (body) => {
  return request({
    url: api.customersUsers,
    method: 'post',
    data: body,
  });
};

export const registerAction = (payload, callback) => (dispatch) => {
  dispatch(registerRequest());

  return signUp(payload)
    .then(() => {
      dispatch(registerSuccess());
      dispatch(triggerGlobalAlert('success', REGISTER_MESSAGES.signUpSuccess));
      callback();
    })
    .catch((error) => {
      dispatch(registerError(error.response && error.response.data.error));
    });
};
