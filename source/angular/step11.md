
---
title: Testing
---

Now we've created a few features for our application, let's add a test to ensure that we don't regress and that it works the way we expect.

We'll write a test that exercises one of our Methods (which form the "write" part of our app's API), and verifies it works correctly.

To do so, we'll add a [test driver](http://guide.meteor.com/testing.html#test-driver) for the [Mocha](https://mochajs.org) JavaScript test framework:

```bash
meteor add practicalmeteor:mocha
```

We can now run our app in "test mode" by calling out a special command and specifying to use the driver (you'll need to stop the regular app from running, or specify an alternate port with `--port XYZ`):

```bash
meteor test --driver-package practicalmeteor:mocha
```

If you do so, you should see an empty test results page in your browser window.

Let's add a simple test (that doesn't do anything yet):

> TODO:INCLUDE: DiffBox tutorialName="simple-todos-angular" step="11.2"

In any test we need to ensure the database is in the state we expect before beginning. We can use Mocha's `beforeEach` construct to do that easily:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos-angular" step="11.3"

Here we create a single task that's associated with a random `userId` that'll be different for each test run.

Now we can write the test to call the `task.remove` method "as" that user and verify the task is deleted:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos-angular" step="11.4"

There's a lot more you can do in a Meteor test! You can read more about it in the Meteor Guide [article on testing](http://guide.meteor.com/testing.html).

# Testing the component

We need one thing to start writing tests of our angular component.

```bash
meteor npm install --save-dev angular-mocks
```

Let's prepare some background for tests:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos-angular" step="11.6"

Add test to check incomplete tasks count:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos-angular" step="11.7"

Now we can move to testing our controller:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos-angular" step="11.8"

As you remember, we use meteor method to insert new tasks. Let's check if it works:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos-angular" step="11.9"

It should also reseting form:

> TODO:INCLUDE: DiffBox tutorialName="simple-todos-angular" step="11.10"

