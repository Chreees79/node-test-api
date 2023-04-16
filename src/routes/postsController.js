import express from "express";
import {
  createPost,
  deleteOnePost,
  getAllPosts,
  updateOnePost,
} from "../Services/posts.services.js";

export const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.put("/:id", updateOnePost);
router.delete("/:id", deleteOnePost);
