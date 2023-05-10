import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import roles from './role'
import cart from './cart'
import product from './product'

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
router.use('/users', userRoute);
router.use('/roles', roles);
router.use('/cart', cart);
router.use('/product', product);
return router;
};

export default routes;
