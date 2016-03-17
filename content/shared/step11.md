{{#template name="sharedStep11"}}

# Testing

Now we've created a few features for our application, let's add a test to ensure that we don't regress and that it works the way we expect. 

We'll write a test that exercises one of our Methods (which form the "write" part of our app's API), and verifies it works correctly.

To do so, we'll add a [test driver](http://guide.meteor.com/testing.html#test-driver) for the [Mocha](https://mochajs.org) JavaScript test framework:

```bash
meteor add practicalmeteor:mocha
```

We can now run our app in "test mode" by calling out a special command and specifying to use the driver (you'll need to stop the regular app from running, or specify an alternate port with `--port XYZ`:

```bash
meteor test --driver-package practicalmeteor:mocha
```

If you do so, you should see an empty test results page in your browser window.

Let's add a simple test:

{{> DiffBox tutorialName="simple-todos" step="11.2"}}

This test runs only on the server, which allows us to easily control the database and call the method "as" any user we like without having to go through login steps. 

We use Mocha's builtin `describe`, `it`, and `beforeEach` syntax to ensure the database has a single task when the test starts, and then directly call the method's implementation as the task's owner. Then we can check that the task is deleted after the method call.

There's a lot more you can do in a Meteor test! You can read more about it in the Meteor Guide [article on testing](http://guide.meteor.com/testing.html).

{{/template}}
