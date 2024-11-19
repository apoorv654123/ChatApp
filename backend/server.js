import { app, server } from "./socket/socket.js";

import authRoutes from "./routes/auth.routes.js";
import connecttoMongoDB from "./db/connecttoMongoDB.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });


server.listen(PORT, () => {
    connecttoMongoDB();
    console.log(`Server Running on port ${PORT}`)
});