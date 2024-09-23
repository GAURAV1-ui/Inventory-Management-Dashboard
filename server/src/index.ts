import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helment from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import dashboardRoutes from './routes/dashboardRoutes';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helment());
app.use(helment.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan('common'));
app.use(cors());

app.use('/dashboard', dashboardRoutes);
app.use('/products', productRoutes);
app.use("/users", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});