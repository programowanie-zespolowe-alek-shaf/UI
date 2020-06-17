import React from "react";
import {Switch, Route} from "react-router-dom";

import styles from "./Profile.scss";
import {sidebar} from "../../global/constants/userProfilePanel";
import {ADMIN_PAGE, ADMIN_PAGE_ORDERS, PROFILE_PAGE} from "../../global/constants/pages";
import Sidebar from "../../components/sidebar/Sidebar";


import {default as Details} from './profileDetails/ProfileDetailsContainer';
import {default as Orders} from './profileOrders/ProfileOrdersContainer';

import {Box} from "@material-ui/core";
import useAdminPanelStyles from "../admin-panel/AdminPanelStyles";
import ProfileLandingDetailsContainer from "./profileDetails/ProfileLandingDetailsContainer";

const Profile = () => {
  const classes = useAdminPanelStyles();

  return (
    <Box className={classes.container} mb={4}>
      <Sidebar
          title={sidebar.title}
          items={sidebar.items}
          baseItemUrl={PROFILE_PAGE}

      />
      <Box className={classes.content}>
        <Switch>
          <Route exact path={`${PROFILE_PAGE}`} component={ProfileLandingDetailsContainer}/>

          <Route exact path={"/profile/orders"} component={Orders}/>
          <Route exact path={"/profile/edit-data"} component={Details}/>
          {/*<Route exact path={"/profile/change-password"} component={<div>Change Password</div>}/>*/}
        </Switch>
      </Box>
    </Box>
  );
};

export default Profile;
