import express from 'express';
const router = express.Router();
import getOrderRoutes from './getOrder';


router.use('/getOrderRoutes', getOrderRoutes);


export default router;
