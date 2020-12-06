const express = require('express');

export default function HelloRouter() {

    const router = express.Router();

    router.route('/').get(async (req, res) => {
        res.status(200).json({ message: 'Hello world' });
    });

    return router;
}
