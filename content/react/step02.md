{{#template name="react-step02"}}
# Defining views with React components

To start working with React as our view library, let's add some NPM packages which will allow us to get started with React.

Open a new terminal in the same directory as your running app, and type:

```sh
meteor npm install --save react react-dom
```

> Note: `meteor npm` supports the same features as `npm`, though the difference can be important.  Consult the [`meteor npm` documentation](https://docs.meteor.com/commandline.html#meteornpm) for more information.

### Replace the starter code

To get started, let's replace the code of the default starter app. Then we'll talk about what it does.

First, replace the content of the initial HTML file:

{{> DiffBox tutorialName="simple-todos-react" step="2.2"}}

Second, **delete `client/main.js`** and create this file:

{{> DiffBox tutorialName="simple-todos-react" step="2.3"}}

Now we need to create a new directory called `imports`, a specially-named directory which will behave differently than other directories in the project.  Files outside the `imports` directory will be loaded automatically when the Meteor server starts, while files inside the `imports` directory will only load when an `import` statement is used to load them.

After creating the `imports` directory, we will create two new files inside it:

{{> DiffBox tutorialName="simple-todos-react" step="2.4"}}

{{> DiffBox tutorialName="simple-todos-react" step="2.5"}}

We just added three things to our app:

1. An `App` React component
2. A `Task` React component
3. Some initialization code (in our `client/main.jsx` client JavaScript entrypoint), in a `Meteor.startup` block, which knows how to call code when the page is loaded and ready. This code loads the other components and renders them into the `#render-target` html element.

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

Meteor parses all of the HTML files in your app folder and identifies three top-level tags: **&lt;head>**, **&lt;body>**, and **&lt;template>**.

Everything inside any &lt;head> tags is added to the `head` section of the HTML sent to the client, and everything inside &lt;body> tags is added to the `body` section, just like in a regular HTML file.

Everything inside &lt;template> tags is compiled into Meteor _templates_, which can be included inside HTML with `{{dstache}}> templateName}}` or referenced in your JavaScript with `Template.templateName`. In this tutorial, we won't be using this feature of Meteor because we will be defining all of our view components with React.

### Define view components with React

In React, view components are subclasses of `React.Component` (which we import with `import { Component } from 'react';`). Your component can have any methods you like, but there are several methods such as `render` that have special functions. Components can also receive data from their parents through attributes called `props`. We'll go over some of the more common features of React in this tutorial; you can also check out [Facebook's React tutorial](https://facebook.github.io/react/docs/tutorial.html).

### Return markup from the render method with JSX

The most important method in every React component is `render()`, which is called by React to get a description of the HTML that this component should display. The HTML content is written using a JavaScript extension called JSX, which kind of looks like writing HTML inside your JavaScript. You can see some obvious differences already: in JSX, you use the `className` attribute instead of `class`. An important thing to know about JSX is that it isn't a templating language like Spacebars or Angular - it actually compiles directly to regular JavaScript. Read more about JSX [in the React docs](https://facebook.github.io/react/docs/jsx-in-depth.html).

JSX is supported by the `ecmascript` Atmosphere package, which is included in all new Meteor apps by default.

{{> DiffBox tutorialName="simple-todos-react" step="2.6"}}

Now that you've added the CSS, the app should look a lot nicer. Check in your browser to see that the new styles have loaded.

{{/template}}
