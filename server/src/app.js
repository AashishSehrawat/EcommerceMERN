import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


// cors uses to give the frontend url to backend
app.use(
    cors({
        origin: process.env.ORIGIN_HOST,
        methods: "GET, PUT, DELETE, POST",
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials: true,
    })
)

// get data from form
app.use(express.json({limit: '16kb'}));

// get data from urls
app.use(express.urlencoded({extended: true, limit: '16kb'}));

// sending data to browser to store
app.use(cookieParser);

export { app }