{{#template name="svelte-step08"}}

# Adding user accounts

Meteor comes with an accounts system and a drop-in login user interface that lets you add multi-user functionality to your app in minutes.

> Currently, this UI component uses Blaze, Meteor's default UI engine.

To make use of the accounts system and UI, we need to add the relevant packages. In your app directory, run the following command:

```bash
meteor add accounts-ui accounts-password
```

### Wrapping a Blaze component in Svelte

To use the login Blaze template from the `accounts-ui` package inside of a Svelte component, we need to first add the `svelte:blaze-integration` Meteor package:

```sh
meteor add svelte:blaze-integration
```

Now we can include the `loginButtons` template in the `App` component:

{{> DiffBox step="8.3" tutorialName="simple-todos-svelte"}}

We will then need to add a new file to configure the accounts package `imports/startup/accounts-config.js`.

Then, add the following code to configure the accounts UI to use usernames instead of email addresses:

{{> DiffBox step="8.4" tutorialName="simple-todos-svelte"}}

We also need to import that configuration file into our client side entrypoint:

{{> DiffBox step="8.5" tutorialName="simple-todos-svelte"}}

### Adding user-related functionality

Now users can create accounts and log into your app! This is very nice, but logging in and out isn't very useful yet. Let's add two features:

1. Only display the new task input field to logged in users
2. Show which user created each task

To do this, we will add two new fields to the `tasks` collection:

1. `owner` - the `_id` of the user that created the task.
2. `username` - the `username` of the user that created the task. We will save the username directly in the task object so that we don't have to look up the user every time we display the task.

First, let's add some code to save these fields into the `handleSubmit` event handler:

{{> DiffBox step="8.6" tutorialName="simple-todos-svelte"}}

Modify the `App` component to get the information about the currently logged in user:

{{> DiffBox step="8.7" tutorialName="simple-todos-svelte"}}

Then, we can wrap our form in a `{#if expression}{/if}` directive to conditionally render our form only when there is a logged in user:

{{> DiffBox step="8.8" tutorialName="simple-todos-svelte"}}

Finally, add a statement to display the `username` field on each task right before the text:

{{> DiffBox step="8.9" tutorialName="simple-todos-svelte"}}

In your browser, add some tasks and notice that your username shows up. Old tasks that we added before this step won't have usernames attached; you can just delete them.

Now, users can log in and we can track which user each task belongs to. Let's look at some of the concepts we just discovered in more detail.

### Automatic accounts UI

If our app has the `accounts-ui` package, all we have to do to add a login dropdown is render the included UI component. This dropdown detects which login methods have been added to the app and displays the appropriate controls. In our case, the only enabled login method is `accounts-password`, so the dropdown displays a password field. If you are adventurous, you can add the `accounts-facebook` package to enable Facebook login in your app - the Facebook button will automatically appear in the dropdown.

### Getting information about the logged-in user

You can use `Meteor.user()` to check if a user is logged in and get information about them. For example, `Meteor.user().username` contains the logged in user's username. You can also use `Meteor.userId()` to just get the current user's `_id`.

In the next step, we will learn how to make our app more secure by doing data validation on the server.
{{/template}}
