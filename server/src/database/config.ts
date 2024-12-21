import { Sequelize } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';
import Project from './models/Project';

const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: './challenges.sqlite',
  logging: false,
  models: [Project],
});

export default sequelize