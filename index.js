import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import chalk from 'chalk';

dotenv.config();

//Import router middleware
import router from './routes/user-routes.js';
import blogRouter from './routes/blogRouter.js';

//Color Configuration
var portInfo = chalk.bold.blue;
var envInfo = chalk.bold.blue;
var border = chalk.bold.bgRed;



const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', router);
app.use('/api/blog', blogRouter);

//Port Configuartion
const PORT = process.env.PORT || 5000;
var ENV = (PORT == 5000) ? "DEVELOPMENT" : "STAGING";

mongoose.connect(process.env.MONGO_URI, )
        .then(() => app.listen(PORT, (req, res) => {
            console.log(border("#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*"));
            console.log(border("#*\t\t\t\t\t\t\t\t#*"));
            console.log(border("#*\t") + portInfo (`Server Running Port : ${PORT}`) + border("\t\t\t\t#*"));
            console.log(border("#*\t") + envInfo (`Server Running Environment : ${ENV}`) + border("\t\t#*"));
            console.log(border("#*\t\t\t\t\t\t\t\t#*"));            
            console.log(border("#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*"));
        }))
        .then(() =>
        console.log("Connected To database"))
        .catch((err) => console.log(err.message));

