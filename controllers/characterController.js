//require axios
const axios = require("axios");

//set base URL: "https://anapioficeandfire.com/api"
const gotBaseURL = "https://anapioficeandfire.com/api";

const getCharacters = async (req, res) = {
  try {
    const response = await axios.get(
      `${gotBaseURL}/characters?page=1&pageSize=20`
      )
  //returns 20 characters
  const character = response.data;
  res.status(200).json(characters)
  };
  catch (err) {
  console.log(err);
  //how do we send a 500 error with a "Server Error" message?
  res.status(500).json({ error: "Server Error" });
}
};
//Get a single character by name
//GET /api/characters/:name
const getCharacterByName = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`${gotBaseURL}/characters?name=${name}`);
    const character = response.data;
    //handle the case in which there is no character that has the specified name
    if (!character.length) {
      res.status(400).send({ message: "Character not found" });
    }
    res.status(200).json(character);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error." });
  }};

//Get character titles by name
//route GET /api/character/titles/:name
const getCharacterTitles = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`${gotBaseURL}/characters?name=${rq.params.name}`);
    const character = response.data[0];
    //handle the case in which there is no character that has the specified name
    if (!character.length) {
      res.status(400).send({ message: "Character not found" });
    }
    res.status(200).json(character.titles);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error." });
  }
};
  
//Get characters by page number
//GET /api/characters/:page

const getCharactersByPage = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`${gotBaseURL}/characters?name=${rq.params.page}&pageSize=10`);
    const character = response.data;
    //handle the case in which there is no character that has the specified name
    if (!character.length) {
      res.status(400).send({ message: "Character not found" });
    }
    res.status(200).json(character.titles);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error." });
  }
};

//export controller funcs
module.exports = {
  getCharacters,
  getCharacterByName,
  getAllegiancesByCharacterName,
  getCharactersByPage,
};


