import express from 'express';
const router = express.Router();
import getRoleRoutes from './getRole';


router.use('/getRoleRoutes', getRoleRoutes);


export default router;
