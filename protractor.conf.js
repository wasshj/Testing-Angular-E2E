exports.config = {
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
        './e2e/*.e2e-spec.ts'
    ],
    onPrepare: () => {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    useAllAngular2AppRoots: true
};
