module.exports = async () => {
    return {
        testRegex: "^.*\\.test\\.js?$",
        clearMocks: true,
        testEnvironment: "node",
    };
};