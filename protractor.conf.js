exports.config = {
  directConnect: false,    
  capabilities: {
    browserName: 'chrome'  
  },
  baseUrl: 'https://testing-angular-applications.github.io',
  specs: ['e2e/*.spec.ts'],
  onPrepare: () => {  
      let jasmineReporters = require('jasmine-reporters');
      let junitReporter = new jasmineReporters.JUnitXmlReporter({
        savePath: 'endtoend',
        consolidateAll: false
      });
      jasmine.getEnv().addReporter(junitReporter);
    require('ts-node').register({
      project: 'e2e'
    });
  },
};
