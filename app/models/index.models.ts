import mongoose from 'mongoose'
import { DatabaseOptions } from '../../app/config/db.config'
import { Product } from './products.models'

const dbConfig : DatabaseOptions = {
    HOST: 'localhost',
    PORT: 27017,
    DB: 'crud'
}

const description = Product

const db = {mongoose,description}

db.mongoose = mongoose

export async function runDB() {
    await db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
        .then(() => {
            console.log('Successfully connect to MongoDB.')
        })
        .catch((err: unknown) => {
            console.error('Connection error', err)
            process.exit()
        })
}


