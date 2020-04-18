import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const CartListComponent = lazy(() => import('./modules/carts/components/CartList'));
const ShippingComponent = lazy(() => import('./modules/shipping'));

const useStyles = makeStyles({
    root: {
        margin: '0 3%',
        height: window.innerHeight * 0.97
    }
});

export const App = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Suspense fallback="Loading...">
              <Switch>
                  <Route path="/cart">
                      <CartListComponent {...props} />
                  </Route>
                  <Route path="/shipping">
                      <ShippingComponent {...props} />
                  </Route>
              </Switch>
          </Suspense>
        </div>
  )
};
