import {EMAIL, NAME, PASSWORD, USERNAME} from "../constants/fieldConstraints";
import request from "../../../global/connection/backend/request";
import {api} from "../../../global/connection/backend/endpoints";
import messages from "../messages/messages";

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

const signUp =(body) => {
    return request({
        url: api.signUp,
        method: 'post',
        data: body
    });
};

export const registerAction = (firstname, lastname, username, email, password, callback) => (dispatch) => {
    dispatch(registerRequest());
    const body = {
        [NAME]: firstname + " " + lastname,
        [USERNAME]: username,
        [EMAIL]: email,
        [PASSWORD]: password,
    };

    return signUp(body).then((res) => {
        dispatch(registerSuccess());
        callback();
    }).catch((error) => {
        dispatch(registerError(error.message || messages.somethingWentWrong));
    });
};