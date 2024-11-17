const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: "https://front.serverest.dev",
    testIsolation: true,
    cacheAcrossSpecs: true
  },
  
});