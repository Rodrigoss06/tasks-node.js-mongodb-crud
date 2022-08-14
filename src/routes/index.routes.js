import { Router } from "express";
import {
  renderTask,
  createTask,
  About,
  editDireccion,
  editRequest,
  Delete,
  Done,
} from "../controllers/task.controllers";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/edit/:id", editDireccion);

router.post("/edit/:id", editRequest);

router.get("/delete/:id", Delete);

router.get("/toggleDone/:id", Done);

export default router;
