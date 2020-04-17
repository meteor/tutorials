{{#template name="blaze-step11"}}

# Testing

Now that we've created a few features for our application, let's add a test to ensure that we don't regress and that it works the way we expect.

We'll write a test that exercises one of our Methods (which form the "write" part of our app's API), and verifies it works correctly.

To do so, we'll add a [test driver](http://guide.meteor.com/testing.html#test-driver) for the [Mocha](https://mochajs.org) JavaScript test framework, along with a test assertion library:

```bash
meteor add meteortesting:mocha
meteor npm install --save-dev chai
```

We can now run our app in "test mode" by calling out a special command and specifying to use the driver (you'll need to stop the regular app from running, or specify an alternate port with `--port XYZ`):

```bash
TEST_WATCH=1 meteor test --driver-package meteortesting:mocha
```

If you do so, you should see test results for the two tests included by default in the `tests/main.js` file

Let's add a new file in the `imports/api` folder named `tasks.test.js`. This file will be the home for all tests we make related to testing the applications's `tasks` api.  

Once the file is created we can then add a new test case to the file.

{{> DiffBox tutorialName="simple-todos" step="11.2"}}

The `imports/api/tasks.test.js` file will need to be imported in the `tests/main.js` file because the `tests/main.js` file serves as the entry point for the meteor test command

{{> DiffBox tutorialName="simple-todos" step="11.3"}}

Now that we are able to run all three of our test cases, we need to continue building the test case in the `imports/api/tasks.test.js` file. 

We first need to ensure the database is in the state we expect before our test case starts to run. To do so we can use Mocha's `beforeEach` construct.

{{> DiffBox tutorialName="simple-todos" step="11.4"}}

Here we create a single task that's associated with a random `userId` that'll be different for each test run.

Now we can have our test case call the `tasks.remove` method "as" that user and verify the task is deleted:

{{> DiffBox tutorialName="simple-todos" step="11.5"}}

Running the test command again will allw you to see all three test cases are now passing.

```bash
TEST_WATCH=1 meteor test --driver-package meteortesting:mocha
```

There's a lot more you can do in a Meteor test! You can read more about it in the Meteor Guide [article on testing](http://guide.meteor.com/testing.html).

{{/template}}
