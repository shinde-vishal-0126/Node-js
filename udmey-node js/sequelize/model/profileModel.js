const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection");



const Profile = sequelize.define('profile',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    bio:{
        type:DataTypes.STRING,
        allowNull:true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique: true
    }

},{
    freezeTableName:true,
    timestamps: true
})

module.exports ={
    Profile
}