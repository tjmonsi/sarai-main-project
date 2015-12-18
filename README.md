# Sarai Main Project Repository

This is the main project repository for all group members who will be contributing to the Sarai Project

# What is it made of?

Currently, Sarai project is mainly built around Meteor 1.3. You can check out the framework at http://meteor.com

# Some definitions

We will be using the atomic design principle stated by Brad Frost here: http://bradfrost.com/blog/post/atomic-web-design/

Based from the link with changes:

- atom : are HTML tags, but we extended it to be a set of HTML tags to create a simple component. We need to do this because we will be using http://getmdl.io framework.
- molecule : are groups of atoms bonded together and are the smallest fundamental units of a compound.
- organism : are groups of molecules joined together to form a relatively complex, distinct section of an interface.
- template : consist mostly of groups of organisms stitched together to form pages. It’s here where we start to see the design coming together and start seeing things like layout in action. Because we will be using FlowRouter and BlazeLayout for this project, this defines the template of the page.
- page : We change this a bit from an instance of a template to the main content of the template.

# What is our CSS language?

We will be using SASS, a more powerful script than LESS. You can learn SASS here: http://sass-lang.com/guide

We have used fourseven:scss meteor package to pre-process SASS instead of MDG's less package.

# How is it structured?

The structure of Sarai is based on 'installation of modularized apps' by putting an app structure at the app folder. The whole project setup will look like this:

- app : Sarai module apps that will be installed in this project
- lib : All reusable modules that will be needed by all installed apps above
- node_modules : npm modules that will be needed by all installed apps above
- packages : Sarai meteor packages that will be needed by all installed apps above
- README.md : this file
- package.json : defines what npm modules are needed by the project
- settings.json : (not included in the repo) defines the Meteor.Settings variables that are loaded

The app folder would have several "apps" that are like a simple Meteor app with these structure. Each "app" would have a structure like this:

- [app-name]: the name of the app to be installed
  - client : anything that will be loaded in the browser
    - page : define any main content of the pages in the app
      - [page-name] : the name of the page
        - [page-name]-page.html : page template in HTML
        - [page-name]-page.js : onCreated, onRendered, helpers, events and Meteor subscriptions (via this.subscribe) of the page.
        - [page-name]-page.scss : page styles using SASS
        - [page-name]-route.js : The route specifications of the page.
        - test : any test specs for the page
  - lib : same as the lib folder structure below. The only difference is that client-side reusable components are only reusable by the pages inside the app.
  - server : anything that will be loaded in the server that is needed only by the app
    - test : any test specs for the server files

The lib folder is the core of the system and is.

- lib : anything that needs to be loaded first and on both server and browser
  - client : anything that will be loaded in the browser that needs to be loaded first
    - atom : any atomic html block that is reusable by all apps
      - [atom-name] : the name of the atom
        - [atom-name]-atom.html : atom template in HTML
        - [atom-name]-atom.js : onCreated, onRendered, helpers, and events of the atom
        - [atom-name]-atom.scss : atom styles using SASS
        - test : any test specs for the atom
    - molecule : any molecule block that is reusable by all apps
      - [molecule-name] : the name of the molecule
        - [molecule-name]-molecule.html : molecule template in HTML
        - [molecule-name]-molecule.js : onCreated, onRendered, helpers, and events of the molecule
        - [molecule-name]-molecule.scss : molecule styles using SASS
        - test : any test specs for the molecule
    - organism : any organism block that is reusable by all apps
      - [organism-name] : the name of the organism
        - [organism-name]-organism.html : organism template in HTML
        - [organism-name]-organism.js : onCreated, onRendered, helpers, and events of the organism
        - [organism-name]-organism.scss : organism styles using SASS
        - test : any test specs for the organism
    - template : define any template that is only usable in the app
      - [template-name] : the name of the template
        - [template-name]-template.html : template template in HTML
        - [template-name]-template.js : onCreated, onRendered, helpers, and events of the template
        - [template-name]-template.scss : template styles using SASS
        - test : any test specs for the template
  - collection : anything data models that is needed by all apps
    - [collection-name] : the name of the collection
      - lib 
        - [collection-name].js : define the collection
        - test : any test specs for the collection
      - server
        - fixture : define any start-up data that needs to be loaded in the collection if and when the collection doesn't have the data yet
        - methods : define the methods here
          - [collection-name]-create.js : define how to create data in collection 
          - [collection-name]-update.js : define how to update data in collection
          - [collection-name]-remove.js : define how to remove data in collection
          - test : any test specs for the collection methods
        - subscribe: define subscriptions here
          - [collection-name]-subscribe.js : define how to subscribe using ddp
          - [collection-name]-read.js : define how to return data using methods
          - test : any test specs for the collection subscription and reading methods
  - server : anything that needs to be loaded in the server first
    - test : any test specs for the server files

# ES2015

We are going to use a new version of Javascript called EcmaScript 2015 or ES2015. We need to be familiarized with the new changes on how to write using the new specs for standardized and clean code.

We can learn more from here: https://babeljs.io/docs/learn-es2015/
And we can know what are implemented in Meteor from here: https://atmospherejs.com/meteor/ecmascript

## variables

Before:

    var x = 0;
    var y = 1, z = 'state';
    var x = 2; // this re-initializes variable x and be equal to 2

    function abc() {
      var x = 3;
      // this will make the scoped version of x to be equal to 3 
      // inside the function abc.
    }

After:

    const x = 0; // this makes x to be 0 and cannot be changed.
    let y = 1; // this makes y to be 1 and can be changed into another value or type.
    
    // Some Errors:
    // const x = 1; after above will make a syntax error
    // let x = 1; after above will also make a syntax error, 
    // you cannot change the re-initialization of a variable in the same scope
    
    // let y = 2; after above will also make a syntax error, 
    // you cannot re-initialize a variable in the same scope.
    
    // x = 1; this will return a syntax error 
    // because you can't change the value of a constant variable.
    // Use let instead.
    
    // x = "string"; this will also return a syntax error.

    
    function abc() {
      let x = 3; // you can re-initialize a variable in a different scope
    }

    const array = []; 
    // use const on arrays if you are sure the variable 
    // will not change type (from array to string or number). 
    
    array.push(1);
    array.push(2);
    array.pop();
    array.push(3); // these can be done to the array above;
    
    // Some Errors
    // array = [1, 2, 3]; This will return a syntax error;

## functions

Before:

    function abc() {
      // function here
    }

    var xyz = function(a) {
      // function here
    }

    function ijk(a, b) {
      // function here
    }

    var obj = {
      fn: function() {
        // function here
      }
    }

    setTimeout(function(){
      // function here
    }, 500)  

    someCaller(someParam, function(err, result) {
      if (err) throw err;
      else call(result);
    })

After:

    const abc = () => {
      // function here
    }

    const xyz = a => {
      // function here
    }

    const ijk = (a, b) => {
      // function here
    }

    const obj = {
      fn() {
        // function here
      }
    };

    setTimeout(() => {
      // function here  
    });

    someCaller(someParam, (err, result) => {
      if (err) throw err;
      else call(result);
    });

    const add = (a = 0, ...rest) => {
      rest.forEach(n => a += n);
      return a;
    } 

    // add(); will return 0. 
    // Although 'a' needed parameter, 
    // if no a is given will default to a = 0;
    
    // add(1, 2, 3) will return 6.
    // Because the rest parameter will make 2 and 3 into [2, 3] parameter.

