const express = require('express');
const router = express.Router();
const UsersControllers = require('../../controllers/users');

//Sample Route
/**
 * @swagger
 * /auth:
 *   get:
 *     description: Sample GET User with Email
 *     responses:
 *       200:
 *         description: Returns one User Specified.
 *     parameters:
 *          - email: 'email@user.com'
 */
router.get('/', (req, res, next) => {
    new UsersControllers().getUsers({
        email: req.query.email
    }).then(x => {
        res.send({
            message: 'Service Auth',
            route: '/auth/',
            data: x
        })
    }).catch(err => {
        var details = {
            parent: err.parent,
            name: err.name,
            message: err.message
        }
        var error = new Error("Error pada server");
        error.status = 500;
        error.data = {
            date: new Date(),
            route: req.originalUrl,
            details: details
        };
        next(error);
    });
});
//End Sample

//exports
module.exports = router;