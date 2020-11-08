import dotenv from 'dotenv';
import connectDB from './config/db.js';
import express from 'express';
import colors from 'colors';
import { customAlphabet } from 'nanoid';
import { notFound, errorHandler } from './middleware/ErrorMiddleware.js';
import LandingRoutes from './routes/LandingRoutes.js';
import UserRoutes from './routes/UserRoutes.js';

dotenv.config();
connectDB();

const nanoid = customAlphabet('02468ouqtyminv', 13);
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.type('json');

  res.set({
    'Content-Type': 'application/json',
    'Content-Length': '123',
    'x-powered-by': 'Deez Nuts!@$?%&#',
    'Cache-control': 'no-cache,no-store,max-age=0,must-revalidate',
    'X-XSS-Protection': '1;mode=block',
    'X-Content-Type-Options': 'nosniff',
    ETag: nanoid(),
  });

  res.setHeader('Cache-Control', 'no-cache,no-store,max-age=0,must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '-1');
  res.setHeader('X-XSS-Protection', '1;mode=block');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('keep-alive', '-1');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Content-Security-Policy', "script-src 'self'");
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('x-powered-by', 'Deez Nuts');
  res.setHeader('ETag', `${nanoid()}`);
  next();
});

app.get('/', (req, res) => {
  res.status(200).send(`API is running`);
});

app.use('/api/', LandingRoutes);
app.use('/api/users', UserRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {
  console.clear();
  console.log(
    // @ts-ignore
    colors.bold.brightGreen(
      `\n\t\tServer started in ${process.env.NODE_ENV} mode on port 5000\n`
    )
  );
});

export default app;
