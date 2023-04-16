import express from "express";
import { PostsModel } from "../models/postsModel.js";
import { isValidObjectId } from "mongoose";

export const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const docs = await PostsModel.find();
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
  if(!isValidObjectId(req.params.id)) {
    res.status(400).send(`ID unknown: ${req.params.id}`)
  }
  try {
    const updatePost = {
      author: req.body.author,
      message: req.body.message,
    };
    await PostsModel.findByIdAndUpdate(req.params.id, updatePost);
    res.status(200).send(updatePost);
  } catch (error) {
    console.log(error);
    res.status(500).send(`An error occured: ${error}`);
  }
});

router.delete("/:id", async (req, res) => {
  if(!isValidObjectId(req.params.id)) {
    res.status(400).send(`ID unknown: ${req.params.id}`)
  }
  try {
    await PostsModel.findByIdAndRemove(req.params.id);
    res.status(200).send("the post has been deleted successfully")
  }
  catch(error) {
    console.log(error);
    res.status(500).send(`An error occured: ${error}`)
  }
});