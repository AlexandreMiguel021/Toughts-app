const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require('./db/conn')
const toughtsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')

const app = express()

// Models
const Tought = require('./models/Tought')
const User = require('./models/User')

// template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// body response
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

// session middleware
app.use(
  session({
    name: 'session',
    secret: 'my_secret',
    resave: false,
    saveUninitialized: false,
    store: new fileStore({
      logFn: function () {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000, //24hrs
      httpOnly: true,
    },
  })
)

// flash messages
app.use(flash())

// public path
app.use(express.static('public'))

// set session to res
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session
  }
  next()
})

// Routes
app.use('/', authRoutes)
app.use('/', toughtsRoutes)

conn
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch(err => console.log(err))
