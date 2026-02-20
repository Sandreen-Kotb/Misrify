import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDb } from './lib/connectDb.js';
import { wrapRoutes } from './routes/index.routes.js';
import bodyParser from 'body-parser'
import errorHandler from './middlewares/error.middlewares.js';
import helmet from 'helmet'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import cron from "node-cron";
import User from './models/user.model.js';
import { updateAdminAnalytics } from './controllers/adminAnalytics.controllers.js';
import { updateMerchantAnalytics } from './controllers/merchantAnalytics.controllers.js';

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
}))

// Rate limiting
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100 // limit each IP to 100 requests per windowMs
// })
// app.use(limiter)

// Compression
app.use(compression())

// CORS configuration
const corsOptions = {
    origin: process.env.CLIENT_URL || true,
    credentials: true
};
app.use(cors(corsOptions))

app.use(express.json())

app.use(bodyParser.json());

app.use(cookieParser())

// API routes
wrapRoutes(app)

// Serve static files from React app in production
if (process.env.NODE_ENV === 'production') {
    const clientDistPath = path.join(__dirname, '../client/dist');
    app.use(express.static(clientDistPath));
    
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(clientDistPath, 'index.html'));
    });
}

app.use(errorHandler);

// Daily at midnight
cron.schedule("0 0 * * *", async () => {
    await updateAdminAnalytics();
    const merchants = await User.find({ role: "merchant" }).select("_id");
    for (const merchant of merchants) {
        await updateMerchantAnalytics(merchant._id);
    }
});

app.listen(port, () => {
    console.log('Server Running in ' + process.env.NODE_ENV + 'Environment on port ' + port);
    connectDb()
})
