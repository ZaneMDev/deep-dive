import express from 'express';
import userRoutes from './routes/user.routes';

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

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`🟢 Server is running on http://localhost:${PORT}`);
});
