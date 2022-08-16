import { Router } from "express";
import {
  renderTask,
  createTask,
  editDireccion,
  editRequest,
  Delete,
  Done,
} from "../controllers/task.controllers";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("tasks/:id/edit", editDireccion);

router.post("tasks/:id/edit", editRequest);

router.get("tasks/:id/delete", Delete);

router.get("tasks/:id/toggleDone", Done);

export default router;
