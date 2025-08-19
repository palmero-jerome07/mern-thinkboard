import express from "express";
import cors from "cors"
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./configs/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

// Initialize the Express application
const app = express();
// Set the port from environment variables or default to 5001
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(
    cors({
        origin: "http://localhost:5173"
    })
)
app.use(express.json());
app.use(rateLimiter);


// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server running on port:", PORT);
    });
});


// mongodb+srv://jeromepalmero7:ypOrkjgBtkZLs9b1@cluster0.hvdluhu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0