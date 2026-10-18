import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (_req, res) => {
    res.json({
        status: 'success',
        message: 'Backend API is running smoothly',
        environment: 'development',
        timestamp: new Date().toISOString(),
    });
});

app.listen(PORT, () => {
    console.log(`🟢 Server is running on http://localhost:${PORT}`);
});
