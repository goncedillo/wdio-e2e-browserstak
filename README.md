# Testium

> The purpose of this library is to show how to implement different aproaches for e2e testing with [WebdriverIO](https://webdriver.io/) and [Browserstack](http://browserstack.com).

## Main features

- Test features with **Chrome** browser in local environment
- Test features with Chrome as **headless** browser in local environment
- Test features in Browserstack using **mobile and desktop** browsers
- Test features in Browserstack using **only mobile** browsers
- Test features in Browserstack using **only desktop** browsers
- Testing isolated features either in Browserstack or local environment
- **Organize** the builds in Browserstack by project and version

## Installation

This is not a NPM module yet, so you must follow some steps in order to integrate the library in your project.  

### Dependencies

This library uses both Browserstack and Chrome local browser to perform the tests with WebdriverIO, plus some internal dependencies:

```bash
npm i -D dotenv webdriverio @wdio/browserstack-service @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/selenium-standalone-service @wdio/spec-reporter browserstack-local chromedriver wdio-chromedriver-service wdio-reportportal-reporter
```

This project is using `serve` package only for demo purposes. You should avoid install it, just in case you don't need it in your project.

### Scaffolding

This library expects you have a folder with different WebdriverIO configurations, in addition to devices declaration. You should use the raw `e2e` folder as it is, although you can modify it as you wish.  
The folder must be in the root of your project.

Additionally, you should have a `tests` (or whatever you want name it) folder for storing your test files.

### Environment variables

- **E2E_BASE_URL**: Base url of your project to access it through the browser (**not use `http://localhost`**. Use local IP instead, because of iOS connections)
- **E2E_TEST_FOLDER**: The name of the folder in which you have your test files
- **BROWSERSTACK_USER**: Browserstack username
- **BROWSERSTACK_KEY**: Browserstack token key to connect
- **BROWSERSTACK_PROJECT_NAME**: Project name for Browserstack organization

## Working in local environment

You can launch your tests against your own Chrome app without any additional dependency in different scenarios:

##### Using Chrome app and passing all your tests

```bash
npm run e2e:local:chrome
```

##### Using Chrome app in headless mode and passing all your tests

```bash
npm run e2e:local
```

##### Using Chrome app and passing only a test file

```bash
npm run e2e:local:chrome <RELATIVE_PATH_TO_YOUR_TEST_FILE>
```

##### Using Chrome app in headless mode and passing only a test file

```bash
npm run e2e:local <RELATIVE_PATH_TO_YOUR_TEST_FILE>
```

## Working with Browserstack

In order to run your tests against Browserstack devices you have two options:

### Run against a productive server

In this case you have to set the right URL in the `E2E_BASE_URL`. That's it. The library will connect to your server from Browserstack normally.

### Run against your local server

For connecting Browserstack to your local machine, you will need to launch an additional service, in order to serve your application to Browserstack:

```bash
npm run browserstack:tunnel
```
Remember that you will need to have your application running as well.

Once you have your environment running, you have different options to launch your tests:

##### Run all your tests with all the setted devices

```bash
npm run e2e:all
```

##### Run all your tests with only setted mobile devices

```bash
npm run e2e:mobile
```

##### Run all your tests with only setted desktop devices

```bash
npm run e2e:desktop
```

##### Use only one test file

You can use all of above commands to launch your test in whichever stage. For instance:

```bash
npm run e2e:all <RELATIVE_PATH_TO_YOUR_TEST_FILE>
```

## Example Project

You can use this repository as an example project. It is fully functional.  
You will see that it is using a local server with `serve` package, running a static web server.

The library uses an unique HTML file in `src` folder, in order to serve a simple but useful page to test.  
Furthermore, you will find a couple of test files in `tests` folder with some minimalistic tests.

For running the example you need to **set all the environment variables** and run the following command:

```bash
npx serve src
```

## Roadmap

- Include **watch** mode
- Create a NPM binary package to use the library as a atomic utility

## LICENSE

This proyect [has a MIT](./LICENSE.md) license