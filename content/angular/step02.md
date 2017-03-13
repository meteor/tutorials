{{#template name="angular-step02"}}
# Defining views with templates

To use Angular in our app, we first need to remove the default UI package of Meteor, called `Blaze`.

We remove it by running:

    meteor remove blaze-html-templates

Now we need to replace it with UI package for angular:

    meteor add angular-templates

To start working with [angular-meteor](http://angular-meteor.com/), let's add some NPM packages.

    meteor npm install --save angular angular-meteor

To start working on our todos list app, let's replace the code of the default starter app with the code below. Then we'll talk about what it does.

{{> DiffBox tutorialName="simple-todos-angular" step="2.2"}}

{{> DiffBox tutorialName="simple-todos-angular" step="2.3"}}

Let's create a template for todosList component.

{{> DiffBox tutorialName="simple-todos-angular" step="2.4"}}

Add some functionality:

{{> DiffBox tutorialName="simple-todos-angular" step="2.5"}}

We can now implement it into the application.

First, we have to put component into a template:

{{> DiffBox tutorialName="simple-todos-angular" step="2.6"}}

Then add module to the application:

{{> DiffBox tutorialName="simple-todos-angular" step="2.7"}}

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

In the next step, we will see how we can use the $meteor service to bind our scope data to a database collection.

{{> DiffBox tutorialName="simple-todos-angular" step="2.8"}}

{{/template}}
