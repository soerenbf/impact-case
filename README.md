# IMPACT Wine app case

## Setting up the project

**Installation can be done either through cloning the git repository or downloading the app.zip folder (navigate to file, click "view raw"), which includes the application structure needed to run the application.**

### Prerequisites

You need git to clone the angular-seed-styleguided repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone impact-case

Clone the impact-case repository using [git][git]:

```
git clone https://github.com/soerenbf/impact-case.git
cd impact-case
```

### Run the Application

```
npm start
```

This will run both npm install and bower install to fetch the required node modules and bower modules used in the project.

Now browse to the app at `http://localhost:8000`.

## Choices made (in regards to case specification)

This section serves to document the functionality implemented.

### Functionality

* Sort wines by name, rating, year (all can toggle ascending/descending sorting fashion)
* Search in the list of wines
* Add wine + rating to wines
* Detailed view displaying wine info
* If no link to api.wine.com exists, search for wines by the available parameters and display linking options
* Link wine to external API
