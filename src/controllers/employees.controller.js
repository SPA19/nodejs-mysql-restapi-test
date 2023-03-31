import { pool } from "../db.js";

//get all employees
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

//get employee by ID
export const getEmployee = async (req, res) => {

  const resulId = req.params.id;

  try {
    //throw new Error("Error inesperado")
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      resulId,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "Employee not found" });
    res.status(200).json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

//Create employeee with name and salary
export const createEmployee = async (req, res) => {

  const { name, salary } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?,?)",
      [name, salary]
    );
    res.json({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

//Delete employee by ID
export const deleteEmployee = async (req, res) => {
  
  const deleteId = req.params.id;

  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
      deleteId,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Employee not found" });
    res.sendStatus(204).json({ message: "Employee removed" });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

//Update employee with PATCH any element
export const updateEmployee = async (req, res) => {

  const { id } = req.params;
  const { name, salary } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);
    res.status(200).json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};
