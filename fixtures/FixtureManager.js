const db = require("../src/models");
const path = require("path");
const ReferenceManager = require("../fixtures/ReferenceManager");

const fixtureMangager = {
    load: async function (file) {
        const filePath = path.join(__dirname, file);
        const fixture = require(filePath);
        const Model = db[fixture.model];
        for (let [key, data] of Object.entries(fixture.data)) {
            ReferenceManager.setReference(key, await Model.create(data));
        }
    },
};

module.exports = fixtureMangager;
