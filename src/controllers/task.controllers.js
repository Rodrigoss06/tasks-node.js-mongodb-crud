import Task from "../models/Task";

export const renderTask =async (req, res) => {
    try {
      const tasks = await Task.find().lean();
  
      res.render("index", { tasks: tasks });
    } catch (error) {
      console.log(error);
    }
  }
export const createTask = async (req, res) => {
    const task = Task(req.body);
  
    await task.save();
  
    res.redirect("/");
  }
export const About = (req, res) => {
    res.render("about");
  }
export const editDireccion = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
      res.render("edit", { task });
    } catch (error) {
      console.log(error.message);
    }
  }
export const editRequest = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  }
export const Delete = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  }
export const Done = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
  }