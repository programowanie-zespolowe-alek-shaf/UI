import React, {useEffect, useReducer} from 'react';
import WithLoading from 'components/withLoading/WithLoading';
import ProfileOrders from './ProfileOrders';
import {Button} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getUserInfoAction} from "../../login/actions/loginActions";
import {api} from "../../../global/connection/backend/endpoints";
import {ADMIN_PAGE_ORDERS} from "../../../global/constants/pages";
import itemsPerPage from "../../../global/constants/itemsPerPage";
import WithPagination from "../../../components/withPagination/WithPagination";


// const DetailsWithLoading = WithLoading(ProfileOrders);
const OrdersManagerWithPagination = WithPagination(ProfileOrders);

const ProfileOrdersContainer = (props) => {
  const history = useHistory()
  const dispatch = useDispatch();
  // const [state, dispatchLocal] = useReducer(reducer, initialState);
  const userName = useSelector((state) => state.login.userName, shallowEqual);

  const fetchBaseUrl = `${api.orders}?username=${userName}&`;
  const clientBaseUrl = `${ADMIN_PAGE_ORDERS}`;

  return (
      // <Orders items={items} onOrderDelete={onOrderDelete}/>
  <OrdersManagerWithPagination
      fetchBaseUrl={fetchBaseUrl}
      clientBaseUrl={clientBaseUrl}
      itemsPerPage={itemsPerPage.ADMIN_LIST}
  />
);
};

export default ProfileOrdersContainer;
