import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getUserInfoAction } from '../../pages/login/actions/loginActions';
import PrivateRoute from '../../components/privateRoute/PrivateRoute';

import Navbar from '../../components/navbar/Navbar';
import Main from '../../pages/main/Main';
import Category from '../../pages/category/Category';
import Search from '../../pages/search/Search';
import Profile from '../../pages/profile/Profile';
import CartContainer from '../../pages/cart/CartContainer';
import Book from '../../pages/book/Book';
import NotFound from '../../pages/notFound/NotFound';

import LoginContainer from '../../pages/login/LoginContainer';
import RegisterContainer from '../../pages/register/RegisterContainer';

import styles from '../../global.scss';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login, shallowEqual);

  useEffect(() => {
    dispatch(getUserInfoAction(() => {}));
  }, []);

  const DefaultContainer = () => {
    return (
      <Switch>
        <Route exact path={'/'} component={Main} />
        <Route path={'/book/:bookId'} component={Book} />
        <Route path={'/category/:categoryId/:pageId?'} component={Category} />
        <Route path={'/search/:pageId?'} component={Search} />
        <Route path={'/cart'} component={CartContainer} />
        <PrivateRoute
          path={'/profile'}
          component={Profile}
          isAuthenticated={user.isAuthenticated}
        />
        <Route exact path={'*'} component={NotFound} />
      </Switch>
    );
  };

  const AuthContainer = () => (
    <Switch>
      <Route path="/login" component={LoginContainer} />
      <Route path="/register" component={RegisterContainer} />
    </Switch>
  );

  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.container}>
        <Switch>
          <Route exact path={'/(login|register)/'} component={AuthContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

//TODO (NOW)

//ŻENI
//Book Page (/book/:bookId),
//Order Admin View (/admin/order/orderId)
//User ADmin View (/admin/user/userId)
//Book Admin View (/admin/book/bookId)
//(no admin route and page made yet, but we can work on single item view components)

//ERYK
//Cart Page (/cart)
//Order Page (sth like /cart/order)
//Payment Page (sth like /cart/order/payment or just modal?)

//DOMINIK
//ADMIN ROUTE (modify PrivateRoute or add new AdminRoute component)
//Book Preview, Order Preview (list's items)
//Pagination Component
//Main Page
//Category Page
//Search Page
//Sidebar (main)

//TODO (NEXT)
//Admin Page: users list (/admin/users), books list (/admin/books), orders list (/admin/orders)
//Admin Page: user/book/order previews (list's items)
//Admin Page: edit/add user/order/book pages (/admin/book/add, admin/book/edit etc)
//Admin Sidebar

//User Profile Page : /profile
//User Edit Profile Data Page :/profile/edit
//User Change Password Page :/user/change-password
//User Profile Sidebar

//TODO (FINALLY)
//UI STYLING
//RESPONSIVENESS

//-----DONE-------
