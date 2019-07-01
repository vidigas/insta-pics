import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { getUserLastPics, getUserProfilePic } from './controllers/getUserMedia';

let app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/insta/media/:username', getUserLastPics );
app.get('/insta/profile/:username', getUserProfilePic );

app.listen(8082, (err) => {
  if (err) console.log(err);
  else console.log(`Server Running - Listening to port ${8082}`);
});


