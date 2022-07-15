import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import session  from 'express-session';
import {} from 'dotenv/config';
import authrouter from './app/routes/auth.route.js' ;
import webrouter from './app/routes/web.route.js' ;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', 'app/views');

app.use(express.static('app/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));
app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: 'somesecret', 
  cookie: { maxAge: 60000 }}));

app.get('/', (req, res, next) => {
    res.render('index');
})

app.use('/', authrouter);
app.use('/', webrouter);


app.listen(3000, function() {
    console.log('server running: http://localhost:3000');
});
