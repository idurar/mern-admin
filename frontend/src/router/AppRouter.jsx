import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";

const Dashboard = lazy(() =>
  import(/*webpackChunkName:'DashboardPage'*/ "@/pages/Dashboard")
);
const Admin = lazy(() =>
  import(/*webpackChunkName:'AdminPage'*/ "@/pages/Admin")
);

const Customer = lazy(() =>
  import(/*webpackChunkName:'CustomerPage'*/ "@/pages/Customer")
);

const SelectCustomer = lazy(() =>
  import(/*webpackChunkName:'SelectCustomerPage'*/ "@/pages/SelectCustomer")
);

const Lead = lazy(() => import(/*webpackChunkName:'LeadPage'*/ "@/pages/Lead"));
const Product = lazy(() =>
  import(/*webpackChunkName:'ProductPage'*/ "@/pages/Product")
);

const Logout = lazy(() =>
  import(/*webpackChunkName:'LogoutPage'*/ "@/pages/Logout")
);
const NotFound = lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "@/pages/NotFound")
);

export default function AppRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <PrivateRoute path="/" component={Dashboard} exact />
          <PrivateRoute component={Customer} path="/customer" exact />
          <PrivateRoute
            component={SelectCustomer}
            path="/selectcustomer"
            exact
          />
          <PrivateRoute component={Lead} path="/lead" exact />
          <PrivateRoute component={Product} path="/product" exact />
          <PrivateRoute component={Admin} path="/admin" exact />

          <PrivateRoute component={Logout} path="/logout" exact />
          <PublicRoute path="/login" render={() => <Redirect to="/" />} />
          <Route
            path="*"
            component={NotFound}
            render={() => <Redirect to="/notfound" />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
