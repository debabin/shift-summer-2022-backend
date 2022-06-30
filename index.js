const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const { wrapFailure, wrapSuccess, requireAuthToken } = require("./utils");

const server = express();
const rickAndMortyApiUrl = "https://rickandmortyapi.com/api";
const breakingBadApiUrl = "https://www.breakingbadapi.com/api";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: " Shift summer 2022 backend ☀️",
      version: "1.0.0",
      description:
        "Данный репозиторий содержит backend для выполнения индивидуальных заданий. В данном репозитории вы можете есть routes для получения персонажей из вселленных 🧪 rick and mory и ⚗️ breaking bad , a также один post запрос.",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(swaggerOptions);

server.use(cors({ credentials: true, origin: "*" }));
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

server.use("/api", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
