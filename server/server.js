import express from "express";
import cors from "cors";

const PORT = 8000
const app = express()
app.use(cors())

app.get("/api/:plant", (req, res) => {
    const plant = req.params.plant
    res.json({message: plant})
})

app.listen(PORT, () => console.log(`Server connected, port: ${PORT}`))