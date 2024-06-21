const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "odtvtn",
  experimentalStudio: true,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
