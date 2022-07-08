const models = {
    User: require("./user.model"),
    Todolist: require("./todolist.model"),
    connection: require("../config/database.config").MongoDB(),
};

module.exports = models;
