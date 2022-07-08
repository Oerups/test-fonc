const db = require("../config/database.config");

const fixtureMangager = {
    load: async (...paths) => {
        for (let path of paths) {
            const fixture = require(path);
            const Model = db[fixture.model];
            for (let name in fixture.data) {
                const model = await Model.create();
            }
        }
    },
};

module.exports = fixtureMangager;
