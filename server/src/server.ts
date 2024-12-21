import express from 'express';
import router from './Routes/index.routes';
import sequelize from './database/config';
import cors from 'cors'; 
import dotenv from 'dotenv';
dotenv.config();

//conexión a db
async function connectDB() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Conexión a BD establecida con éxito.');
    }
    catch (error) {
        console.log(error);
        console.log('No se pudo conectar a la BD');
    }
}

connectDB()

const server = express();

const corsOptions = {
    origin: process.env.VITE_CLIENT,
    methods: 'GET,POST,PATCH,DELETE', 
    allowedHeaders: 'Content-Type,Authorization', 
};

server.use(cors(corsOptions));

server.use(express.json())

server.use('/', router)

export default server; 