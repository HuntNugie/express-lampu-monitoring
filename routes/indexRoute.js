import { Router } from "express";
import { index, update } from "../controllers/lampuController.js";

const route = Router();

route.get("/lampu/all",index)
route.put("/lampu/update",update)
export default route