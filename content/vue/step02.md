{{#template name="vue-step02"}}

# In a hurry?

If you don't have time to follow this detailed tutorial right now, you have two options.

You can skip to the finished application explained by this tutorial, by running the following commands:

```sh
git clone git@github.com:meteor/simple-todos-vue.git
cd simple-todos-vue
meteor npm install
meteor
```

If you are an experienced Vue developer, most of this application will be self-explanatory, though you can always refer back to this tutorial to understand the details.

# Working with Vue

The rest of this tutorial will take you on a step-by-step journey through the details of using Vue with Meteor.

### Install Vue dependencies

To start working with Vue as our view library, we first need to add the relevant npm package.

Open a new terminal in the same directory as your running app, and run the following command:

```sh
meteor npm install --save vue
```

> Note: `meteor npm` supports the same features as `npm`, though the difference can be important. Consult the [`meteor npm` documentation](https://docs.meteor.com/commandline.html#meteornpm) for more information.

We also need to add the akryum:vue-component Meteor package to allow us to create files with the .vue extension, which makes it possible to create Vue components in the single file format.

```sh
meteor add akryum:vue-component
```

### Replace `blaze-html-templates` with `static-html`

By default, new Meteor applications use Blaze as their templating engine and because we created our Meteor application with the `meteor create` command the `blaze-html-templates` package was included by default. While it's possible for a Meteor application to use Blaze and Vue simultaneously and we will demonstrate how to do this later, the application we're building in this tutorial does not need the `blaze-html-templates` Meteor package.

First we will remove the `blaze-html-templates` Meteor package:

```sh
meteor remove blaze-html-templates
```

Now, to ensure `.html` files are processed as static HTML, we will add the `static-html` Meteor package:

```sh
meteor add static-html
```

The `static-html` package is not specific to Vue. It simply turns `<head>` and `<body>` fragments found in `.html` files into raw HTML that will be served from the Meteor web server. Later, your Vue application will render its components into this HTML.

Note that both `blaze-html-templates` and `static-html` are _Meteor packages_, rather than npm packages, because they need to register _compiler plugins_ that determine how `.html` files are processed. Controlling compilation is one of several key features that make Meteor packages more powerful than npm packages.

### Replace the starter code

To get started, let's replace the code of the default starter app. Then we'll talk about what it does.

First, replace the content of the **`client/main.html`** file:

{{> DiffBox tutorialName="simple-todos-vue" step="2.2"}}

Second, replace the contents of the **`client/main.js`** module:

{{> DiffBox tutorialName="simple-todos-vue" step="2.3"}}

Now we need to create a new directory called `imports`, with a directory called `ui` inside of it. There will soon be other directories besides `ui` within `imports`, but we'll start with `ui`.

> Note: in previous versions of Meteor, the `imports` directory was special because files outside the `imports` directory were loaded automatically when the application started, whereas files inside the `imports` directory were only loaded when imported using an `import` declaration or a `require` statement. As of Meteor 1.7, the entry point for both client and server JavaScript is determined by the `meteor.mainModule` section in `package.json`. In other words, as far as JavaScript code is concerned, the entire application now behaves as if it was inside an `imports` directory, so you don't need to worry as much about the `imports` directory now.

You can read more about how imports work and how to structure your code in the [Application Structure article](http://guide.meteor.com/structure.html) of the Meteor Guide.

To continue converting your app to use Vue, copy the following code into **`imports/ui/App.vue`**:

{{> DiffBox tutorialName="simple-todos-vue" step="2.4"}}

Now copy the following code into **`imports/ui/Task.vue`**:

{{> DiffBox tutorialName="simple-todos-vue" step="2.5"}}

We just added three things to our app:

1. An `App` Vue component in `imports/ui/App.vue`
2. A `Task` Vue component in `imports/ui/Task.vue`
3. Some initialization code (in our `client/main.js` client JavaScript entrypoint), in a `Meteor.startup` block, which knows how to call code when the page is loaded and ready. This code creates the root Vue instance and passes in the options object to it's contructor. This root Vue instance will be mounted using the `#app` html element.

### Define view components with Vue

In Vue, single file components are created with the .vue file extension and are comprised of three sections, the script section, the template section and the style section. Within the script section you will define a Vue instance that supports the template section. This Vue instance, like the root Vue instance created in `main.js`, is fully documented in the [Vue.js Guide](https://vuejs.org/v2/guide/instance.html)

### Check the result

In our browser, the app should **roughly** look like the following (though much less pretty):

> #### Todo List
>
> - This is task 1
> - This is task 2
> - This is task 3

If your app doesn't look like this, use the GitHub link at the top right corner of each code snippet to see the entire file, and make sure your code matches the example.

### Add CSS styles to your app

In order to make your todo list more visually appealing, copy the following code into **`client/main.css`**:

{{> DiffBox tutorialName="simple-todos-vue" step="2.6"}}

Now that you've added the CSS, the app should look a lot nicer. Check your browser to see that the new styles have loaded.

{{/template}}
