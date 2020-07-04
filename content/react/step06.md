{{#template name="react-step06"}}

## Step 6.1: Password Authentication

Meteor already comes with a basic authentication and account management system out of the box, so we only need to run a single command to enable username and password authentication:

```
meteor add accounts-password
```

> There are many more authentication methods supported. You can read more about the accounts system [here](https://docs.meteor.com/api/accounts.html).


## Step 6.2: Install BCrypt

You might get a warning saying that you are using a pure-JavaScript implementation of _bcrypt_. To fix that you can just run the following command:

```
meteor npm install --save bcrypt
```

## Step 6.3: Create User Account

Now we can create a default user for our app, if we do not find the `meteorite` username, we just create a new one.

{{> DiffBox tutorialName="simple-todos-react" step="6.3"}}

## Step 6.4: Login Form

We need to input the credentials and authenticate the user at some point, for that we need a form.

We can implement a very simple one using `useState` hooks.

{{> DiffBox tutorialName="simple-todos-react" step="6.4"}}

## Step 6.5: Require Authentication

Our app should only allow an authenticated user to access its task management features.

We can accomplish that quite easily.

{{> DiffBox tutorialName="simple-todos-react" step="6.5"}}

## Step 6.6: Basic Styling

Now we add some basic styling, so our app gets more welcoming.

{{> DiffBox tutorialName="simple-todos-react" step="6.6"}}

## Step 6.7: Task Owner

In order to better manage our tasks, every task should have an owner.

{{> DiffBox tutorialName="simple-todos-react" step="6.7"}}

## Step 6.8: Task Owner Username

We also can better organize our tasks by showing the username of the owner.

{{> DiffBox tutorialName="simple-todos-react" step="6.8"}}

{{/template}}