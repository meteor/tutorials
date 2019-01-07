{{#template name="react-step11"}}

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

The first time you run this command, it should output

```bash
--------------------------------
--- RUNNING APP SERVER TESTS ---
--------------------------------
```

followed by

```bash
simple-todos-react
  ✓ package.json has correct name
  ✓ server is not client

2 passing (10ms)
```

Where are these two tests coming from? Every new Meteor application includes a **`tests/main.js`** module containing several example tests using the `describe`, `it`, and `assert` style popularized by testing frameworks like [Mocha](https://mochajs.org/#getting-started):

```js
import assert from "assert";

describe("simple-todos-react", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "simple-todos-react");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
```

This module serves as the entry point for all your application tests. If you like, you can continue adding new tests to this module, using `Meteor.isServer` and `Meteor.isClient` to determine which tests run in which environment.

However, if you would prefer to split your tests across multiple modules, you can do that too. Let's add a new test module called **`imports/api/tasks.tests.js`**:

{{> DiffBox tutorialName="simple-todos-react" step="11.2"}}

In any test we need to ensure the database is in the state we expect before beginning. We can use Mocha's `beforeEach` construct to do that easily:

{{> DiffBox tutorialName="simple-todos-react" step="11.3"}}

Here we create a single task that's associated with a random `userId` that'll be different for each test run.

Now we can write the test to call the `tasks.remove` method "as" that user and verify the task is deleted:

{{> DiffBox tutorialName="simple-todos-react" step="11.4"}}

The only remaining step is to import this new test module into the main `tests/main.js` module:

{{> DiffBox tutorialName="simple-todos-react" step="11.5"}}

If you run the test command again,

```bash
TEST_WATCH=1 meteor test --driver-package meteortesting:mocha
```

you should now see

```bash
Tasks
  methods
    ✓ can delete owned task

simple-todos-react
  ✓ package.json has correct name
  ✓ server is not client

3 passing (120ms)
```

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

There's a lot more you can do with Meteor tests! You can read more about it in the Meteor Guide [article on testing](http://guide.meteor.com/testing.html).

{{/template}}
