import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000
export const HOST = process.env.DB_HOST || "127.0.0.1"
export const PORT_DB = process.env.DB_PORT || 3306
export const USER = process.env.DB_USER || 'root'
export const PASSWORD = process.env.DB_PASSWORD || ''
export const DATABASE = process.env.DB_DATABASE || 'companydb'