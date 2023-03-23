import { Dialect, Sequelize } from "sequelize";

// TODO: This should be external config
export let sequelize = new Sequelize("sqlite::memory:");

if (process.env.NODE_ENV !== "dev") {
	sequelize = new Sequelize(
		process.env.DB_NAME ?? "MISSING_DB_NAME_CONFIG",
		process.env.DB_USERNAME ?? "MISSING_DB_USERNAME_CONFIG",
		process.env.DB_PASSWORD ?? "MISSING_DB_PASSWORD_CONFIG",
		{
			host: process.env.DB_HOST ?? "MISSING_DB_HOST_CONFIG",
			dialect: (process.env.DIALECT as Dialect) ?? "postgres",
		}
	);
}
