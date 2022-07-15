import User from'../../models/user.model.js';
import {} from '../../models/db.js'
import bcrypt from 'bcrypt';

export const showLoginForm = (req, res) => {
    res.render('auth/login');
}

export const login = (req, res) => {
    const { email, password } = req.body;
    
    
    if (email && password ) {
        User.findByEmail(email, (err, user) =>  {
            if (!user) {
                res.redirect('/login');
            } else {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result == true) {
                        req.session.loggedin = true;
                        console.log(req.session.loggedin)
                        req.session.user = user;
                        res.redirect('/home');
                    } else {
                        // A user with that email address does not exists
                        const conflictError = 'User credentials are not valid.';
                        res.render('auth/login', { email, password, conflictError });
                    }
                })
            }
        })
    } else {
        // A user with that email address does not exists
        const conflictError = 'User credentials are not valid.';
        res.render('auth/login', { email, password, conflictError });
    }
}

export const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) res.redirect('/500');
        res.redirect('/');
    })
}