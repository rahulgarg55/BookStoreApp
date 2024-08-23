import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();   // to create a new router object,

router.get("/", getBook);

export default router;

//Using express.Router() helps in modularizing your Express application by creating separate router modules for different sets of routes. This improves the organization and maintainability of your code by allowing you to manage and mount routes in a structured way.