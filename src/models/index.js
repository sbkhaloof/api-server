require('dotenv').config()
const POSTGRES_URI = process.env.POSTGRES_URI ;
const { Sequelize, DataTypes } = require("sequelize");
const Food = require('./food');
const Clothes=require('./clothes');
const collection=require('./collection-class')

var sequelize = new Sequelize(POSTGRES_URI, {});
const FoodModel=Food(sequelize,DataTypes);
const ClotherModel=Clothes(sequelize,DataTypes);

const foodCollectin=new collection(FoodModel);
const clothesCollection=new collection(ClotherModel);

module.exports = {
    db: sequelize,
    food: foodCollectin,
    clothes:clothesCollection
}