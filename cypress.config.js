// const { defineConfig } = require("cypress");

// module.exports = {
//   e2e: {
//     specPattern: "cypress/e2e/**/*.js",
//     baseUrl: process.env.CYPRESS_baseUrl,
//     setupNodeEvents(on, config) {
//       config.env.API_URL = process.env.CYPRESS_API_URL;
//       return config;
//     }
//   }
// };

///
const { defineConfig } = require('cypress');
const { merge } = require('mochawesome-merge');
const generate = require('mochawesome-report-generator');

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.js",
    baseUrl: process.env.CYPRESS_baseUrl,
    setupNodeEvents(on, config) {
      config.env.API_URL = process.env.CYPRESS_API_URL;

      // Configure Mochawesome reporter
      on('after:run', async (results) => {
        const mergedJson = await merge({
          files: ['cypress/results/*.json'],
        });
        await generate.create(mergedJson, {
          reportDir: 'cypress/reports',
          reportFilename: 'mochawesome-report',
          inline: true,
        });
      });

      return config;
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
});
