{{#template name="blaze-step11"}}

# Testing

Now that we've created a few features for our application, let's add a test to ensure that we don't regress and that it works the way we expect.

We'll write a test that exercises one of our Methods (which form the "write" part of our app's API), and verifies it works correctly.

To do so, we'll add a [test driver](http://guide.meteor.com/testing.html#test-driver) for the [Mocha](https://mochajs.org) JavaScript test framework, along with a test assertion library:

```bash
meteor add meteortesting:mocha
meteor npm install --save-dev chai
```

> **New in Meteor 1.7+**: While the `meteor test ...` command does still work as specified below, the release of Meteor 1.7 includes a new feature which allows you to specify the location of the test module in `package.json` with a property named `"testModule"` within the `"meteor"` object, which you can read more about [in the changelog](https://docs.meteor.com/changelog.html#v1720180528). In order to get the expected behavior, such that the `meteor test ...` command only uses files whose names match the format `*.test[s].*` or `*.spec[s].*`, you should either remove the line `"testModule": "tests/main.js"` from your `package.json` file, or change it to an appropriate value, before running `meteor test ...`.

We can now run our app in "test mode" by calling out a special command and specifying to use the driver (you'll need to stop the regular app from running, or specify an alternate port with `--port XYZ`):

```bash
TEST_WATCH=1 meteor test --driver-package meteortesting:mocha
```

If you do so, you should see an empty test results page in your browser window.

Let's add a simple test (that doesn't do anything yet):

{{> DiffBox tutorialName="simple-todos" step="11.2"}}

In any test we need to ensure the database is in the state we expect before beginning. We can use Mocha's `beforeEach` construct to do that easily:

{{> DiffBox tutorialName="simple-todos" step="11.3"}}

Here we create a single task that's associated with a random `userId` that'll be different for each test run.

Now we can write the test to call the `tasks.remove` method "as" that user and verify the task is deleted:

{{> DiffBox tutorialName="simple-todos" step="11.4"}}

There's a lot more you can do in a Meteor test! You can read more about it in the Meteor Guide [article on testing](http://guide.meteor.com/testing.html).

{{/template}}
