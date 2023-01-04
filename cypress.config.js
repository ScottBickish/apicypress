const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://reqres.in",
    failOnStatusCode: false
  },

  env: {
    "useremail": "admin@yourstore.com",
    "userpassword": "admin"
  }
});
