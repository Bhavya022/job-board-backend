import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../config/database"; 

class Job extends Model {}

Job.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Job",
    tableName: "jobs",
    timestamps: true,
  }
);

export default Job;
