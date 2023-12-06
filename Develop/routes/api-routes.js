const router = require('express').Router();
const { v4: uuid4} = require("uuid");
const fs = require('fs').promises; // Import the promise-based methods

router.get("/api/notes", async (req, res) => {
    try {
        const data = await fs.readFile("./Develop/db/db.json", "utf8");
        const dbJSON = JSON.parse(data);
        res.json(dbJSON);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while retrieving the notes.");
    }
});


// Post function to add new notes to db.json
router.post("/api/notes", async (req, res) => {
    try {
        const data = await fs.readFile("./Develop/db/db.json", "utf8");
        const dbJSON = JSON.parse(data);
        const newFeedback = {
            title: req.body.title,
            text: req.body.text,
            id: uuid4(),
        };
        dbJSON.push(newFeedback);
        await fs.writeFile("./Develop/db/db.json", JSON.stringify(dbJSON));
        res.json(dbJSON);
    } catch (error) {
        // Log the error and send a 500 error response to the client
        console.error(error);
        res.status(500).send("An error occurred while saving the note.");
    }
});

//used for deleting notes
router.delete("/api/notes/:id", async (req, res) => {
    try {
        const data = await fs.readFile("./Develop/db/db.json", "utf8");
        const dataJSON = JSON.parse(data);
        const newDataJSON = dataJSON.filter((note) => note.id !== req.params.id);
        await fs.writeFile("./Develop/db/db.json", JSON.stringify(newDataJSON));
        res.json("Note deleted.");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while deleting the note.");
    }
});

module.exports = router;

