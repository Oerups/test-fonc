const userService = require("../services/user.service");
// const jwtService = require("../services/jwt.service");

const userController = {
    // Get all users
    findAllUsers: async (req, res, next) => {
        try {
            // const user = jwtService.getUserFromAuthorization(req.headers.authorization ?? null);
            const users = await userService.all();

            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    },

    // Get user by id
    findUserById: async (req, res, next) => {
        try {
            const user = await userService.findById(req.params.id);

            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const user = await userService.create(req.body);

            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    },

    // Update user by id
    updateUserById: async (req, res, next) => {
        try {
            const user = await userService.update(req.params.id, req.body);

            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },

    // Delete user by id
    deleteUserById: async (req, res, next) => {
        try {
            await userService.delete(req.params.id);

            res.status(201).json({
                message: "User deleted",
            });
        } catch (error) {
            next(error);
        }
    },
};

module.exports = userController;
