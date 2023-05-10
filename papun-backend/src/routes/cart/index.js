import express from 'express';
const router = express.Router();
import getCartRoutes from './getCart';


router.use('/getCartRoutes', getCartRoutes);


export default router;
