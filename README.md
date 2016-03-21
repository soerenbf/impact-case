# A Best Practices Seed for AngularJS Apps 

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app. 

It has been forked from the [angular-seed] (https://github.com/angular/angular-seed) project and refactored to use the best practices/style guide written and maintained by John Papa -- [Style Guide](https://github.com/johnpapa/angular-styleguide). 

This seed wires together a basic app, two components/controllers and one service.  There is intentnially minimal build infrastructure.

## Audience 
This seed is intended for beginning Angular developers who want a simple app wired together that:

* reflects best practices for real angularjs apps
* does not overwhelm with "unecessary" tools and process

## Getting Started

To get you started you can simply clone the angular-seed-styleguided-stylguided repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed-styleguided repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-seed-styleguided

Clone the angular-seed-styleguided repository using [git][git]:

```
git clone https://github.com/angular/angular-seed-styleguided.git
cd angular-seed-styleguided
```
or

```bash
git clone --depth=1 https://github.com/angular/angular-seed-styleguided.git <your-project-name>
```

### Tool Dependencies

* `npm`, the [node package manager][npm] for build deps.
* `bower`, a [client-side code package manager][bower] for app deps.

`npm` will automatically invoke bower for you.

```
npm install
```

This will result in the following third-part modules.
* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed-styleguided changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.


## Directory Layout

```
app/                    --> all of the source files for the application
  css/app.css           --> default stylesheet
  components/           --> all app specific modules
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Testing

There are two kinds of tests in the angular-seed-styleguided application: Unit tests and End to End tests.

### Running Unit Tests

Unit tests are written in [Jasmine][jasmine], and run with [Karma Test Runner][karma]. 

* configuration file: `karma.conf.js`
* test files are next to the code and named: `*.spec.js`.

To run, use the npm script:

```
npm test
```

Karma will run and stay running watching files for changes, then rerunning the tests.

If you just want a single run then...

```
npm run test-single-run
```


### End to end testing

The angular-seed-styleguided app comes with end-to-end tests written in [Jasmine][jasmine] and run with [Protractor][protractor].
 
* the configuration is found at `protractor-conf.js`
* the end-to-end tests are found alongside the components they are testing.

**NOTE: The webserver must be running to test it start it with:**

```
npm start
```
To test, run:

```
npm run protractor
```

This will download and install the latest version of the stand-alone WebDriver tool if necessary and run protractor using the configuration file.


## Make It Yours
Once you've got everything running and tested, you should probably rename your root module from the very cheesy `myApp` to something cool like `myCoolApp`. The script bewlow will do a regex replace in the javascript and html files for you.  

Replace the `YOUR_APP_NAME` text in `package.json`. 

To preview what will be changed, run:

```
npm run replace-name-preview
```

To make the changes:

```
npm run replace-name
```



## Updating Tools and Packages

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


### Running the App during Development

```
npm start
```

This will run your app in an http server accessible at [http://localhost:8000](http://localhost:8000)

## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The angular-seed-styleguided
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.

## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
