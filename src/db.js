import { createPool } from "mysql2/promise";
import { HOST, PORT_DB, DATABASE, PASSWORD, USER } from "./config.js";

export const pool = createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  port: PORT_DB,
  database: DATABASE,
});
