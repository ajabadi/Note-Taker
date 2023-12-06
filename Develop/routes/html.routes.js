const router = require('express').Router();
const path = require("path");

//HTML calls
//calls home page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});
//call for notes.html
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

module.exports = router;