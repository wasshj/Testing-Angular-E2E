const { SpecReporter } = require('jasmine-spec-reporter');
const { JUnitXmlReporter } = require('jasmine-reporters');

exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./e2e/**/*.e2e-spec.ts'],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: false,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://testing-angular-applications.github.io',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.json'
    });

    const specReporter = new SpecReporter({
      spec: { displayStacktrace: true }
    });
    jasmine.getEnv().addReporter(specReporter);

    const junitReporter = new JUnitXmlReporter({
      savePath: './',
      consolidateAll: false
    });
    jasmine.getEnv().addReporter(junitReporter);
  }
};
