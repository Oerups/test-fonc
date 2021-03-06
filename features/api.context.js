const {
    Before,
    Given,
    When,
    Then,
    After,
    AfterAll,
    BeforeAll,
} = require("@cucumber/cucumber");
const request = require("supertest");
const { expect } = require("expect");
const FixtureManager = require("../fixtures/FixtureManager");
const ReferenceManager = require("../fixtures/ReferenceManager");
const db = require("../src/models");

let session;

function interpolate(text) {
    return text.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
        return ReferenceManager.getReferenceValue(key);
    });
}

Before(async function () {
    this.client = request(require("../src/app"));
    // start transaction
    session = await db.connection.startSession();
    session.startTransaction();
});

After(function () {
    session.abortTransaction();
    session.endSession();
});

AfterAll(function () {});

Given("I have a payload", function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    this.payload = dataTable.rowsHash();
});
Given("I load {string}", async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await FixtureManager.load(string, session);
});

When("I call {string} {string} with the payload", async function (method, url) {
    // Write code here that turns the phrase above into concrete actions)
    this.response = await this.client[method.toLowerCase()](
        interpolate(url)
    ).send(this.payload);
});

When("I call {string} {string}", async function (method, url) {
    // Write code here that turns the phrase above into concrete actions
    this.response = await this.client[method.toLowerCase()](
        interpolate(url)
    ).send();
});

Then("I should get a {int} response code", function (int) {
    // Then('I should get a {float} response code', function (float) {
    // Write code here that turns the phrase above into concrete actions
    expect(this.response.status).toBe(int);
});

Then(
    "The property {string} should be present in the response",
    function (string) {
        // Write code here that turns the phrase above into concrete actions
        expect(this.response.body[string]).toBeDefined();
    }
);

Then("The property {string} should be {string}", function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    expect(this.response.body[string]).toBe(interpolate(string2));
});

Then("I should get an empty array", function () {
    // Write code here that turns the phrase above into concrete actions
    expect(this.response.body).toEqual([]);
});

Then("I should get an array", function () {
    // Write code here that turns the phrase above into concrete actions
    expect(this.response.body).toEqual([{}]);
});

Given("I have no resources", function () {
    // Write code here that turns the phrase above into concrete actions
});

Given("I have a resource", function () {
    // Write code here that turns the phrase above into concrete actions
});
