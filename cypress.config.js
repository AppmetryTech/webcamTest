const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://meet.jit.si/testWebcamCypress",
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // Mac/Linux
          /*  launchOptions.args.push(
              '--use-file-for-fake-video-capture=cypress/fixtures/my-video.y4m'
            )*/

          // Windows
          //launchOptions.args.push("--use-fake-ui-for-media-stream");
          // launchOptions.args.push("--use-fake-device-for-media-stream");
          launchOptions.args.push('--use-file-for-fake-video-capture=C:\\Users\\Appmetry\\Project\\webcamTest\\cypress\\data\\videoSample.y4m')
          launchOptions.args.push("--use-file-for-fake-audio-capture=C:\\Users\\Appmetry\\Project\\webcamTest\\cypress\\data\\sampleAudio.wav")
        }
        return launchOptions
      })
    },
    experimentalStudio: true,
    video: true,
    /* screenshotsFolder: "cypress/results/mochawesome-report/assets",
     reporter: "mochawesome",
     reporterOptions: {
       reportDir: "cypress/results",
       overwrite: false,
       html: true,
       json: true
     }*/
    screenshotsFolder: "cypress/reports/mochareports/assets",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        charts: true,
        quite: true,
        overwrite: false,
        html: true,
        json: true
      }
    },
  },
});
