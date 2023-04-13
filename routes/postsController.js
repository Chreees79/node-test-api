import express from "express";
import { PostsModel } from "../models/postsModel.js";
import { ObjectId } from "mongoose";
export const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const docs = await PostsModel.find().exec();
    console.log(docs);
    res.status(200).send(docs);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while retrieving the data.");
  }
});

router.post("/", async (req, res) => {
  try {
    const newPost = new PostsModel({
      author: req.body.author,
      message: req.body.message,
    });
    await newPost.save();
    console.log(newPost);
    res.status(201).send(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).send("The post can't be created");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatePost = {
      author: req.body.author,
      message: req.body.message,
    };
    await PostsModel.findByIdAndUpdate(req.params.id, updatePost);
    res.status(200).send(updatePost);
  } catch (error) {
    console.log(error);
    res.status(400).send(`ID is unknown: ${req.params.id}`);
  }
});
