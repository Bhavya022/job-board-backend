import { Sequelize } from "sequelize";

const sequelize = new Sequelize("bip06dof755vubrzrxac", "uek7uxj8ttatulev", "e19g9hqwDE5weISk0qZQ", {
  host: "bip06dof755vubrzrxac-mysql.services.clever-cloud.com",
  dialect: "mysql",
});

export default sequelize;
