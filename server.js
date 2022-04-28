const express = require('express');
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
// const helpers here 

// importing sequelize conneciton 
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

//turnin on routes to use
app.use(routes);

//turns connection on to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App now listening on port ${PORT}`))
})