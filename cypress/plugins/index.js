const { merge } = require('mochawesome-merge');
const generate = require('mochawesome-report-generator');

module.exports = (on, config) => {
  on('after:run', async (results) => {
    const mergedJson = await merge({
      files: [
        'cypress/results/*.json'
      ]
    });
    await generate.create(mergedJson, {
      reportDir: 'cypress/reports',
      reportFilename: 'mochawesome-report',
      inline: true
    });
  });
};
