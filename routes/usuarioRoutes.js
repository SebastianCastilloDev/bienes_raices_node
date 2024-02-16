import express from 'express';

const router = express.Router();

// Routing
router.get('/', function(req, res) {
    res.send('Hello World');
})

router.get('/nosotros', function(req, res) {
    res.send('Nosotros');
})

export default router;