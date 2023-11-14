const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./path-to-your-json-output/",
  reportPath: "./path-where-the-report-needs-to-be/",
  metadata: {
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
});
