/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {

  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "TESTES DE API",
      "outputPath": "./logs/logs.html",
      "filename": `log.html`,
      "includeFailureMsg": true,
      "includeSuiteFailure": true,
      "inlineSource": true
    }]
  ]

};

module.exports = config