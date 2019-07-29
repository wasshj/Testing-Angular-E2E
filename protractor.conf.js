/*exports.config = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox']
    }
  },
  directConnect: true,
  baseUrl: 'https://testing-angular-applications.github.io',
  
  framework: 'jasmine',
  specs: [
    './e2e/test-edit.e2e-spec.ts'
  ],
  onPrepare: () => {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  useAllAngular2AppRoots: true
};*/

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'e2e/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: (process.env.IS_CIRCLE ? ['--headless'] : [])
    }
  },
  directConnect: !process.env.IS_JENKINS,
  baseUrl: 'https://testing-angular-applications.github.io',

  // Jasmine
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare: function(){
        require('jasmine-reporters');
        var capsPromise = browser.getCapabilities();
        capsPromise.then(function(caps){
            var browserName = caps.caps_.browserName.toUpperCase();
            var browserVersion = caps.caps_.version;
            var prePendStr = browserName + "-" + browserVersion + "-";
            jasmine.getEnv().addReporter(new
jasmine.JUnitXmlReporter("protractor_output", true, true,prePendStr));
        });
 }
};
