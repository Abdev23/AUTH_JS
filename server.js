
import express from 'express';
import dotenv from 'dotenv';

import route_app from './routes/route_app.js';
import route_main from './routes/route_main.js';


const app = express();
dotenv.config();

app.set( 'view engine', 'ejs' );
app.use( express.static('public') );
app.use( express.json({limit: '10kb'}) );
app.use( express.urlencoded({extended: false}) );

app.use(route_app);
app.use(route_main);
app.get('/root', (req, res) => {
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