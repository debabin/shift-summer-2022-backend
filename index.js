const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const server = express();
const port = 3000;
const rickAndMortyApiUrl = "https://rickandmortyapi.com/api";
const breakingBadApiUrl = "https://www.breakingbadapi.com/api";

const wrapFailure = (data) => ({ success: false, data });
const wrapSuccess = (data) => ({ success: true, data });
const requireAuthToken = (req, res, next) => {
  if (req.headers.authtoken) return next();
  res.status(400).json(wrapFailure({ message: "authToken is undefined" }));
};

server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get("/", (_req, res) => {
  res.json({ success: true });
});

// 🧪 rick and morty routes
server.get(
  "/api/rickAndMorty/characters",
  requireAuthToken,
  async (req, res) => {
    const { page } = req.query;
    const response = await axios.get(`${rickAndMortyApiUrl}/character/`, {
      params: { page },
    });

    res.json(wrapSuccess(response.data));
  }
);

server.get(
  "/api/rickAndMorty/characters/:characterId",
  requireAuthToken,
  async (req, res) => {
    const { characterId } = req.params;
    const response = await axios.get(
      `${rickAndMortyApiUrl}/character/${characterId}`
    );

    res.json(wrapSuccess(response.data));
  }
);

// ⚗️ breaking bad routes
server.get(
  "/api/breakingBad/characters",
  requireAuthToken,
  async (req, res) => {
    const { page } = req.query;
    const limit = 10;

    const response = await axios.get(`${breakingBadApiUrl}/characters/`, {
      params: { limit, page: page * limit },
    });

    res.json(wrapSuccess(response.data));
  }
);

server.get(
  "/api/breakingBad/characters/:characterId",
  requireAuthToken,
  async (req, res) => {
    const { characterId } = req.params;
    const response = await axios.get(
      `${breakingBadApiUrl}/characters/${characterId}`
    );

    res.json(wrapSuccess(response.data));
  }
);

// 🐵 demo create order request
server.post("/api/create/order", async (req, res) => {
  const { order } = req.body;
  if (typeof order !== "object")
    return res
      .status(400)
      .json(wrapFailure({ message: "order is not object" }));

  res.json(
    wrapSuccess({
      order: { id: Math.floor(Math.random() * 1000000000), ...order },
    })
  );
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
