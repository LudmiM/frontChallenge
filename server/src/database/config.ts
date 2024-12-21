import { Sequelize } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';
import Project from './models/Project';

import path from 'path';
const dbPath = path.resolve(__dirname, 'challenges.sqlite');

const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: dbPath,
  logging: false,
  models: [Project],
});

export default sequelize