
import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

import 'express-async-errors';
// import rateLimiter from 'express-rate-limit';
// import cors from 'cors';
// import helmet from 'helmet';
// import xss from 'xss';


app.set('view engine', 'ejs');
// app.set('trust proxy', 1);
// app.use(
//   rateLimiter({
//     max: 100,
//     windowMs: 15 * 60 * 1000,
//     message: 'Too many requests for this IP, please try again in an hour!'
//   })
// );
// app.use( cors() );
// app.use( helmet() );
app.use( express.static('public') );
app.use( express.json({limit: '10kb'}) );
app.use( express.urlencoded({extended: false}) );

app.get('/', (req, res) => {
  res.render('app/app',{
    title: 'AUTH-JS',
    number: (Math.floor(Math.random() * 10) + 1)
  });
});
app.get('/home', (req, res) => {
  res.render('main/main', {
      title: 'Home',
  });
});
app.get('/root', (req, res) => {

// https://www.npmjs.com/package/ejs
// https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application

  res.render('root/root', {
    title: 'ROOT',
    content: 'THIS IS THE ROOT PAGE, NOT USABLE!'
  })
})


const port = process.env.PORT || 3000;
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();