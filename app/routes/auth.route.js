import {showLoginForm,login,logout} from '../controllers/auth/login.controller.js';
import {create,register,verify} from '../controllers/auth/register.controller.js';
import {loggedin,isAuth} from '../middlewares/auth.middleware.js';
import {showForgotForm,sendResetLinkEmail,showResetForm
  ,reset} from '../controllers/auth/forgotPassword.controller.js';
import express from 'express';
const router = express.Router()

router.get('/login', isAuth, showLoginForm)
router.post('/login', login)

router.get('/register', isAuth, create)
router.post('/register', register)

router.get('/logout', loggedin, logout)

router.get('/verify', verify)

router.get('/password/reset', showForgotForm)
router.post('/password/email', sendResetLinkEmail)

router.get('/password/reset/:email', showResetForm)
router.post('/password/reset', reset)

export default router;


