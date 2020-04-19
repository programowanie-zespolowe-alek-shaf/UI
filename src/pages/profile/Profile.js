import React from "react";
import { Switch, Route } from "react-router-dom";

import styles from "./Profile.scss";

const Profile = () => {
  return (
    <div>
      <h3>Profile Page</h3>
      <Switch>
        <Route exact path={"/profile/orders"} component={<div>Orders</div>} />
        <Route
          exact
          path={"/profile/edit-data"}
          component={<div>Edit Profile Data</div>}
        />
        <Route
          exact
          path={"/profile/change-password"}
          component={<div>Change Password</div>}
        />
      </Switch>
    </div>
  );
};

export default Profile;
