import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull } from '@sequelize/core/decorators-legacy';
import { SqliteDialect } from '@sequelize/sqlite3';

const sequelize = new Sequelize({ dialect: SqliteDialect });

export class Project extends Model<InferAttributes<Project>, InferCreationAttributes<Project>> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;

  @Attribute(DataTypes.STRING)
  declare description: string | null;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare manager: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare assignedTo: string;
  
  @Attribute(DataTypes.STRING)
  @NotNull
  declare status: string;
}

export default Project;