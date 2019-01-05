{{#template name="react-step02"}}
# In a hurry?

If you don't have time to follow this detailed tutorial right now, you have two options.

To skip to the finished application explained by this tutorial, run the following commands:

```sh
git clone git@github.com:meteor/simple-todos-react.git
cd simple-todos-react
meteor npm install
meteor
```

If you are an experienced React developer, most of this application will be self-explanatory, though you can always refer back to this tutorial to understand the details.

Alternatively, as of Meteor 1.8, you can choose React instead of Blaze when creating a new Meteor application:

```sh
meteor create --react new-react-app
cd new-react-app
meteor
```

This application is different from the todo list you would build in this tutorial, but it's another great way to get started with React quickly.

# Working with React

The rest of this tutorial will take you on a step-by-step journey through the details of using React with Meteor.

### Install React npm dependencies

To start working with React as our view library, we first need to add the relevant npm packages.

Open a new terminal in the same directory as your running app, and type:

```sh
meteor npm install --save react react-dom
```

> Note: `meteor npm` supports the same features as `npm`, though the difference can be important. Consult the [`meteor npm` documentation](https://docs.meteor.com/commandline.html#meteornpm) for more information.

### Replace `blaze-html-templates` with `static-html`

By default, new Meteor applications use Blaze as their templating engine. While it's possible for a Meteor application to use Blaze and React simultaneously, the application we're building in this tutorial does not need Blaze at all. If you created your Meteor application with `meteor create` rather than `meteor create --react`, we recommend that you remove support for Blaze and add support for static HTML templates.

To prevent processing `.html` files as Blaze templates, first remove the `blaze-html-templates` package:

```sh
meteor remove blaze-html-templates
```

Now, to ensure `.html` files are processed as static HTML, add the `static-html` package:

```sh
meteor add static-html
```

The `static-html` package is not specific to React. It simply turns `<head>` and `<body>` fragments found in `.html` files into raw HTML that will be served from the Meteor web server. Later, your React application will render its components into this HTML.

Note that both `blaze-html-templates` and `static-html` are _Meteor packages_, rather than npm packages, because they need to register _compiler plugins_ that determine how `.html` files are processed. Controlling compilation is one of several key features that make Meteor packages more powerful than npm packages.

### Replace the starter code

To get started, let's replace the code of the default starter app. Then we'll talk about what it does.

First, replace the content of the **`client/main.html`** file:

{{> DiffBox tutorialName="simple-todos-react" step="2.2"}}

Second, replace the contents of the **`client/main.js`** module:

{{> DiffBox tutorialName="simple-todos-react" step="2.3"}}

Now we need to create a new directory called `imports`, with a directory called `ui` inside of it. There will soon be other directories besides `ui` within `imports`, but we'll start with `ui`.

> Note: in previous versions of Meteor, the `imports` directory was special because files outside the `imports` directory were loaded automatically when the application started, whereas files inside the `imports` directory were only loaded when imported using an `import` declaration or a `require` statement. As of Meteor 1.7, the entry point for both client and server JavaScript is determined by the `meteor.mainModule` section in `package.json`. In other words, as far as JavaScript code is concerned, the entire application now behaves as if it was inside an `imports` directory, so you don't need to worry as much about the `imports` directory now.

To continue converting your app to use React, copy the following code into **`imports/ui/App.js`**:

{{> DiffBox tutorialName="simple-todos-react" step="2.4"}}

Now copy the following code into **`imports/ui/Task.js`**:

{{> DiffBox tutorialName="simple-todos-react" step="2.5"}}

We just added three things to our app:

1. An `App` React component in `imports/ui/App.js`
2. A `Task` React component in `imports/ui/Task.js`
3. Some initialization code (in our `client/main.js` client JavaScript entrypoint), in a `Meteor.startup` block, which knows how to call code when the page is loaded and ready. This code loads the other components and renders them into the `#render-target` html element.

You can read more about how imports work and how to structure your code in the [Application Structure article](http://guide.meteor.com/structure.html) of the Meteor Guide.

Later in the tutorial, we will refer to these components when adding or changing code.

### Check the result

In our browser, the app should **roughly** look like the following (though much less pretty):

> #### Todo List
> - This is task 1
> - This is task 2
> - This is task 3

If your app doesn't look like this, use the GitHub link at the top right corner of each code snippet to see the entire file, and make sure your code matches the example.

### HTML files define static content

Meteor parses all of the HTML files in your app folder and identifies three top-level tags: **`<head>`**, **`<body>`**, and **`<template>`**.

Everything inside any `<head>` tags is added to the `head` section of the HTML sent to the client, and everything inside `<body>` tags is added to the `body` section, just like in a regular HTML file.

> Note: if we were using the `blaze-react-templates` package, any HTML inside `<template>` tags would be compiled into Meteor _templates_, which can be included inside HTML with `{{dstache}}> templateName}}`, or referenced in your JavaScript with `Template.templateName`. In this tutorial, we won't be using this feature of Meteor because we will be processing all of our HTML with the `static-html` package and defining our view components with React.

### Define view components with React

In React, view components are subclasses of `React.Component` (which we import with `import { Component } from 'react'`). Your component can have any methods you like, but there are several methods such as `render` that have special functions. Components can also receive data from their parents through attributes called `props`. We'll go over some of the more common features of React in this tutorial; you can also check out [Facebook's React tutorial](https://facebook.github.io/react/docs/tutorial.html).

As with any React application, you can also define components as [simple functions](https://reactjs.org/docs/components-and-props.html#function-and-class-components), rather than inheriting from `React.Component`. Meteor is not opinionated about which parts of React you choose to use.

### Return markup from the render method with JSX

The most important method in every React component is `render()`, which is called by React to get a description of the HTML that this component should display. The HTML content is written using a JavaScript extension called JSX, which kind of looks like writing HTML inside your JavaScript. You can see some obvious differences already: in JSX, you use the `className` attribute instead of `class`. An important thing to know about JSX is that it isn't a templating language like Spacebars or Angular - it actually compiles directly to regular JavaScript. Read more about JSX [in the React docs](https://facebook.github.io/react/docs/jsx-in-depth.html).

JSX is supported by the `ecmascript` Meteor package, which is included in all new Meteor apps by default.

### Add CSS styles to your app

In order to make your todo list more visually appealing, copy the following code into **`client/main.css`**:

{{> DiffBox tutorialName="simple-todos-react" step="2.6"}}

Now that you've added the CSS, the app should look a lot nicer. Check your browser to see that the new styles have loaded.

{{/template}}
