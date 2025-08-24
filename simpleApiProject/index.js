import express from "express"
import { startups } from "./data.js";
import { apiRouter } from "./routes/apiRoute.js";

const app = express();


app.use('/api', apiRouter);
app.use((req, res) => {
    return res.status(404).json({
        message: `Endpoint is not found`
    })
})

const PORT = 9000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})