import { Router } from "express";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees); // request GET: http://localhost:3000/api/employees

router.get("/employees/:id", getEmployee); // request GET by ID: http://localhost:3000/api/employees/(id employee you want)

router.post("/employees", createEmployee); // request POST add employee: http://localhost:3000/api/employees (ej: {name: "horacio", salary: 2000})

router.patch("/employees/:id", updateEmployee); // request PATCH: http://localhost:3000/api/employees

router.delete("/employees/:id", deleteEmployee); // request DELETE by ID: http://localhost:3000/api/employees/(id employee you want)

export default router;
