import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import ProductsSeller from "./ProductSellerMode.js";
import UserTiers from "./UserTiers.js";
const { DataTypes } = Sequelize;

const ProductPrices = db.define('productprices', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProductsSeller,
            key: 'id'
        }
    },
    tierId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserTiers,
            key: 'id'
        }
    },
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});

ProductsSeller.hasMany(ProductPrices, { foreignKey: 'productId' });
ProductPrices.belongsTo(ProductsSeller, { foreignKey: 'productId' });

export default ProductPrices;