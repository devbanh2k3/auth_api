import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import ProductPrices from "./ProductPrices.js";
const { DataTypes } = Sequelize;

const UserTiers = db.define('usertiers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});
UserTiers.hasMany(ProductPrices, { foreignKey: 'tierId' });
ProductPrices.belongsTo(UserTiers, { foreignKey: 'tierId' });

export default UserTiers;