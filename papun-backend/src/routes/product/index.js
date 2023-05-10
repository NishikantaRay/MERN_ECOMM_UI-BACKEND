import express from 'express';
const router = express.Router();
import getProductRoutes from './getProduct';


router.use('/getProductRoutes', getProductRoutes);


export default router;
