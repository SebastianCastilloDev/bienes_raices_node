import express from 'express';

const router = express.Router();

// Routing
router.route('/')
    .get(function(req, res) {
        res.json({msg: 'Hello World de tipo GET'})
    })
    .post(function(req, res) {
        res.post({msg: 'Hello World de tipo POST'})
    })

export default router; 