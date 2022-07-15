import express from 'express'; 
import {loggedin} from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/home', loggedin, (req, res) => {
  res.render('home');
});

export default router;