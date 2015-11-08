{{#template name="angular-step02"}}
# Defining views with templates

To use Angular in our app, we first need to remove the default UI package of Meteor, called `Blaze`.

We also need to remove Meteor's default ECMAScript2015 package named `ecmascript` because Angular-Meteor uses a package named `angular-babel` in order to get both ECMAScript2015 and AngularJS DI annotations.

We remove it by running:

    meteor remove blaze-html-templates
    meteor remove ecmascript

Now we need to add the [angular-meteor package](http://angular-meteor.com/) by typing the following command into the command line:

    meteor add angular


To start working on our todos list app, let's replace the code of the default starter app with the code below. Then we'll talk about what it does.

{{> DiffBox tutorialName="simple-todos-angular" step="2.2"}}

{{> DiffBox tutorialName="simple-todos-angular" step="2.3"}}

Now let's create a simple Anuglar list repeater:

{{> DiffBox tutorialName="simple-todos-angular" step="2.4"}}

In our browser, the app should look pretty much like this:

> #### Todo List
> - This is task 1
> - This is task 2
> - This is task 3

Now let's find out what all these bits of code are doing!

### HTML files in Meteor define templates

Meteor parses all of the regular .HTML files in your app folder and identifies three top-level tags: **&lt;head>**, **&lt;body>**, and **&lt;template>**.

Everything inside any &lt;head> tags is added to the `head` section of the HTML sent to the client, and everything inside &lt;body> tags is added to the `body` section, just like in a regular HTML file.

The [angular-meteor package](http://angular-meteor.com/) parses all of the `html` files in your app folder and puts them in Angular's template cache with the id of their full path.

So, for example, when a file is named `my-angular-template.html` is placed in the `client` folder, it will be available for `ng-include` or `ui-router` with the name `client/my-angular-template.html`.

### Adding logic and data to templates

All of the code in your `html` files is compiled with Angular. Angular binds the data into our templates just like any other Angular app.

In the next step, we will see how we can use the $meteor service bind our scope data to a database collection.

{{> addingCSS}}

{{/template}}
