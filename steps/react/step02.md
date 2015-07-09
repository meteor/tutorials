{{#template name="react-step02"}}
# Defining views with React components

To start working with React as our view library, let's add the `react` package, which includes everything you need to get started using React in Meteor: the React library itself, automatic compilation of `.jsx` files, and a `ReactMeteorData` mixin for loading data.

```sh
meteor add react
```

### Replace the starter code

To get started, let's replace the code of the default starter app. Then we'll talk about what it does.

First, replace the content of the initial HTML file:

```html
<!-- replace simple-todos-react.html with this HTML -->
<head>
  <title>Todo List</title>
</head>

<body>
  <div id="app"></div>
</body>
```

Second, delete `simple-todos-react.js` and create a new file called `simple-todos-react.jsx`:

```js
// simple-todos-react.jsx
App = React.createClass({
  getTasks() {
    return [
      { _id: 1, text: "This is task 1" },
      { _id: 2, text: "This is task 2" },
      { _id: 3, text: "This is task 3" }
    ];
  },
  renderTasks() {
    return this.getTasks().map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});

Task = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
})

if (Meteor.isClient) {
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById("app"));
  });
}
```

### Check the result

In our browser, the app should now look much like this:

> #### Todo List
> - This is task 1
> - This is task 2
> - This is task 3

If your app doesn't look like this, use the GitHub links at the bottom of the page to see what each file is supposed to contain. Now let's find out what all these bits of code are doing!

### HTML files define static content

Meteor parses all of the HTML files in your app folder and identifies three top-level tags: **&lt;head>**, **&lt;body>**, and **&lt;template>**.

Everything inside any &lt;head> tags is added to the `head` section of the HTML sent to the client, and everything inside &lt;body> tags is added to the `body` section, just like in a regular HTML file.

Everything inside &lt;template> tags is compiled into Meteor _templates_, which can be included inside HTML with `{{dstache}}> templateName}}` or referenced in your JavaScript with `Template.templateName`. In this tutorial, we won't be using this feature of Meteor because we will be defining all of our view components with React.

### Define view components with React

In React, view components are classes defined with `React.createClass`. Your component can have any methods you like, but there are several methods such as `render` that have special functions. Components can also receive data from their parents through attributes called `props`. We'll go over some of the more common features of React in this tutorial; you can also check out [Facebook's React tutorial](https://facebook.github.io/react/docs/tutorial.html).

### Return markup from the render method with JSX

The most important method in every React component is `render()`, which is called by React to get a description of the HTML that this component should display. The HTML content is written using a JavaScript extension called JSX, which kind of looks like writing HTML inside your JavaScript. You can see some obvious differences already: in JSX, you use the `className` attribute instead of `class`. An important thing to know about JSX is that it isn't a templating language like Spacebars or Angular - it actually compiles directly to regular JavaScript. Read more about JSX [in the React docs](https://facebook.github.io/react/docs/jsx-in-depth.html).

### JSX files can use ES2015 features

If you haven't tried next-generation JavaScript features yet, some of the syntax in the code snippet might look weird. This is because `.jsx` files compiled with the `react` package also include support for some commonly used features of ES2015, the next version of JavaScript. Some of these features include:

1. Arrow functions: `(arg) => {return result;}`
2. Shorthand for methods: `render() { ... }`
3. `const` and `let` instead of `var`

Read more about these features here: XXX

{{> addingCSS}}

{{/template}}
