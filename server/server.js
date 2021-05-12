import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/products-routes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express()
const PORT = process.env.PORT | 5000
dotenv.config()
connectDB()

app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))