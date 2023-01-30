const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);



// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== "production") {
    router.get("/api/csrf/restore", (req, res) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        return res.json({});
    })
}

// for testing purposes
// router.get('/hello/world', function(req, res) {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   res.send('Hello World!');
// });

// Add a XSRF-TOKEN cookie
router.get("/api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
        'XSRF-Token': csrfToken
    });
});

module.exports = router;
