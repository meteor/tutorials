{{#template name="vue-step11"}}

# Testing

Now that we've created a few features for our application, let's add a test to ensure that we don't regress and that it works the way we expect.

We'll write a test that exercises one of our Methods (which form the "write" part of our app's API) and verifies that it works correctly.

### Install Meteor and npm dependencies

To do so, we'll add a [test driver](http://guide.meteor.com/testing.html#test-driver) for the [Mocha](https://mochajs.org) JavaScript test framework, along with a test assertion library:

```bash
meteor add meteortesting:mocha
meteor npm install --save-dev chai
```

### Run `meteor test` with a driver package

> **New in Meteor 1.7+**: While the `meteor test ...` command does still work as specified below, the release of Meteor 1.7 includes a new feature which allows you to specify the location of the test module in `package.json` with a property named `"testModule"` within the `"meteor"` object, which you can read more about [in the changelog](https://docs.meteor.com/changelog.html#v1720180528). In order to get the expected behavior, such that the `meteor test ...` command only uses files whose names match the format `*.test[s].*` or `*.spec[s].*`, you should either remove the line `"testModule": "tests/main.js"` from your `package.json` file, or change it to an appropriate value, before running `meteor test ...`.

We can now run our app in "test mode" by running `meteor test` and specifying a test driver package (you'll need to stop the regular app from running, or specify an alternate port with `--port XYZ`):

```bash
TEST_WATCH=1 meteor test --driver-package meteortesting:mocha
```

The first time you run this command, it should output

```bash
--------------------------------
--- RUNNING APP SERVER TESTS ---
--------------------------------
```

followed by

```bash
simple-todos-vue
  ✓ package.json has correct name
  ✓ server is not client

2 passing (10ms)
```

### Understand existing tests

Where are these two tests coming from? Every new Meteor application includes a **`tests/main.js`** module containing several example tests using the `describe`, `it`, and `assert` style popularized by testing frameworks like [Mocha](https://mochajs.org/#getting-started):

```js
import assert from "assert";

describe("simple-todos-vue", function() {
  it("package.json has correct name", async function() {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "simple-todos-vue");
  });

  if (Meteor.isClient) {
    it("client is not server", function() {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function() {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
```

This module serves as the entry point for all your application tests. If you like, you can continue adding new tests to this module, using `Meteor.isServer` and `Meteor.isClient` to determine which tests run in which environment.

### Import additional test modules

However, if you would prefer to split your tests across multiple modules, you can do that too. Let's add a new test module called **`imports/api/tasks.tests.js`**:

{{> DiffBox tutorialName="simple-todos-vue" step="11.2"}}

In any test we need to ensure the database is in the state we expect before beginning. We can use Mocha's `beforeEach` construct to do that easily:

{{> DiffBox tutorialName="simple-todos-vue" step="11.3"}}

Here we create a single task that's associated with a random `userId` that'll be different for each test run.

Now we can write the test to call the `tasks.remove` method "as" that user and verify the task is deleted:

{{> DiffBox tutorialName="simple-todos-vue" step="11.4"}}

The only remaining step is to import this new test module into the main `tests/main.js` module:

{{> DiffBox tutorialName="simple-todos-vue" step="11.5"}}

### Run `meteor test` again

If you run the test command again (or if you left it running from before)

```bash
TEST_WATCH=1 meteor test --driver-package meteortesting:mocha
```

you should now see the output from the new test module we just added:

```bash
Tasks
  methods
    ✓ can delete owned task

simple-todos-vue
  ✓ package.json has correct name
  ✓ server is not client

3 passing (120ms)
```

### Other useful testing commands

To make it easier to type this command, you may want to add a shorthand to the [`"scripts"` section](https://docs.npmjs.com/misc/scripts) of your `package.json` file.

In fact, new Meteor apps come with a few preconfigured npm scripts, which you are welcome to use or modify.

The standard `npm test` (or `meteor npm test`) command runs the following command:

```bash
meteor test --once --driver-package meteortesting:mocha
```

This command is suitable for running in a continuous integration (CI) environment such as [Travis CI](https://travis-ci.org) or [CircleCI](https://circleci.com), since it runs only your server-side tests and then exits with 0 if all the tests passed.

If you would like to run your tests while developing your application (and re-run them whenever the development server restarts), consider using `meteor npm run test-app`, which is equivalent to

```bash
TEST_WATCH=1 meteor test --full-app --driver-package meteortesting:mocha
```

This is almost the same as the earlier command, except that it also loads your application code as normal (due to `--full-app`), allowing you to interact with your app in the browser while running both client and server tests.

### Further reading

There's a lot more you can do with Meteor tests! You can read more about it in the Meteor Guide [article on testing](http://guide.meteor.com/testing.html).

{{/template}}
