const { Op, Model, QueryTypes, DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_CONN);
const initModels = require('../models/init-models');
var models = initModels(sequelize);


class UsersControllers {
    getUsers(params) {
        return models.pegawai.findOne({
            attributes: {
                exclude: ['password']
            },
            where: {
                ...params
            },
            raw: true
        })
    }
}

module.exports = UsersControllers;