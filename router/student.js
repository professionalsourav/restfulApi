const express = require("express");
const router = new express.Router();

router.get("/sourav", (req,res) => {
    res.send("hello whatsup");
});

module.exports = router;