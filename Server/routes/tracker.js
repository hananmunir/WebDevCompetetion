import express from 'express'
//funtionalities
import {bloodSugar, bloodPressure, weight} from '../controller/tracker.js'


const router = express.Router();

router.get('/bloodSugar',bloodSugar)
router.get('/bloodPressure', bloodPressure)
router.get('/weight', weight)


export default router