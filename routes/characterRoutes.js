//import express
const express = require("express");

//access express router
const router = express.Router();

//import character controller
const getCharacters = require("../controllers/characterController.js");

//GET all characters from the API
router.get("/characters", getCharacters.getAll);
//GET a single character by name
router.get("/character/name/:name", getCharacter.ByName);
//GET character titles by name
router.get("/titles/:name", getCharacter.getTitlesByName);
//GET characters by page number
router.get("/:page", getCharacter.getByPage);

//export router (to have access to this router)
module.exports = router;
