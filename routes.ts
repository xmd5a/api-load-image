import express from "express";

import { getImage } from "./image";

const imageRouter = express.Router();

/* GET image. */
imageRouter.get("/", async (req, res, next) => {
  try {
    res.json(await getImage());
  } catch (err: any) {
    console.error(`Error while getting image `, err.message);
    next(err);
  }
});

export { imageRouter };
