const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")

let mongoServer

async function connectToDB() {
    try {
        // Try to connect to MongoDB Atlas first
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB Atlas")
    } catch (err) {
        console.log("MongoDB Atlas connection failed, falling back to in-memory database...")
        console.log("Error:", err.message)
        
        // Fallback to in-memory MongoDB for development
        mongoServer = await MongoMemoryServer.create()
        const mongoUri = mongoServer.getUri()
        await mongoose.connect(mongoUri)
        console.log("Connected to In-Memory Database (for development)")
    }
}

module.exports = connectToDB