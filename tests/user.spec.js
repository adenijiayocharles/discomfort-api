const supertest = require("supertest");
const faker = require("faker");
const app = require("../app");
const sequelize = require("../connection/db");

afterEach(async (done) => {
    await sequelize.close();
    done();
});
// testing account registration
describe("Testing the account sign up and log in endpoints", () => {
    //setup fake account details with the faker library
    const name = faker.name.findName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    const data = {
        name: name,
        email: email,
        password: password,
    };

    // signup route test
    test("Should sigunp for a user", async () => {
        await supertest(app).post("/account/register").send(data).expect(201);
    });
});
