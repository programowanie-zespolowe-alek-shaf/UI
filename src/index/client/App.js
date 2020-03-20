import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../pages/home/Home';
import NotFound from '../../pages/notFound/NotFound';
import LoginContainer from '../../pages/login/LoginContainer';
import Navbar from '../../components/navbar/Navbar';
import styles from '../../main.scss';
import RegisterContainer from '../../pages/register/RegisterContainer';
import PrivateRoute from '../../components/privateRoute/PrivateRoute';
import { getUserInfoAction } from '../../pages/login/actions/loginActions';

const App = (props) => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.login, shallowEqual);

  useEffect( () =>  {
    dispatch(getUserInfoAction(() => {}));
  },[]);

  // TODO Add endpoints here
  const DefaultContainer = () => {
    return(
      <div className={styles.app}>
        <Navbar elements={[{ to: '/', name: 'HOME' }]}/>
        <div className={styles.container}>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <PrivateRoute isAuthenticated={user.isAuthenticated} />
            <Route exact path={'*'}  component={NotFound}/>
          </Switch>
        </div>
      </div>
    );
  };

  const AuthContainer = () => (
    <div className={styles.app}>
      <div className={styles.container}>
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/(login|register)/'} component={AuthContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </BrowserRouter>
  );
};


export default App;
