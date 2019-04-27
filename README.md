# Official Meteor tutorials

This repository contains the content and view code for the official Meteor tutorials at [meteor.com](https://www.meteor.com/tutorials/blaze/creating-an-app).

Feel free to submit a pull request to improve the content!

### Tutorial content

1. [Blaze tutorial](https://www.meteor.com/tutorials/blaze/creating-an-app): [`/content/blaze`](https://github.com/meteor/tutorials/tree/master/content/blaze)
2. [Angular tutorial](https://www.meteor.com/tutorials/angular/creating-an-app): [`/content/angular`](https://github.com/meteor/tutorials/tree/master/content/angular)
3. [React tutorial](https://www.meteor.com/tutorials/react/creating-an-app): [`/content/react`](https://github.com/meteor/tutorials/tree/master/content/react)
4. [Vue tutorial](https://www.meteor.com/tutorials/vue/creating-an-app): [`/content/vue`](https://github.com/meteor/tutorials/tree/master/content/vue)

### Tutorial step-by-step repositories

We also maintain all of the tutorials as step-by-step git repositories here:

1. [Blaze](https://github.com/meteor/simple-todos)
2. [Angular](https://github.com/meteor/simple-todos-angular)
3. [React](https://github.com/meteor/simple-todos-react)
4. [Vue](https://github.com/meteor/simple-todos-vue)

### Tutorial viewer

If you are editing the tutorials, use this simple app to view them: https://github.com/meteor/tutorial-viewer

## Tutorial workflow

### Editing the prose

Just edit the markdown files in `/content/`.

### Editing code snippets

The code snippets are generated from the step-by-step git repositories which are git submodules in `/repos`. Each code snippet is its own commit. Commit messages follow the following format:

```
Step 3.1: Add some feature
```

You might also want to make sure that all of your files end with a newline so that you don't get an annoying "No newline at end of file" diff.

After using `git rebase -i --root` to massage the repository into the desired state, run the script to update the generated files:

```sh
./scripts/process-repo.rb blaze
```

The commit with this message can then be included in the content with the following code snippet:

```html
{{> DiffBox step="3.1" tutorialName="simple-todos"}}
```

You should replace `simple-todos` with the correct tutorial name (defined by calling `DiffBox.registerTutorial`).

You're done! Make sure to commit the changes to all of the generated files.

## Repository layout

This repository is a Meteor package; it's currently not published, but you can clone it and use it as a local package in an app.

The different parts of the repository have quite different responsibilities, but they are somewhat tightly coupled so it doesn't make sense to split them into separate packages at this point.

3. `/content/` The actual tutorial prose content, in Markdown format.
4. `/generated/` (don't edit manually) This directory contains Git patch files generated from the step-by-step repos.
5. `/repos/` This directory contains git submodules of all three step-by-step tutorial repositories.
7. `/scripts/` This contains a script that is used to update `/generated/` from the repositories in `/repos/`.
